import { Provider } from "@/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meta Rainbow",
  description: "This is a MERN Stack Test Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-background text-foreground">
      <body className={inter.className}>
        <Provider>
          {children}
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
