import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions, DefaultSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
        } & DefaultSession["user"];
    }
}

export const nextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        }),
    ],
} satisfies AuthOptions;

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };