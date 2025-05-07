import ClientFeedbackSection from "@/components/ServicesPage/ClientFeedbackSection";
import CTASection from "@/components/ServicesPage/CTASection";
import HeroSection from "@/components/ServicesPage/HeroSection";
import ServicesOutlineSection from "@/components/ServicesPage/ServicesOutlineSection";

export default function page() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesOutlineSection/>
        <ClientFeedbackSection/>
        <CTASection/>
      </main>
    </>
  );
}
