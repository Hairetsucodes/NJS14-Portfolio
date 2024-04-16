'use client'
import {NavMenu} from "@/components/navigation/nav-menu";
import {AboutMe} from "@/components/about-page/About";
import {Footer} from "@/components/Footer";
import {cn} from "@/lib/utils";

export default function Home() {
    return (
        <main
            className="">
                <div className={'justify-center items-center py-4'}>
                    <AboutMe/>
                </div>
        </main>
);
}