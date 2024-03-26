import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function AdminLayout({ children }: Props) {
  const data = await auth();

  if (data?.user.role !== "admin") {
    return redirect("/");
  }

  return <>{children}</>;
}
