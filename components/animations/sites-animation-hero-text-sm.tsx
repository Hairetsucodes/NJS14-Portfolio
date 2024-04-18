'use client'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface AnimateHeroTextProps {
    text: string;
}

export default function SitesAnimateHeroTextSmall({ text }: AnimateHeroTextProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        text.slice(0, latest)
    );
    const opacity = useTransform(count, (latest) =>
        latest / text.length
    );

    useEffect(() => {
        const duration = text.length * 0.06; // Adjust the multiplier as needed
        void animate(count, text.length, {
            type: "tween",
            duration: duration,
            ease: "easeIn",
            onComplete: () => {
                count.set(text.length);
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    return (
        <div className={'h-20'}>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ opacity }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold relative  bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 py-8"
            >

                {displayText}
            </motion.span>
        </div>
    );
}
