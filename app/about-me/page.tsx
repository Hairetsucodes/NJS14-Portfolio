'use client'
import { AboutMe } from "@/components/about-page/About";


export default function Home() {
    return (
        <main
            className="">
            <div className={'justify-center items-center py-4'}>
                <AboutMe />
            </div>
        </main>
    );
}