import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "@/auth.config";
import {db} from "@/lib/db";
import {getUserById} from '@/data/user'

declare module "next-auth" {

}

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        async session({token, session}) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role === "ADMIN" || token.role === "AUTHOR" || token.role === "USER") {
                session.user.role = token.role;
            } else {
                session.user.role = "USER";
            }
            return session;
        },
        async jwt(token: any) {
            if (!token.token.sub) return token
            const existingUser: any = await getUserById(token.token.sub)
            if (!existingUser) return token
            token.token.role = existingUser.role
            return token.token;
        },
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig,
});
