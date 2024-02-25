import { ThemeToggle } from '@/components/theme-toggle';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const socials = [
  {
    id: '1',
    link: 'https://github.com/nguyenhieptech',
    ariaLabel: 'GitHub link',
    icon: Github,
  },
  {
    id: '2',
    link: 'https://twitter.com/hiepnguyenhaha',
    ariaLabel: 'Twitter link',
    icon: Twitter,
  },
  {
    id: '3',
    link: 'https://www.linkedin.com/in/hiep-nguyen-tech',
    ariaLabel: 'Linkedin link',
    icon: Linkedin,
  },
  {
    id: '4',
    link: 'https://www.facebook.com/nguyenhieptech',
    ariaLabel: 'Facebook link',
    icon: Facebook,
  },
  {
    id: '5',
    link: 'https://www.instagram.com/nguyenhieptech',
    ariaLabel: 'Instagram link',
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="z-10 my-12 flex w-full max-w-5xl flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
      {/* Logo */}
      <h2 className="flex cursor-pointer items-center space-x-1 text-center text-sm transition duration-500 hover:opacity-80 sm:text-start">
        <p>Made for</p>
        <p className="animate-bounce font-bold text-secondary duration-1000">fun</p>
        <span>by</span>
        <span className="font-semibold text-primary dark:text-secondary">Leo Nguyen</span>
      </h2>
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
                <SocialIcon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
}
