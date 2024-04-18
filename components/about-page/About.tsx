'use client'

import { Spotlight } from "@/components/ui/Spotlight";
import { AboutTabs } from "@/components/about-page/about-cards-new";
import { motion } from "framer-motion";

export function AboutMe() {
    return (
        <div className="p-2 max-w-4xl mx-auto">
            <div className="">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="#42A5F5"
                />
            </div>
            <motion.div initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <AboutTabs />
            </motion.div>
        </div>
    );
}