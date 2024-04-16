import authConfig from '@/auth.config';
import NextAuth from 'next-auth';
import {publicRoutes, authRoutes, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT} from '@/routes';
import {NextResponse} from "next/server";

const {auth} = NextAuth(authConfig);

export default auth((req) => {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.some(route => nextUrl.pathname === route || nextUrl.pathname.startsWith('/blog'));
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    if (isApiAuthRoute) {
        return NextResponse.next();
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return NextResponse.next();
    }
    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/signin', nextUrl));
    }
    return NextResponse.next();


});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};