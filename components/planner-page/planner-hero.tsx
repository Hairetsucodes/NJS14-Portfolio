"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import AnimateHeroText from "@/components/animations/animation-hero-text";

export function PlannerHeroSection() {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative flex flex-col items-center justify-center h-[30rem] mx-10 overflow-hidden rounded border-blue-500"
        >
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
                <AnimateHeroText text="CNTRL Planner" />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="relative z-10 max-w-2xl mx-auto text-2xl font-medium text-white md:text-2xl"
                >
                    Harness the power of AI to streamline your planning process. CNTRL Planner intelligently breaks down complex tasks into manageable, high-level steps, ensuring you stay focused and efficient. Whether you&apos;re managing a project, setting personal goals, or tackling daily responsibilities, CNTRL Planner is your ultimate productivity companion.
                </motion.p>
            </div>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute  h-full w-full"
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
            {/* Radial gradient for the cute fade */}

            <div className="absolute inset-0 bg-black/50 dark:bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)]" />

        </div>
    );
}