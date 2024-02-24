import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { HeroSection } from './_components/hero-section';
import { InterestedTechSection } from './_components/interested-tech-section';

export default function HomeLandingPage() {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col items-center px-20 md:mt-16">
      <Navbar />
      <main className="flex w-full flex-col items-center space-y-16 md:mt-28 md:space-y-32">
        <HeroSection />
        <InterestedTechSection />
      </main>
      <Footer />
    </div>
  );
}
