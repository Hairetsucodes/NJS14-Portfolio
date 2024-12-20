"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, MapPinIcon } from "lucide-react";

export function HeroSection() {
  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[30rem] mx-10 overflow-hidden rounded border-blue-500">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] z-10">
        <Image
          src="/image3.jpeg"
          width={400}
          height={400}
          alt="Thomas Whidden"
          className="mx-auto aspect-square rounded-full object-cover border-2 border-primary"
        />
        <div className="flex flex-col items-center justify-center space-y-4 text-center lg:text-left lg:items-start">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Thomas Whidden
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              ML Engineer / Full Stack Developer / Web Security
            </p>
            <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
              <MapPinIcon className="w-5 h-5 mr-1" />
              <span>Washington DC</span>
            </div>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            With over 20 years in the industry, my journey began in hacking and
            exploiting web vulnerabilities and APIs. This foundation evolved
            into full stack development, and now encompassing Machine Learning
            and AI.
          </p>
          <Button
            className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
            onClick={handleProjectsClick}
          >
            View My Projects
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/50 dark:bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)]" />
    </div>
  );
}
