'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import SitesAnimateHeroText from "@/components/animations/sites-animation-hero-text";

export default function HiringFM() {
    return (
        <main className="">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center pt-10 pb-8">
                <div className={'pb-8 mx-3'}>
                    <SitesAnimateHeroText text={'Hiring.fm'} />
                </div>
                <div className="bg-card border rounded-lg p-8 md:w-2/3 mb-6 shadow-lg mx-3">
                    <div className="flex flex-col md:flex-row items-center justify-center w-full text-center md:text-left">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0 p-4 ">
                            <div className={"w-full flex justify-center items-center"}>
                                <Link href={'https://hiring.fm'}>
                                    <Image src={'/hiringfm.png'} alt={'HiringFM'}
                                        className="rounded-lg border hover:opacity-70"
                                        height={400} width={560} />
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="max-w-2xl mx-auto text-lg"
                            >
                                Empower your career with HiringFM. Discover dream jobs directly from top employers, bypass recruiters, and take control of your career path. With 1.6M+ opportunities, create profiles, craft resumes, and access job directories. Choose flexible plans to invest in your future success.
                            </motion.p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full md:flex-row md:w-2/3 space-y-6 md:space-y-0 md:space-x-6 mb-6">
                    <div className="bg-card border rounded-lg p-6 md:w-1/2 shadow-lg md:mx-0 mx-3">
                        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                        <ul className="list-disc pl-6">
                            <li>1.6M+ Job Opportunities</li>
                            <li>Direct Employer Connections</li>
                            <li>Profile & Resume Creation</li>
                            <li>Flexible Subscription Plans</li>
                        </ul>
                    </div>
                    <div className="bg-card border rounded-lg p-6 md:w-1/2 shadow-lg md:mx-0 mx-3">
                        <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                        <ul className="list-disc pl-6">
                            <li>Bypass Recruiters</li>
                            <li>Career Path Control</li>
                            <li>Extensive Job Directory</li>
                            <li>Tailored Job Matches</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-card border rounded-lg p-6 md:w-2/3 shadow-lg mx-3">
                    <h2 className="text-2xl font-bold mb-4">Explore HiringFM</h2>
                    <p className="mb-6">
                        Unlock endless possibilities for your career. Join HiringFM today and take the next step towards your dream job.
                    </p>
                    <Link href={'https://hiring.fm'}>
                        <Button>
                            Get Started
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}