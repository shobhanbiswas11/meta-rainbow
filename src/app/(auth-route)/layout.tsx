"use client";

import Header from "@/components/header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export default function AuthenticatedRoute({ children }: Props) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [router, status]);

  if (status === "authenticated") {
    return (
      <div>
        <Header />
        <div className="pt-10">{children}</div>
      </div>
    );
  }

  return null;
}
