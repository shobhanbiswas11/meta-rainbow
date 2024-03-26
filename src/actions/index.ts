"use server";

import { signIn, signOut } from "@/auth";
import prisma from "@/db";
import { paths } from "@/paths";
import { Role } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function authenticate(_currentState: unknown, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email || !password) return "Cannot be empty";
  await signIn("credentials", {
    email,
    password,
    redirectTo: "/",
  });
  return "";
}

export async function logout() {
  return signOut();
}

async function updateUserRole(role: Role, formData: FormData) {
  const id = formData.get("id")?.toString();
  if (!id) throw new Error("id not found");

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      role,
    },
  });
  revalidatePath(paths.user(id));
}

export async function makeAdmin(formData: FormData) {
  await updateUserRole(Role.admin, formData);
}

export async function removeAdmin(formData: FormData) {
  await updateUserRole(Role.user, formData);
}

export async function deleteUser(formData: FormData) {
  const id = formData.get("id")?.toString();
  if (!id) throw new Error("id not found");

  await prisma.user.delete({
    where: { id },
  });

  revalidatePath(paths.users());
  redirect(paths.users());
}
