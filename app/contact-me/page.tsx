'use client'
import {NavMenu} from "@/components/navigation/nav-menu";
import {ContactSection} from "@/components/contact-page/contact-section";
import {ContactForm} from "@/components/contact-page/contact-form";
import {motion} from "framer-motion";
import {Footer} from "@/components/about-page/Footer";
import {cn} from "@/lib/utils";

export default function Home() {
    return (
        <main className="min-h-screen h-full w-full bg-black dark:bg-grid-small-blue-500 bg-grid-small-blue-500 ">
            <header
                className={cn("dark fixed top-0 z-50 flex h-16 w-screen shrink-0 justify-between border-b  bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl")}>
                <div className={'w-full flex justify-center items-center'}>
                    <NavMenu/>
                </div>
            </header>
                <div className={'mx-10 pt-6'}>
                    <ContactSection/>
                </div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .9}} className={'mx-10'}>
                    <ContactForm/>
                </motion.div>
                <Footer/>
        </main>
);
}
