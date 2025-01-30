import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import * as motion from "framer-motion/client";

export function HeroSection() {
  return (
    <section className="flex w-full max-w-4xl flex-col-reverse items-center justify-between md:flex-row md:space-x-8">
      <div className="items-center space-y-8 text-center md:w-[60%] md:space-y-4 md:text-start">
        <motion.p
          className="text-4xl font-extrabold md:text-5xl"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          I&#39;m Leo Nguyen
        </motion.p>
        <div className="space-y-1 text-foreground/70">
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <div>
              a{" "}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="transition duration-300">
                    <span className="cursor-pointer px-0.5 font-semibold text-primary transition duration-300 hover:opacity-70 dark:text-secondary">
                      software engineer
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="space-y-1 px-5 py-3 text-center text-sm text-foreground/80">
                    <p className="pt-1">Actually, a pull-stack developer,</p>
                    <p className="pt-1">like, I just pull code from the internet</p>
                    <p>
                      and put it into my code{" "}
                      <span className="text-lg text-white opacity-100">🤫</span>
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>{" "}
              based in Hanoi, Vietnam.
            </div>
            <p>
              I would define my interests as lying at the intersection of design,
              engineering, music and business.
            </p>
            <p>
              If you kind of enjoy sarcastic humor - yeah, that&#39;s me
              <span className="text-foreground"> 😌</span>
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="group relative mt-24 h-72 cursor-pointer space-y-3 md:mt-0 md:w-72"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      >
        <div className="flex gap-5">
          <div className="h-24 w-24 rounded-2xl bg-primary duration-3000 animate-in slide-in-from-top-12 md:h-32 md:w-32" />
          <div className="h-24 w-24 rounded-full bg-secondary duration-3000 animate-in slide-in-from-right-12 md:h-32 md:w-32" />
        </div>
        <div className="flex gap-5">
          <div className="h-24 w-24 rounded-full bg-secondary duration-3000 animate-in slide-in-from-left-12 md:h-32 md:w-32" />
          <div className="h-24 w-24 rounded-2xl bg-primary duration-3000 animate-in slide-in-from-bottom-12 md:h-32 md:w-32" />
        </div>
        {/* Glowing Background Gradient Effects with Tailwind CSS - https://www.youtube.com/watch?v=5W6kEP65AH4 */}
        <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-t from-primary to-secondary opacity-60 blur-3xl transition duration-500 group-hover:opacity-100" />
      </motion.div>
    </section>
  );
}
