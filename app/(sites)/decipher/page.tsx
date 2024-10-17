"use client";
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
        className="flex flex-col items-center pt-10 pb-8"
      >
        <div className={"pb-8 mx-3"}>
          <SitesAnimateHeroText text={"Hiring.fm"} />
        </div>
        <div className="bg-card border rounded-lg p-8 md:w-2/3 mb-6 shadow-lg mx-3">
          <div className="flex flex-col md:flex-row items-center justify-center w-full text-center md:text-left">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 p-4 ">
              <div className={"w-full flex justify-center items-center"}>
                <Link href={"https://decipher.hairetsu.com"}>
                  <Image
                    src={"/decipher-ss1.png"}
                    alt={"HiringFM"}
                    className="rounded-lg border hover:opacity-70"
                    height={400}
                    width={560}
                  />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="max-w-2xl mx-auto text-lg "
              >
                Decipher is a powerful server-side tool designed to protect
                high-traffic applications from fraud and spam. It combines smart
                technology with real-time monitoring to keep your platform safe
                from malicious activities. With custom machine learning models,
                real-time API tracking, secure server-side operations, and
                efficient data management, Decipher offers comprehensive
                protection tailored to your needs. Built for scale and optimized
                for performance, it can handle millions of requests per day
                while maintaining responsiveness.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:flex-row md:w-2/3 space-y-6 md:space-y-0 md:space-x-6 mb-6">
          <div className="bg-card border rounded-lg p-6 md:w-1/2 shadow-lg md:mx-0 mx-3">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-6">
              <li>Custom Machine Learning Models</li>
              <li>Real-Time API Tracking</li>
              <li>Secure Server-Side Operations</li>
              <li>Efficient Data Management</li>
              <li>High-Volume Request Handling</li>
              <li>Comprehensive Protection</li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6 md:w-1/2 shadow-lg md:mx-0 mx-3">
            <h2 className="text-2xl font-bold mb-4">Benefits</h2>
            <ul className="list-disc pl-6">
              <li>Scalable Architecture</li>
              <li>Optimized Performance</li>
              <li>Enhanced Responsiveness</li>
              <li>Customizable Security Solutions</li>
              <li>Reduced Fraud and Spam</li>
              <li>Improved Platform Integrity</li>
            </ul>
          </div>
        </div>
        <div className="bg-card border rounded-lg p-6 md:w-2/3 shadow-lg mx-3">
          <h2 className="text-2xl font-bold mb-4">Explore Decipher</h2>
          <p className="mb-6">
            Discover the power of Decipher and revolutionize your application&apos;s
            security. Our cutting-edge fraud detection system is designed to
            safeguard your platform against sophisticated threats. With
            Decipher, you&apos;ll gain access to advanced analytics, real-time
            monitoring, and customizable security protocols that adapt to your
            unique needs. Whether you&apos;re running a small business or a large
            enterprise, Decipher scales effortlessly to provide robust
            protection. Take the first step towards a more secure digital
            environment and see how Decipher can transform your approach to
            fraud prevention.
          </p>
          <Link href={"https://decipher.hairetsu.com"}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
