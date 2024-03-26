"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export default function UnAuthenticated({ children }: Props) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.push("/");
  }, [router, status]);

  if (status === "unauthenticated") {
    return <>{children}</>;
  }

  return null;
}
