"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ children, ...rest }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending} {...rest}>
      {children}
    </Button>
  );
}
