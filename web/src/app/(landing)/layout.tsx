import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PropsWithChildren } from "react";

export default function LayoutPage({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col items-center px-20 md:mt-16">
      <Header />
      <main className="flex w-full flex-col items-center space-y-16 md:mt-28 md:space-y-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
