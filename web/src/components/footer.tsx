import { ThemeToggle } from '@/components/theme-toggle';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { id: '1', link: 'https://github.com/nguyenhieptech', icon: Github },
  { id: '2', link: 'https://twitter.com/hiepnguyenhaha', icon: Twitter },
  { id: '3', link: 'https://www.linkedin.com/in/hiep-nguyen-tech', icon: Linkedin },
  { id: '4', link: 'https://www.facebook.com/nguyenhieptech', icon: Facebook },
  { id: '5', link: 'https://www.instagram.com/nguyenhieptech', icon: Instagram },
];

export function Footer() {
  return (
    <footer className="z-10 my-12 flex w-full max-w-5xl flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
      {/* Logo */}
      <h2 className="cursor-pointer text-center text-sm transition duration-500 sm:text-start">
        Made for fun not with 💛 by{' '}
        <span className="text-base font-semibold text-primary dark:text-secondary">
          Leo Nguyen
        </span>
      </h2>
      <div className="flex items-center space-x-5">
        {/* Social links */}
        <div className="flex">
          {socials.map((social) => {
            const SocialIcon = social.icon;

            return (
              <a
                key={social.id}
                className="cursor-pointer p-2 transition duration-500 hover:-translate-y-1"
                target="_blank"
                href={social.link}
              >
                <SocialIcon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
}
