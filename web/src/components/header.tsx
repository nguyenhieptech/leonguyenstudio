import { Navbar } from "@/components/navbar";
import Link from "next/link";

export function Header() {
  return (
    <header className="z-10 flex w-full max-w-5xl flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
      <Link href="/">
        <h1 className="cursor-pointer text-center text-lg font-bold underline decoration-primary underline-offset-4 transition duration-500 hover:opacity-70 dark:decoration-secondary sm:text-start sm:text-2xl">
          {`Leo's Portfolio 🤷🏻‍♂️`}
        </h1>
      </Link>
      <Navbar />
    </header>
  );
}
