import * as motion from "framer-motion/client";
import Image from "next/image";

export function ProfilePictureSection() {
  return (
    <motion.section
      className="flex w-full max-w-4xl flex-col items-center justify-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.3 }}
    >
      <Image
        src="https://res.cloudinary.com/dng1meo0n/image/upload/fl_preserve_transparency/v1713448500/leo-lying-down.jpg"
        className="rounded-lg sm:mt-16"
        alt="profile picture"
        width={450}
        height={600}
      />
      <p className="mt-6 max-w-xl text-center text-sm leading-6 text-foreground/60">
        Me lying down thinking: &quot;You don&#39;t learn JavaScript to have fun, you
        learn it to make money, to use that money to spend time having fun learning
        JavaScript to make more money.&quot;{" "}
        <span className="text-base text-white opacity-100">🤔</span>
      </p>
    </motion.section>
  );
}
