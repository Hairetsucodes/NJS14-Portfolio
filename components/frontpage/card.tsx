import { FileCode } from "lucide-react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaPython, FaErlang } from "react-icons/fa";
import { TbBrandNextjs, TbBrandMysql } from "react-icons/tb";
import { DatabaseIcon } from "lucide-react";

export const Card = ({
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
              <h2 className="flex items-center justify-center text-sm p-4 font-semibold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full h-full mx-auto">
                {icon} {title}
              </h2>
            </div>
            <div className="text-sm w-full p-4 h-full flex font-semibold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
              <Image
                className={"border-2 rounded-lg text-white shadow-2xl"}
                src={screenshot}
                alt={"screenshot"}
                width={300}
                height={300}
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
