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
    link: "https://x.com/hiepnguyenhaha",
    ariaLabel: "X link",
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
    <div className="flex items-center space-x-5">
      {/* Social links */}
      <nav className="flex">
        {socials.map((social) => {
          const SocialIcon = social.icon;

          return (
            <Link
              key={social.id}
              className="cursor-pointer p-2 transition duration-500 hover:-translate-y-1"
              target="_blank"
              href={social.link}
              aria-label={social.ariaLabel}
            >
              <SocialIcon />
            </Link>
          );
        })}
      </nav>
      <ThemeToggle />
    </div>
  );
}
