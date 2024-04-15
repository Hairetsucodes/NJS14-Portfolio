"use client";
import React from "react";
import LogoLight from "@/assets/logo-light.png";
import {AnimatePresence, motion} from "framer-motion";
import {CanvasRevealEffect} from "@/components/ui/canvas-reveal-effect";
import {cn} from "@/lib/utils";
import {ThemeImage} from "@/components/theme/theme-image";
import Image from "next/image";
import Link from "next/link";

export function SitesSection() {

    return (
        <div className={"mt-8 mx-10"}>
            {/* motion dive to fade in from the back*/}
            <div className="flex flex-col lg:flex-row justify-center w-full gap-4 mx-auto">

                <motion.div
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    <div className={' overflow-hidden'}>

                    <Card url={'./components'}
                          description={'Streamline your web development workflow with AI-assisted component creation. This powerful tool leverages artificial intelligence to generate reusable, efficient, and customizable components tailored to your specific project requirements. Save time, reduce manual coding efforts, and ensure consistency across your web application.'}
                          title="Components"
                          screenshot={'/comp-thumb.png'}
                          icon={<ThemeImage
                              className={cn("rounded-lg p-2")}
                              alt="logo"
                              srcLight={LogoLight}
                              srcDark={LogoLight}
                              width={124}
                              height={43}
                          />}>
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-transparent"
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                            ]}
                            dotSize={2}
                        />
                    </Card>
            </div>
                </motion.div>
                <motion.div
                    initial={{y: 100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    <Card url={'./planner'} screenshot={'/planner-thumb.png'}
                          description={'Revolutionize your planning process with an AI-powered assistant that helps you efficiently manage your daily tasks, projects, and long-term goals. This intelligent planner adapts to your unique needs, offering personalized suggestions, optimizing your schedule, and ensuring you stay organized and productive throughout your day.'}
                          title="Planner"
                          icon={<ThemeImage
                              className={cn("rounded-lg p-2")}
                              alt="logo"
                              srcLight={LogoLight}
                              srcDark={LogoLight}
                              width={124}
                              height={43}
                          />}>

                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-transparent"
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                            ]}
                            dotSize={2}
                        />
                        {/* Radial gradient for the cute fade */}
                        <div
                            className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90"/>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <Card url={'./chat'} screenshot={'/chat-thumb.png'}
                          description={'Experience a powerful, full-featured chat-bot that leverages vector storage for efficient document retrieval, seamlessly integrates with X.com API, performs web searches, generates images, and offers a wide range of advanced capabilities to enhance your conversational interactions.'}
                          title="Chat"
                          icon={<ThemeImage
                              className={cn("rounded-lg p-2")}
                              alt="logo"
                              srcLight={LogoLight}
                              srcDark={LogoLight}
                              width={124}
                              height={43}
                          />}>
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-transparent"
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                            ]}
                            dotSize={2}
                        />
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}

const Card = ({
                  title,
                  icon,
                  url,
                  screenshot,
                  children,
                  description
              }: {
    description?: string;
    title: string;
    screenshot: string;
    url: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className=" group/canvas-card flex items-center rounded justify-center dark:border-blue-500 max-w-sm w-full mx-auto  min-h-[22rem] relative"
        >

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
            <Link href={`${url}`}>
                <div className="z-5">
                    <div className={'absolute top-0'}>
                        <div>
                            <h2 className="text-sm p-4 font-semibold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full h-full mx-auto">
                                {icon} {title}
                            </h2>
                        </div>
                        <div
                            className="text-sm w-full p-4 h-full flex font-semibold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
                            <Image className={'border-2 rounded-lg text-white shadow-2xl'} src={screenshot} alt={'screenshot'}
                                   width={452}
                                   height={332}/>
                        </div>
                    </div>
                        <h2 className="text-sm p-4 font-semibold opacity-0 group-hover/canvas-card:opacity-100 relative z-10  group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-500">
                            {icon} {title}
                        </h2>
                    <h2 className="dark:text-white pt-4 p-4 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-500">
                        {description}
                    </h2>
                </div>
            </Link>
        </div>
    );
};
