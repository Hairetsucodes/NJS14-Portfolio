import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from '@/components/ui/Toast'
import { cn } from "@/lib/utils";
import { NavMenu } from "@/components/navigation/nav-menu";
import { Footer } from "@/components/footer/Footer";
import { auth, signOut } from '@/auth'
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    openGraph: {
        title: 'Hairetsu.com',
        description: 'Built with Open Portfolio by Hairetsu'
    },
    title: "Hairetsu.com",
    description: "Built with Open Portfolio by Hairetsu",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session: string | any = await auth()
    function SignOutButton() {
        return (
            <form
                action={async () => {
                    'use server'
                    await signOut()
                }}
            >
                <button type="submit">Sign Out</button>
            </form>
        )
    }

    return (
        <html lang="en">
            <body
                className={`min-h-screen h-full w-full bg-black dark:bg-grid-small-blue-500 overflow-x-hidden bg-grid-small-blue-500 ${inter.className}`}>
                <header
                    className={cn("dark fixed top-0 z-50 flex h-16 w-screen shrink-0 justify-between border-b  bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl")}>
                    <div className={'w-full flex justify-center items-center'}>
                        <NavMenu session={session} >
                            <SignOutButton />
                        </NavMenu>
                    </div>
                </header>
                <div className={cn("pt-16 ")}>
                    {children}
                </div>
                <Toaster />
                <Footer />
            </body>
        </html>
    );
}
