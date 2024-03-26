"use client";

import { logout } from "@/actions";
import { paths } from "@/paths";
import { getUserType } from "@/user-type";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function HeaderUser() {
  const { data, status } = useSession();
  const isAdmin = getUserType(data?.user.role) === "admin";

  if (status === "loading") return null;
  if (status === "unauthenticated") return null;

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <User name={data?.user.email} description={isAdmin && "admin"} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        {isAdmin &&
          ((
            <DropdownItem key="admin" as={Link} href={paths.admin()}>
              Admin Dashboard
            </DropdownItem>
          ) as any)}
        <DropdownItem
          key="logout"
          color="danger"
          onPress={async () => {
            await logout();
          }}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
