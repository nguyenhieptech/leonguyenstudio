"use client";

import { HoverEffectCard } from "@/components/hover-effect-card";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiFastapi, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";

const skills = [
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org",
    icon: SiTypescript,
  },
  {
    title: "Python",
    link: "https://www.python.org",
    icon: FaPython,
  },
  {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com",
    icon: SiTailwindcss,
  },
  {
    title: "React",
    link: "https://react.dev",
    icon: FaReact,
  },
  {
    title: "React Native",
    link: "https://reactnative.dev",
    icon: TbBrandReactNative,
  },
  {
    title: "NextJS",
    link: "https://nextjs.org",
    icon: TbBrandNextjs,
  },
  {
    title: "NodeJS",
    link: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
    icon: FaNodeJs,
  },
  {
    title: "FastAPI",
    link: "https://fastapi.tiangolo.com/",
    icon: SiFastapi,
  },
];

export function InterestedTechStackSection() {
  return (
    <section className="flex w-full max-w-4xl flex-col items-center justify-center">
      <h2 className="text-center text-2xl font-bold underline decoration-primary underline-offset-[0.5rem] dark:decoration-secondary sm:text-start">
        Tech stack I&#39;m interested in
      </h2>
      <HoverEffectCard items={skills} />
    </section>
  );
}
