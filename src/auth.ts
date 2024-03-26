import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
      async authorize(credentials, req) {
        return {
          name: "Bob",
          email: "hello@example.com",
          id: "id",
          role: "admin",
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
