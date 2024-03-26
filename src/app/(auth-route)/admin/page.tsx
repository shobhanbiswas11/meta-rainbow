import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Admin() {
  return (
    <div className="container max-w-screen-xl pt-10 space-y-4">
      <section>
        <h1 className="text-2xl">Welcome to Admin Section</h1>
      </section>

      <section>
        <Button as={Link} href="admin/user" color="primary">
          See All users
        </Button>
      </section>
    </div>
  );
}
