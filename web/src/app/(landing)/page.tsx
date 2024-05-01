import { HeroSection } from "./_components/hero-section";
import { InterestedTechStackSection } from "./_components/interested-tech-stack-section";
import { ProfilePictureSection } from "./_components/profile-picture-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProfilePictureSection />
      <InterestedTechStackSection />
    </>
  );
}
