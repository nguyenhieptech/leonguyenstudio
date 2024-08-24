import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col items-center px-20 md:mt-16">
      <Header />
      <main className="h-[60vh] px-6 py-24 sm:py-32 lg:h-[70vh] lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Oops, this page is unavailable 😵
          </h1>
          <p className="mt-4 text-base leading-7">
            {`But the good news is - you don't have to be here 👏🏻`}
          </p>
          <Button asChild variant="secondary" className="mt-8">
            <Link href="/">Back to home page </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
