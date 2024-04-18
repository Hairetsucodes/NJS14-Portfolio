"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type Tab = {
    title: string;
    value: string;
    timeline: number | string;
    content?: string | React.ReactNode | any;
};

interface TabsInterface {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
    selectedOption: string;
    setSelectedOption: any;
}

export const Tabs = ({
    selectedOption,
    setSelectedOption,
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
}: TabsInterface) => {
    const [active, setActive] = useState<Tab>(propTabs[0]);
    const [tabs, setTabs] = useState<Tab[]>(propTabs);

    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    };
    useEffect(() => {
        moveSelectedTabToTop(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOption]);
    const [hovering, setHovering] = useState(false);

    return (
        <>
            <div
                className={cn(
                    "flex lg:hidden relative max-w-full w-full p-12",
                    containerClassName
                )}
            >
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {propTabs.map((tab, idx) => (
                            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <div className="flex flex-col items-center justify-between w-full">
                                            <button
                                                key={tab.title}
                                                onClick={() => {
                                                    moveSelectedTabToTop(idx);
                                                }}
                                                onMouseEnter={() => setHovering(true)}
                                                onMouseLeave={() => setHovering(false)}
                                                className={cn("text-center rounded-full", tabClassName)}
                                                style={{
                                                    transformStyle: "preserve-3d",
                                                }}
                                            >
                                                <CardContent
                                                    className="flex h-40 justify-center items-center text-center">
                                                    <div className={''}>
                                                        <div className="p-2">
                                                            <p className="text-center text-3xl bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 bg-card font-bold">
                                                                {tab.title}
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800 bg-card font-semibold">
                                                                {tab.timeline}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </button>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div
                className="lg:flex hidden flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full">
                <div className={"absolute w-full flex"}>
                    <RadioGroup
                        value={selectedOption}
                        onValueChange={setSelectedOption}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="History" id="History" />
                            <Label htmlFor="History">History</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Skills" id="Skills" />
                            <Label htmlFor="Skills">Skills</Label>
                        </div>
                    </RadioGroup>
                </div>
                <ol className="justify-center items-center text-center sm:flex">
                    {propTabs.map((tab, idx) => (
                        <li key={idx} className="relative ">
                            <div className="w-full">
                                <p
                                    className="w-full flex text-sm justify-center text-center items-center font-normal leading-none text-gray-400 dark:text-gray-500">{tab.timeline}</p>
                            </div>
                            <Button
                                onClick={() => {
                                    moveSelectedTabToTop(idx);
                                }}
                                onMouseEnter={() => setHovering(true)}
                                onMouseLeave={() => setHovering(false)}
                                variant={'ghost'}
                                className={cn("relative px-2 rounded-full text-sm", tabClassName)}
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                {active.value === tab.value && (
                                    <motion.div
                                        layoutId="clickedbutton"
                                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                        className={cn(
                                            "absolute inset-0 bg-slate-800 dark:bg-zinc-800 rounded-full ",
                                            activeTabClassName
                                        )}
                                    />
                                )}
                                <span className="relative block text-blue-400">
                                    {tab.title}
                                </span>
                            </Button>
                        </li>
                    ))}
                </ol>
            </div>
            <FadeInDiv
                tabs={tabs}
                active={active}
                key={active.value}
                hovering={hovering}
                className={cn("mt-4", contentClassName)}
            />
        </>
    );
};
export const FadeInDiv = ({
    className,
    tabs,
    hovering,
}: {
    className?: string;
    key?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
}) => {
    const isActive = (tab: Tab) => {
        return tab.value === tabs[0].value;
    };
    return (
        <div className="relative w-full h-full">
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}
                    style={{
                        scale: 1 - idx * 0.1,
                        top: hovering ? idx * -50 : 0,
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 40, 0] : 0,
                    }}
                    className={cn("w-full h-full", className)}
                >
                    {isActive(tab) && tab.content}
                    {!isActive(tab) && (<motion.div
                        key={tab.value}
                        layoutId={tab.value}
                        style={{
                            scale: 1 - idx * 0.1,
                            top: hovering ? idx * -50 : 0,
                            zIndex: -idx,
                            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                        }}
                        animate={{
                            y: isActive(tab) ? [0, 40, 0] : 0,
                        }}
                        className={cn("w-full h-full absolute top-0 left-0", className)}
                    ></motion.div>)}
                </motion.div>
            ))}
        </div>
    );
};