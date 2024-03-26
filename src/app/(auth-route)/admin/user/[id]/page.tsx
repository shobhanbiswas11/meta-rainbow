import { deleteUser, makeAdmin, removeAdmin } from "@/actions";
import { SubmitButton } from "@/components/submit-button";
import prisma from "@/db";
import { getUserType } from "@/user-type";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}

export default async function page({ params: { id } }: PageProps) {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  if (!user) return notFound();

  return (
    <div className="container max-w-screen-xl space-y-4">
      <section>
        <div>
          <span className="font-bold text-foreground-300">Name:</span>{" "}
          {user.name}
        </div>
        <div>
          <span className="font-bold text-foreground-300">Email:</span>{" "}
          {user.email}
        </div>
        <div>
          <span className="font-bold text-foreground-300">Role:</span>{" "}
          {user.role}
        </div>
      </section>

      <section>
        {getUserType(user.role) === "admin" ? (
          <form action={removeAdmin}>
            <input type="hidden" name="id" value={user.id} />
            <SubmitButton color="danger">Revoke Admin Privilege</SubmitButton>
          </form>
        ) : (
          <form action={makeAdmin}>
            <input type="hidden" name="id" value={user.id} />
            <SubmitButton color="primary">Make Admin</SubmitButton>
          </form>
        )}
      </section>
      <section>
        <form action={deleteUser}>
          <input type="hidden" name="id" value={user.id} />
          <SubmitButton color="danger">Delete User</SubmitButton>
        </form>
      </section>
    </div>
  );
}
