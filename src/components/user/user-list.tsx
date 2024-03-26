"use client";

import { paths } from "@/paths";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "role",
    label: "Role",
  },
];

export default function UserList({ users }: { users: User[] }) {
  const router = useRouter();

  const rows = useMemo(() => {
    return users.map((user) => ({
      key: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    }));
  }, [users]);

  return (
    <Table
      aria-label="User Table"
      onRowAction={(id) => {
        router.push(paths.user(id.toString()));
      }}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow
            key={item.key}
            className="hover:bg-neutral-600 cursor-pointer"
          >
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
