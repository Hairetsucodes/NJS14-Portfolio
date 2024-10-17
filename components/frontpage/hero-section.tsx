"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import AnimateHeroText from "@/components/animations/animation-hero-text";

export function HeroSection() {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative flex flex-col items-center justify-center h-[30rem] mx-10 overflow-hidden rounded border-blue-500"
        >
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
                <AnimateHeroText text="Welcome to Hairetsu's portfolio." />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                    className="relative z-10 mx-auto text-lg lg:text-2xl md:text-xl font-medium text-white mt-4 max-w-2xl"> I&apos;m
                    Thomas Whidden, also known as Hairetsu. I am a software developer who loves to learn and understand deeply how things work. 
                    I thrive on creating innovative solutions to problems. If you&apos;re looking to collaborate or add a valuable
                    creating innovative solutions to problems. If you&apos;re looking to collaborate or add a valuable
                    addition to your team, I&apos;d love to connect and discuss how I can contribute.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                    className="relative z-10 mx-auto text-2xl font-medium text-white max-w-2xl mt-4"> Explore some
                    of my projects below.
                </motion.p>
            </div>
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute h-full w-full"
                    >
                        <CanvasRevealEffect
                            animationSpeed={5}
                            containerClassName="bg-transparent"
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                            ]}
                            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                            dotSize={2}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <div
                className="absolute inset-0 bg-black/50 dark:bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)]" />
        </div>
    )
        ;
}