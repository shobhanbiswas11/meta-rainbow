"use client";

import { store } from "@/store";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";

export const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <NextUIProvider>{children}</NextUIProvider>
      </ReduxProvider>
    </SessionProvider>
  );
};
