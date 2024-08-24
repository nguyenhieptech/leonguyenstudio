"use client";

import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      className="z-10 flex w-full max-w-5xl flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Link href="/">
        <h1 className="cursor-pointer text-center text-lg font-bold transition duration-500 hover:opacity-70 sm:text-start sm:text-2xl">
          Leo Nguyen 🤷🏻‍♂️
        </h1>
      </Link>
      <Navbar />
    </motion.header>
  );
}
