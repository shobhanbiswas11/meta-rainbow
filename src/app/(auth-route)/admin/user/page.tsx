import UserList from "@/components/user/user-list";
import prisma from "@/db";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="container max-w-screen-xl space-y-4 py-10">
      <UserList users={users} />
    </div>
  );
}
