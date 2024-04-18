'use client'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface AnimateHeroTextProps {
    text: string;
    duration: number;
}

export default function AnimationAboutText({ text, duration }: AnimateHeroTextProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        text.slice(0, latest)
    );
    const opacity = useTransform(count, (latest) =>
        latest / text.length
    );

    useEffect(() => {
        void animate(count, text.length, {
            type: "tween",
            duration: duration,
            onComplete: () => {
                count.set(text.length);
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    return (
        <div className={''}>
            <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                style={{ opacity }}
                className="text-md md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 py-8"
            >

                {displayText}
            </motion.span>

        </div>
    );
}
