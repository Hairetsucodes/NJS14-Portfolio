"use client";

import React from "react";
import DecipherLogo from "@/assets/decipher.png";
import NotateLogo from "@/assets/notate.png";
import { motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";
import { ThemeImage } from "@/components/theme/theme-image";
import Image from "next/image";
import { Card } from "@/components/frontpage/card";

export function SitesSection() {
  return (
    <div className={"mt-8 mx-10 "}>
      <div className="flex flex-col lg:flex-row justify-center w-full gap-4 mx-auto ">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card
            url={"https://notate.hairetsu.com"}
            screenshot={"/notate-ss1.png"}
            description={
              "A powerful cross-platform (Mac/Windows/Linux) open-source AI research assistant built for privacy and performance. Notate helps you analyze documents, webpages, and videos while keeping your data under your control. Features local deployment options, multiple AI model support, and advanced document analysis capabilities."
            }
            stack={["Python", "Typescript", "ElectronJS", "SQLite", "ChromaDB"]}
            title="Notate"
            icon={
              <ThemeImage
                className={cn("rounded-lg p-2")}
                alt="logo"
                srcLight={NotateLogo}
                srcDark={NotateLogo}
                width={160}
                height={50}
              />
            }
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-transparent rounded-[10px]"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card
            url={"https://decipher.hairetsu.com"}
            screenshot={"/decipher-ss1.png"}
            description={
              "A robust server-side tool I developed to protect high-traffic applications from fraud and spam. It features real-time monitoring, custom machine learning models, and efficient data management, handling millions of daily requests without compromising performance."
            }
            stack={["Python", "NextJS", "Elixir", "MySQL"]}
            title="Fraud Detection"
            icon={
              <ThemeImage
                className={cn("rounded-lg p-2")}
                alt="logo"
                srcLight={DecipherLogo}
                srcDark={DecipherLogo}
                width={160}
                height={50}
              />
            }
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-transparent rounded-[10px]"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card
            url={"https://hiring.fm"}
            screenshot={"/hiring-ss.png"}
            description={
              "A job search platform I created to connect job seekers directly with employers. It features a database of over 2.4 million opportunities, user profile creation, and resume crafting tools. The platform aims to streamline the job search process and empower users in their career journeys."
            }
            title="Job Search"
            stack={["NextJS", "MySQL", "Python"]}
            icon={
              <Image
                className={cn("")}
                alt="logo"
                src="/logo-dark.png"
                width={124}
                height={43}
              />
            }
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-transparent rounded-[10px]"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              dotSize={2}
            />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
