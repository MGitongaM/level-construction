import OurProcessSection from "@/components/HomePage/OurProcessSection";
import CTASection from "../components/HomePage/CTASection";
import DiscoverSection from "../components/HomePage/DiscoverSection";
import ExcellenceSection from "../components/HomePage/ExcellenceSection";
import HeroSection from "../components/HomePage/HeroSection";
// import ProcessSection from "../components/HomePage/ProcessSection";

export default function page() {
  return (
    <>
      <main>
        <HeroSection />
        <OurProcessSection/>
        {/* <ProcessSection /> */}
        <ExcellenceSection />
        <DiscoverSection/>
        <CTASection/>
      </main>
    </>
  );
}
