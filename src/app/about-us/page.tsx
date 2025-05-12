import CommitmentSection from "@/components/AboutPage/CommitmentSection";
import FAQsSection from "@/components/AboutPage/FAQsSection";
import HeroSection from "@/components/AboutPage/HeroSection";
import PartnerSection from "@/components/AboutPage/PartnerSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url =getCldOgImageUrl({
  src:"about_lbe8de",
})

export const metadata: Metadata = {
  title: "About Us - Level Services Construction",
  description:
    "We are more than just builders we are your trusted partners in shaping Kenya's skylines and communities.",
    openGraph:{
      images:{
        width:1200,
        height:800,
        url,
      }
    }
};

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
