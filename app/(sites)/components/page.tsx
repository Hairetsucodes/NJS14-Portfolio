'use client'
import {NavMenu} from "@/components/navigation/nav-menu";
import {cn} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import React from "react";
import {Footer} from "@/components/Footer";
import {Button} from "@/components/ui/button";
import SitesAnimateHeroTextSmall from "@/components/animations/sites-animation-hero-text-sm";

export default function Home() {
    return (
        <main className="">

            <motion.div
                initial={{y: -20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 0.3}}
                className="flex flex-col items-center pt-10 pb-8">
                <div className={'pb-8'}>
                    <SitesAnimateHeroTextSmall text={'CNTRL Components'}/>
                </div>
                <div className="bg-card border  rounded-lg p-8 md:w-2/3 mb-6 shadow-lg mx-3">
                    <div
                        className="flex flex-col md:flex-row items-center justify-center w-full text-center md:text-left">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0 p-4 ">
                            <div className={"w-full  flex justify-center items-center"}>
                                <Link href={'https://components.hairetsu.com'}>
                                    <Image src={'/comp.png'} alt={'Components App'}
                                           className="rounded-lg border hover:opacity-70"
                                           height={400} width={560}/>
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.8}}
                                className="max-w-2xl mx-auto text-lg"
                            >
                                Streamline your web development workflow with AI-assisted component creation. This
                                powerful tool leverages artificial intelligence to generate reusable, efficient, and
                                customizable components tailored to your specific project requirements. Save time,
                                reduce manual coding efforts, and ensure consistency across your web application.
                            </motion.p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full md:flex-row md:w-2/3 space-y-6 md:space-y-0 md:space-x-6 mb-6">
                    <div className="bg-card border  rounded-lg p-6 md:w-1/2 shadow-lg md:mx-0 mx-3">
                        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                        <ul className="list-disc pl-6">
                            <li>AI assisted component creation / edits</li>
                            <li>Modify components in real time</li>
                            <li>Includes all Tailwind CSS classes</li>
                            <li>Shadcn/UI is also implemented. More to come!</li>
                        </ul>
                    </div>
                    <div className="bg-card border  rounded-lg p-6 md:w-1/2 shadow-lg md:mx-0 mx-3">
                        <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
                        <ul className="list-disc pl-6">
                            <li>Frontend: React, Next.js, Tailwind CSS</li>
                            <li>Backend: Node.js, Express.js</li>
                            <li>Database: MySQL</li>
                            <li>AI: OpenAI GPT-4</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-card border  rounded-lg p-6 md:w-2/3 shadow-lg mx-3">
                    <h2 className="text-2xl font-bold mb-4">Try CNTRL Components</h2>
                    <p className="mb-6">
                        Elevate your productivity with CNTRL Components. Experience AI-assisted planning and achieve
                        your
                        goals efficiently.
                    </p>
                    <Link href={'https://components.hairetsu.com'}>
                        <Button>
                            Get Started
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}