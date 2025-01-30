"use client";

import { HoverEffectCard } from "@/components/hover-effect-card";
import * as motion from "framer-motion/client";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const skills = [
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: SiTypescript,
  },
  {
    title: "Go",
    link: "https://go.dev/",
    icon: TbBrandGolang,
  },
  {
    title: "Python",
    link: "https://www.python.org/",
    icon: FaPython,
  },
  {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: SiTailwindcss,
  },
  {
    title: "React",
    link: "https://react.dev/",
    icon: FaReact,
  },
  {
    title: "NodeJS",
    link: "https://nodejs.org/en/",
    icon: FaNodeJs,
  },
];

export function InterestedTechStackSection() {
  return (
    <section className="flex w-full max-w-4xl flex-col items-center justify-center">
      <motion.h2
        className="text-center text-2xl font-bold underline decoration-primary underline-offset-[0.5rem] dark:decoration-secondary sm:text-start"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.5 }}
      >
        {`Tech ecosystem I'm currently interested in`}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
      >
        <HoverEffectCard items={skills} />
      </motion.div>
    </section>
  );
}
