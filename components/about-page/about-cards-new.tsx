"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { Meteors } from "@/components/ui/meteors";
import AnimationAboutText from "@/components/about-page/animation-about-text";
import me from "@/assets/me.jpeg";
import { ExperienceSkills, LanguagesSkills } from "@/components/about-page/Skills";
import { useState } from "react";

export function AboutTabs() {

    const [selectedOption, setSelectedOption] = useState("History");
    const tabs = [
        {
            title: "Introduction",
            value: "part-one",
            timeline: 1996,
            content: (
                <div
                    className="relative p-4 w-full bg-card rounded-xl  border  overflow-hidden flex flex-col justify-end items-start">
                    <Meteors number={20} />
                    <div className={'bg-card h-full w-full rounded-xl'}>
                        <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 bg-card font-bold text-3xl mb-6"> My
                            Introduction
                        </p>
                        <div className={'w-full flex justify-center items-center '}>
                            <Image src={me} alt={'me'} width={200} height={200} className={'rounded-full border-2'} />
                        </div>
                        <div className={'p-4 min-h-[350px] lg:min-h-[240px]'}>
                            <AnimationAboutText duration={3}
                                text={`My official government name is Thomas Whidden, though for the last 25 years, I have been digitally known as Hairetsu. My journey into computers began when my parents brought home a 386 with a 28.8 modem. Playing games off floppies and dialing into Prodigy Internet had my little brain going crazy. I was hooked.`} />

                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Teenage Years",
            value: "part-two",
            timeline: 1999,
            content: (
                <div
                    className="relative w-full bg-card rounded-xl p-4 border px-4 py-8 overflow-hidden flex flex-col justify-end items-start">
                    <Meteors number={20} />
                    <div className={'bg-card w-full rounded-xl '}>
                        <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 bg-card font-bold text-3xl mb-6"> Teenage
                            Years
                        </p>
                        <div className={'p-4 min-h-[400px] lg:min-h-[520px]'}>
                            <AnimationAboutText duration={3}
                                text={`As a young teen, I was introduced to IRC and AOL, which sparked my fascination with hacking and phreaking when I witnessed what others were able to do with their exploits. One of my best friends at the time, who went by the name Notepad and whom I had met in high school, further fueled my obsession and sparked my interest in web development / Flash in the late 90s. The idea of being able to manipulate the phone system, get free calls, or take over a user's machine remotely captivated me. I caught the last breath of the phreaking scene and am very grateful for it. When I was 14, I received a lifetime ban from BellSouth, which is now AT&T, so I guess I'm in the clear. This experience was my introduction to the world of hacking, security, and early web development, and I was hooked.`} />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Business",
            value: "part-three",
            timeline: 2002,
            content: (
                <div
                    className="relative w-full bg-card rounded-xl p-4 border px-4 py-8 overflow-hidden flex flex-col justify-end items-start">
                    <Meteors number={20} />
                    <div className={'bg-card w-full rounded-xl'}>
                        <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 bg-card font-bold text-3xl mb-6"> Business
                        </p>
                        <div className={'p-4 min-h-[400px] lg:min-h-[400px]'}>
                            <AnimationAboutText duration={3}
                                text={`From 2002 to 2012, I worked in the online marketing industry, focusing on SEO, media buying, and direct marketing through email and other direct contact methods. I take pride in my ability to analyze metrics  and methods to maximize ROI on the amount spent. Understanding the underlying mechanics of how something works to gain an edge has always appealed to me. While others were busy copying methods, I looked to improve and make them better rather than playing follow the leader. This led to my current engineering experience. I was hooked.`} />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Engineering",
            value: "part-four",
            timeline: 2013,
            content: (
                <div
                    className="relative w-full bg-card rounded-xl p-4 border px-4 py-8 overflow-hidden flex flex-col justify-end items-start">
                    <Meteors number={20} />
                    <div className={'bg-card w-full rounded-xl '}>
                        <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 bg-card font-bold text-3xl mb-6"> Engineering
                        </p>
                        <div className={'p-4 min-h-[400px] lg:min-h-[400px]'}>
                            <AnimationAboutText duration={3}
                                text={`It was 2013, and cannabis was legalizing. I had always had a passion for the plant and its many uses. I took that opportunity to get into the industry and started a company called WeedRAR, a play on WinRAR and weed, as this company was a science-driven concentrate company (a play on extraction/extractor). We developed our own extraction methods and machine to produce a product that was unmatched in the industry at the time, winning multiple industry awards and collaborating with some of the biggest names in the industry. I was hooked.`} />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Software Engineering",
            value: "part-five",
            timeline: 2021,
            content: (
                <div
                    className="relative w-full bg-card rounded-xl p-4 border px-4 py-8 overflow-hidden flex flex-col justify-end items-start">
                    <Meteors number={20} />
                    <div className={'bg-card w-full rounded-xl '}>
                        <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 bg-card font-bold text-3xl mb-6"> Software
                            Engineering
                        </p>
                        <div className={'p-4 min-h-[400px] lg:min-h-[350px]'}>
                            <AnimationAboutText duration={3}
                                text={`In 2021, I was burnt out from the cannabis industry, watching  regulations and taxes bleed everyone I knew dry, as well as running  out of things to learn. I decided to go back to my roots and get into  software engineering. I picked up Python and started learning all that  I could, building simple projects. Six months into my Python journey,  I had learned asyncio, multithreading, and multiprocessing, and made  some pretty useful tools for my friends who were still in the  marketing industry. I was hooked again.`} />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "AI",
            value: "part-six",
            timeline: 2022,
            content: (
                <div
                    className="relative w-full bg-card rounded-xl p-4 border px-4 py-8 overflow-hidden flex flex-col justify-end items-start">
                    <Meteors number={20} />
                    <div className={'bg-card w-full rounded-xl '}>
                        <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 bg-card font-bold text-3xl mb-6"> AI
                        </p>
                        <div className={'p-4 min-h-[400px] lg:min-h-[300px]'}>
                            <AnimationAboutText duration={3}
                                text={`In 2022, I was introduced to GPT-3, and I was amazed. Then, I discovered Stable Diffusion from my friend YTCracker, who was making a music video using this image diffusion software. I was blown away. I obsessed over this open-source project for a couple of months and ended up building CNTRL.AI with a friend, implementing web search, image generation, Twitter posting, and a ton of other functions into the site. I learned all about vector stores, interfacing with LLMs, and  other AI models. I was hooked.`} />
                        </div>

                    </div>
                </div>
            ),
        },
        {
            title: "Meow",
            timeline: 2024,
            value: "part-seven",
            content: (
                <div
                    className="relative w-full bg-card rounded-xl p-4 border px-4 py-8 overflow-hidden flex flex-col justify-end items-start">
                    <Meteors number={20} />
                    <div className={'bg-card w-full rounded-xl'}>
                        <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 bg-card font-bold text-3xl mb-6"> Meow
                        </p>
                        <div className={'p-4 min-h-[400px] lg:min-h-[220px]'}>
                            <AnimationAboutText duration={3}
                                text={`At this point in my career, I look forward to learning every day and creating amazing tools around  the AI space. I'm always looking to collaborate with others, learn from them, and teach  them what I know. Below is a list of some of the technologies, languages, and frameworks I have  worked with.`} />
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    const frameWorkTabs = [{
        title: "Languages & Frameworks",
        timeline: "",
        value: "Languages",
        content: (
            <div
                className="relative w-full bg-card rounded-xl p-4 border px-4 py-8 overflow-hidden flex flex-col justify-end items-start">
                <Meteors number={20} />
                <div className={'bg-card h-full w-full rounded-xl px-2 md:px-4'}>
                    <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 bg-card font-bold text-3xl mb-6"> My Skills
                    </p>
                    <div className={'w-full flex-col flex-1 columns-1'}>
                        <LanguagesSkills />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Experience",
        timeline: "",
        value: "Experience",
        content: (
            <div
                className="relative w-full bg-card rounded-xl p-4 border px-4 py-8 overflow-hidden flex flex-col justify-end items-start">
                <Meteors number={20} />
                <div className={'bg-card h-full w-full rounded-xl px-2 md:px-4'}>
                    <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 bg-card font-bold text-3xl mb-6"> My Skills
                    </p>
                    <div className={'w-full flex-col flex-1 columns-1'}>
                        <ExperienceSkills />
                    </div>
                </div>
            </div>
        ),
    },
    ];

    return (
        <div className={""}>
            <div className={"absolute z-30  pt-2"}>
            </div>
            <div className={" pt-2 px-4"}>
                {selectedOption === "History" ? (
                    <Tabs tabs={tabs} setSelectedOption={setSelectedOption} selectedOption={selectedOption} />
                ) : (
                    <Tabs tabs={frameWorkTabs} setSelectedOption={setSelectedOption} selectedOption={selectedOption} />
                )}
            </div>
        </div>
    );
}

