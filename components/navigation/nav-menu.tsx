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
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {Button} from '@/components/ui/button'

export function NavMenu() {
    return (
        <div>
        <div className={'hidden lg:flex'}>
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
                            Portfolio
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
                                                A list of all the projects that I have built in the last year. AI has
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
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    <div className={'flex lg:hidden'}>
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
                                            A list of all the projects that I have built in the last year. AI has
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
