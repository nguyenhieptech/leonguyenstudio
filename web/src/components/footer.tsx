import { Navbar } from "@/components/navbar";

export function Footer() {
  return (
    <footer className="z-10 my-12 flex w-full max-w-5xl flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
      {/* Logo */}
      <h2 className="flex cursor-pointer items-center space-x-1 text-center text-sm transition duration-500 hover:opacity-80 sm:text-start">
        <p>Made for</p>
        <p className="font-bold text-primary dark:text-secondary">fun</p>
        <span>by</span>
        <span className="font-semibold text-primary dark:text-secondary">Leo Nguyen</span>
      </h2>
      <Navbar />
    </footer>
  );
}
