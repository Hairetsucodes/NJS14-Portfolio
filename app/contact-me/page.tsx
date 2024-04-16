'use client'
import {ContactSection} from "@/components/contact-page/contact-section";
import {ContactForm} from "@/components/contact-page/contact-form";
import {motion} from "framer-motion";


export default function Home() {
    return (
        <main className="">
            <div className={'mx-10'}>
                <ContactSection/>
            </div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .9}} className={'mx-10'}>
                <ContactForm/>
            </motion.div>
        </main>
    );
}
