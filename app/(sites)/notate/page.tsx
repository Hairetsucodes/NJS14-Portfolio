"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import SitesAnimateHeroText from "@/components/animations/sites-animation-hero-text";

export default function Home() {
  return (
    <main className="">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center pt-10 pb-8"
      >
        <div className={"pb-8 mx-3"}>
          <SitesAnimateHeroText text={"CNTRL AI Chat"} />
        </div>
        <div className="bg-card border rounded-lg p-8 md:w-2/3 mb-6 shadow-lg mx-3">
          <div className="flex flex-col md:flex-row items-center justify-center w-full text-center md:text-left">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 p-4 ">
              <div className={"w-full  flex justify-center items-center"}>
                <Link href={"https://cntrl.ai"}>
                  <Image
                    src={"/notate-ss1.png"}
                    alt={"Chat App"}
                    className="rounded-lg border hover:opacity-70"
                    height={400}
                    width={560}
                  />
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
                Experience a powerful, full-featured chat-bot that leverages
                vector storage for efficient document retrieval, seamlessly
                integrates with X.com API, performs web searches, generates
                images, and offers a wide range of advanced capabilities to
                enhance your conversational interactions.
                <div className="mt-4">
                  <p className="text-red-500">
                    This site is no longer available and redirects to hiring.fm
                  </p>
                </div>
              </motion.p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:flex-row md:w-2/3 space-y-6 md:space-y-0 md:space-x-6 mb-6">
          <div className="bg-card border  rounded-lg p-6 md:w-1/2 shadow-lg md:mx-0 mx-3">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-6">
              <li>Vector Storage & Retrieval</li>
              <li>X.com Integrated</li>
              <li>Image Generation</li>
              <li>Web Search</li>
            </ul>
          </div>
          <div className="bg-card border  rounded-lg p-6 md:w-1/2 shadow-lg md:mx-0 mx-3">
            <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
            <ul className="list-disc pl-6">
              <li>Frontend: React, Next.js, Tailwind CSS</li>
              <li>Backend: Node.js, Express.js, FastAPI</li>
              <li>Database: MySQL, REDIS</li>
              <li>Languages: Python, JS, TS</li>
              <li>AI: OpenAI, Anthropic, Gemini, LLama</li>
            </ul>
          </div>
        </div>
        <div className="bg-card border  rounded-lg p-6 md:w-2/3 shadow-lg mx-3">
          <h2 className="text-2xl font-bold mb-4">Try CNTRL AI Chat</h2>
          <p className="mb-6">
            Elevate your productivity with CNTRL AI Chat. Experience AI-assisted
            planning and achieve your goals efficiently.
          </p>
          <Link href={"https://cntrl.ai"}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
