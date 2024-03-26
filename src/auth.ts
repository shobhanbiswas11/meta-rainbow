import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verify } from "password-hash";
import prisma from "./db";

declare module "next-auth" {
  export interface Session {
    user: User & {
      role: string;
    };
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        const email = credentials.email;
        const password = credentials.password;

        if (!email || !password) return null;

        const user = await prisma.user.findFirst({
          where: { email },
        });

        if (!user) return null;

        const passwordCorrect = verify(password, user.password);
        if (!passwordCorrect) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = (user as any).role;
      return token;
    },
    session({ session, token }) {
      (session.user as any).role = token.role;
      return session;
    },
  },
});
