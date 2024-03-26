"use client";

import { authenticate } from "@/actions";
import { Input } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { SubmitButton } from "./submit-button";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="space-y-8">
      <div className="text-2xl text-center">Login to Meta Rainbow</div>
      <form className="max-w-screen-md space-y-2" action={dispatch}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          isRequired
          fullWidth
        />
        <Input
          fullWidth
          type="password"
          name="password"
          placeholder="Password"
          isRequired
        />
        <input type="hidden" name="callbackUrl" value={"/"} />
        <div>{errorMessage && <p>{errorMessage}</p>}</div>
        <SubmitButton fullWidth color="primary">
          Login
        </SubmitButton>
      </form>
    </div>
  );
}
