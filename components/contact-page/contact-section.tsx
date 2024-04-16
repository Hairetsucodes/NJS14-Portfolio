import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import SitesAnimateHeroTextSmall from "@/components/animations/sites-animation-hero-text-sm";
import React from "react";

export function ContactSection() {
    const socialLinks = [
        { icon: FaGithub, url: "https://github.com/hairetsucodes" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/hairetsu" },
        { icon: FaTwitter, url: "https://x.com/hairetsu" },
        { icon: FaEnvelope, url: "mailto:hairetsu@hairetsu.com" },
    ];

    return (
        <div className="flex justify-center items-center py-8">
            <div className="flex flex-col items-center max-w-3xl">
                <div className="w-full flex justify-center mb-8">
                    <SitesAnimateHeroTextSmall text={"Let's Connect!"}/>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mx-10 mb-8"
                >
                    <p className="text-white text-2xl font-bold text-center">
                        I&apos;m always excited to collaborate on new projects, discuss innovative ideas, or answer any questions you may have. Whether you&apos;re looking for a skilled software developer to join your team, seeking consultation on a technical challenge, or simply want to say hello, I&apos;m here to help!
                    </p>
                </motion.div>
                <div className="flex space-x-6">
                    {socialLinks.map(({ icon: Icon, url }, index) => (
                        <motion.a
                            key={url}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-4xl hover:text-blue-500 transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + index * 0.2 }}
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}