"use client";

import { logout } from "@/actions";
import { getUserType } from "@/user-type";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

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
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">zoey@example.com</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
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
