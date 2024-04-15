import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user"
import bcrypt from "bcryptjs";
export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (!validatedFields.success) {
                    return null;
                }

                const { email, password } = validatedFields.data;
                const user = await getUserByEmail(email);
                if (!user || !('password' in user)) {
                    return null;
                }
                const passwordMatch = await bcrypt.compare(password, user.password as string);
                if (passwordMatch) {
                    console.log("User logged in")
                    return new Response(JSON.stringify(user), { status: 200 })  as any;
                }
                return null;
            }
        })
    ],
    trustHost: true
} as NextAuthConfig;
