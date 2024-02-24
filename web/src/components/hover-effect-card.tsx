// https://ui.aceternity.com/components/card-hover-effect

'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { IconType } from 'react-icons';

type Props = {
  items: {
    title: string;
    link: string;
    icon: IconType;
  }[];
  className?: string;
};

export function HoverEffectCard({ items, className }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'xs:grid-cols-2 grid grid-cols-1 py-10 md:grid-cols-3 lg:grid-cols-4',
        className
      )}
    >
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <Link
            href={item?.link}
            key={item?.link}
            className="group relative block h-full w-full p-2"
            target="_blank"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-3xl bg-gradient-to-r from-primary to-secondary blur-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0.5,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.3, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-20 h-full w-full items-center overflow-hidden rounded-2xl border border-border bg-card p-8 transition duration-300 group-hover:border-primary">
              <div className="relative z-50">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <h4 className="font-bold tracking-wide text-foreground">
                    {item.title}
                  </h4>
                  <Icon className="h-8 w-8" />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
