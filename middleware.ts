import authConfig from '@/auth.config';
import NextAuth from 'next-auth';
import { type NextRequest } from "next/server";
import { publicRoutes, authRoutes, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT } from '@/routes';

const { auth } = NextAuth(authConfig);

// @ts-ignore
export default auth((req: NextRequest) => {
    const { nextUrl } = req;
    // @ts-ignore
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.some(route => nextUrl.pathname === route || nextUrl.pathname.startsWith('/blog'));
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }

    if (isPublicRoute && isLoggedIn) {
        return null;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/', nextUrl));
    }

    return null;
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};