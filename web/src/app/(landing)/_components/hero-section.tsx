import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function HeroSection() {
  return (
    <section className="flex w-full max-w-4xl flex-col-reverse items-center justify-between md:flex-row md:space-x-8">
      <div className="items-center space-y-8 text-center md:w-[60%] md:space-y-4 md:text-start">
        <p className="text-6xl font-bold">Hi, I&#39;m Leo Nguyen</p>
        <div className="space-y-1 text-foreground/60 md:text-lg">
          <p>or Hiep Nguyen.</p>
          <div>
            I&#39;m a{' '}
            <TooltipProvider delayDuration={250}>
              <Tooltip>
                <TooltipTrigger className="transition duration-700 hover:translate-y-1">
                  <span className="animate-pulse cursor-pointer px-0.5 font-semibold text-primary dark:text-secondary">
                    Full-stack Developer
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1 p-3 pt-4 text-center text-sm text-foreground/80">
                    <p>Actually, a Pull-stack Developer.</p>
                    <p>I just pull code from the internet</p>
                    <p>
                      and put it into my code{' '}
                      <span className="text-lg text-white opacity-100">🤫</span>
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>{' '}
            based in Hanoi, Vietnam.
          </div>
          <p>
            If you kind of like sarcastic humor - that&#39;s me{' '}
            <span className="text-lg text-white md:text-xl">😌</span>
          </p>
        </div>
      </div>

      <div className="group relative mt-24 h-72 cursor-pointer space-y-3 md:mt-0 md:w-72">
        <div className="flex gap-5">
          <div className="h-24 w-24 rounded-2xl bg-primary duration-4000 animate-in slide-in-from-top-12 md:h-32 md:w-32" />
          <div className="h-24 w-24 rounded-full bg-secondary duration-4000 animate-in slide-in-from-right-12 md:h-32 md:w-32" />
        </div>
        <div className="flex gap-5">
          <div className="h-24 w-24 rounded-full bg-secondary duration-4000 animate-in slide-in-from-left-12 md:h-32 md:w-32" />
          <div className="h-24 w-24 rounded-2xl bg-primary duration-4000 animate-in slide-in-from-bottom-12 md:h-32 md:w-32" />
        </div>
        {/* Glowing Background Gradient Effects with Tailwind CSS - https://www.youtube.com/watch?v=5W6kEP65AH4 */}
        <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-t from-primary to-secondary opacity-60 blur-3xl transition duration-500 group-hover:opacity-100" />
      </div>
    </section>
  );
}
