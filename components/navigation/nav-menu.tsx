"use client"

import * as React from "react"
import Link from "next/link"
import {cn} from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Button} from '@/components/ui/button'

interface NavMenuProps {
    session: any,
    children: React.ReactNode;
}
export function NavMenu({children, session}: NavMenuProps) {
    return (
        <div className="w-full flex  gap-x-2">
            <div className={'hidden w-full justify-center items-center lg:flex'}>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href={"/"} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    <Button variant={'outline'}>
                                        Home
                                    </Button>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={"/about-me"} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    <Button variant={'outline'}>
                                        About Me
                                    </Button>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={'border'}>
                                <Link href={"/portfolio"} legacyBehavior passHref>
                                    Portfolio
                                </Link>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a className="flex h-full w-full select-none flex-col hover:bg-slate-700 justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                               href={"/portfolio"}
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Portfolio
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    A list of all the projects that I have built in the last year. AI
                                                    has
                                                    been
                                                    the focus of them all from
                                                    component creation, project planning and chat bots.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/chat" title="Chat">
                                        CNTRL AI is a chat-bot that can help you with your questions.
                                    </ListItem>
                                    <ListItem href="/planner" title="Planner">
                                        CNTRL Planner is a tool that helps you plan your projects.
                                    </ListItem>
                                    <ListItem href="/components" title="Components">
                                        CNTRL Components is a AI assisted component builder.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={"/blog"} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    <Button variant={'outline'}>
                                        Blog
                                    </Button>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={"/contact-me"} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    <Button variant={'outline'}>
                                        Contact
                                    </Button>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        {session?.user?.role === 'ADMIN' || session?.user?.role === 'AUTHOR' ? (
                            <>
                                <NavigationMenuItem>
                                    <Link href={"/dashboard"} legacyBehavior passHref>
                                        <NavigationMenuLink className={`border ${navigationMenuTriggerStyle()}`}>
                                            Author Dashboard
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                {children}
                            </>
                        ) : null}
                    </NavigationMenuList>
                </NavigationMenu>
                <div className={'flex pl-2 justify-end items-center'}>
                    <Link href={"https://github.com/Hairetsucodes/NJS14-Portfolio"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className={'flex w-full justify-center items-center lg:hidden'}>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href={"/"} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    <Button size={'sm'} variant={'outline'}>
                                        Home
                                    </Button>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={"/about-me"} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    <Button size={'sm'} variant={'outline'}>
                                        About Me
                                    </Button>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={"/blog"} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    <Button size={'sm'} variant={'outline'}>
                                        Blog
                                    </Button>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className={'text-xs'}>
                            <NavigationMenuTrigger className={'border text-xs'}>
                                Portfolio
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                               href={"/portfolio"}
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Portfolio
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    A list of all the projects that I have built in the last year. AI
                                                    has
                                                    been
                                                    the focus of them all from
                                                    component creation, project planning and chat bots.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/chat" title="Chat">
                                        CNTRL AI is a chat-bot that can help you with your questions.
                                    </ListItem>
                                    <ListItem href="/planner" title="Planner">
                                        CNTRL Planner is a tool that helps you plan your projects.
                                    </ListItem>
                                    <ListItem href="/components" title="Components">
                                        CNTRL Components is a AI assisted component builder.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={"/contact-me"} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    <Button size={'sm'} variant={'outline'}>
                                        Contact
                                    </Button>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className={'flex pl-2 justify-end items-center'}>
                    <Link href={"https://github.com/Hairetsucodes/NJS14-Portfolio"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
