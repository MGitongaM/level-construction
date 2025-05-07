import CommitmentSection from "@/components/AboutPage/CommitmentSection";
import FAQsSection from "@/components/AboutPage/FAQsSection";
import HeroSection from "@/components/AboutPage/HeroSection";
import PartnerSection from "@/components/AboutPage/PartnerSection";

export default function page() {
  return (
    <>
      <main>
        <HeroSection />
        <CommitmentSection />
        <PartnerSection />
        <FAQsSection />
      </main>
    </>
  );
}
