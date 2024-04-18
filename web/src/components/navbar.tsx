import { ThemeToggle } from "@/components/theme-toggle";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    id: "1",
    link: "https://github.com/nguyenhieptech",
    ariaLabel: "GitHub link",
    icon: Github,
  },
  {
    id: "2",
    link: "https://twitter.com/hiepnguyenhaha",
    ariaLabel: "Twitter link",
    icon: Twitter,
  },
  {
    id: "3",
    link: "https://www.linkedin.com/in/hiep-nguyen-tech",
    ariaLabel: "Linkedin link",
    icon: Linkedin,
  },
  {
    id: "4",
    link: "https://www.facebook.com/nguyenhieptech",
    ariaLabel: "Facebook link",
    icon: Facebook,
  },
  {
    id: "5",
    link: "https://www.instagram.com/nguyenhieptech",
    ariaLabel: "Instagram link",
    icon: Instagram,
  },
];

export function Navbar() {
  return (
    <nav className="z-10 flex w-full max-w-5xl flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
      {/* Logo */}
      <h1 className="cursor-pointer text-center text-lg font-bold underline decoration-primary underline-offset-4 transition duration-500 hover:opacity-70 dark:decoration-secondary sm:text-start sm:text-2xl">
        Leo&#39;s Portfolio 🤷🏻‍♂️
      </h1>

      <div className="flex items-center space-x-5">
        {/* Social links */}
        <div className="flex">
          {socials.map((social) => {
            const SocialIcon = social.icon;

            return (
              <Link
                key={social.id}
                className="cursor-pointer p-2 transition duration-500 hover:-translate-y-2"
                target="_blank"
                href={social.link}
                aria-label={social.ariaLabel}
              >
                <SocialIcon />
              </Link>
            );
          })}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
