"use client";
import React from "react";
import LogoLight from "@/assets/logo-light.png";
import DecipherLogo from "@/assets/decipher.png";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";
import { ThemeImage } from "@/components/theme/theme-image";
import Image from "next/image";
import Link from "next/link";
import { FileCode, Database, Code, Cpu, DatabaseIcon } from "lucide-react";
import { FaErlang, FaPython } from "react-icons/fa";
import { TbBrandMysql, TbBrandNextjs } from "react-icons/tb";

export function SitesSection() {
  return (
    <div className={"mt-8 mx-10 "}>
      <div className="flex flex-col lg:flex-row justify-center w-full gap-4 mx-auto ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card
            url={"/decipher"}
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
              containerClassName="bg-transparent"
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
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card
            url={"./hiringfm"}
            screenshot={"/hiring-ss.png"}
            description={
              "A job search platform I created to connect job seekers directly with employers. It features a database of over 2.4 million opportunities, user profile creation, and resume crafting tools. The platform aims to streamline the job search process and empower users in their career journeys."
            }
            title=""
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
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              dotSize={2}
            />
          </Card>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={" overflow-hidden"}>
            <Card
              url={"./components"}
              description={
                "An AI-assisted web development tool I built to generate reusable and customizable components. It's designed to save time, reduce manual coding, and ensure consistency across web applications. This project showcases my skills in AI integration and web development optimization."
              }
              stack={["NextJS", "MySQL"]}
              title="Components"
              screenshot={"/components-ss.png"}
              icon={
                <ThemeImage
                  className={cn("rounded-lg p-2")}
                  alt="logo"
                  srcLight={LogoLight}
                  srcDark={LogoLight}
                  width={124}
                  height={43}
                />
              }
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-transparent"
                colors={[
                  [59, 130, 246],
                  [139, 92, 246],
                ]}
                dotSize={2}
              />
            </Card>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center w-full gap-4 mx-auto">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card
            url={"./planner"}
            screenshot={"/planner-thumb.png"}
            description={
              "An intelligent planning assistant I developed to help users manage tasks, projects, and goals effectively. It adapts to individual needs, offering personalized suggestions and schedule optimization. This project demonstrates my ability to create practical, user-centric applications."
            }
            title="Planner"
            stack={["NextJS", "MySQL"]}
            icon={
              <ThemeImage
                className={cn("rounded-lg p-2")}
                alt="logo"
                srcLight={LogoLight}
                srcDark={LogoLight}
                width={124}
                height={43}
              />
            }
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-transparent"
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
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card
            url={"./chat"}
            screenshot={"/chat-thumb.png"}
            stack={["NextJS", "MySQL", "Python", "FAISS Vector DB"]}
            description={
              "A versatile chatbot I engineered, featuring advanced document retrieval, X.com API integration, web search capabilities, and image generation. This project highlights my proficiency in natural language processing and API integration, creating a powerful tool for enhanced conversational interactions."
            }
            title="Chat"
            icon={
              <ThemeImage
                className={cn("rounded-lg p-2")}
                alt="logo"
                srcLight={LogoLight}
                srcDark={LogoLight}
                width={124}
                height={43}
              />
            }
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-transparent"
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

const Card = ({
  title,
  icon,
  url,
  screenshot,
  children,
  description,
  stack,
}: {
  description?: string;
  title: string;
  screenshot: string;
  url: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  stack?: string[];
}) => {
  const [hovered, setHovered] = React.useState(false);
  const techIcons: { [key: string]: React.ComponentType<any> } = {
    Python: FaPython,
    NextJS: TbBrandNextjs,
    Elixir: FaErlang,
    MySQL: TbBrandMysql,
    FAISS: DatabaseIcon,
  };
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=" group/canvas-card flex items-center rounded justify-center dark:border-blue-500 max-w-sm w-full mx-auto  min-h-[22rem] relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <Link href={`${url}`}>
        <div className="z-5">
          <div className={"absolute top-0"}>
            <div>
              <h2 className="text-sm p-4 font-semibold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full h-full mx-auto">
                {icon} {title}
              </h2>
            </div>
            <div className="text-sm w-full p-4 h-full flex font-semibold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
              <Image
                className={"border-2 rounded-lg text-white shadow-2xl"}
                src={screenshot}
                alt={"screenshot"}
                width={452}
                height={332}
              />
            </div>
          </div>
          <h2 className="text-sm p-4 font-semibold opacity-0 group-hover/canvas-card:opacity-100 relative z-10  group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-500">
            {icon} {title}
          </h2>
          <h2 className="dark:text-white pt-4 p-4 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-500">
            {description}
          </h2>
          <div className="flex flex-wrap gap-2 pt-2 p-4 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 group-hover/canvas-card:text-black group-hover/canvas-card:-translate-y-2 transition duration-500">
            {stack?.map((item) => {
              const IconComponent = techIcons[item] || FileCode;
              return (
                <div
                  key={item}
                  className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1"
                >
                  <IconComponent size={16} className="mr-2" />
                  <span className="text-sm">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
