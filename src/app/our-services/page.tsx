import ClientFeedbackSection from "@/components/ServicesPage/ClientFeedbackSection";
import CTASection from "@/components/ServicesPage/CTASection";
import HeroSection from "@/components/ServicesPage/HeroSection";
import ServicesOutlineSection from "@/components/ServicesPage/ServicesOutlineSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url =getCldOgImageUrl({
  src:"services_x3a8om",
})

export const metadata: Metadata = {
  title: "Our Services - Level Services Construction",
  description:
    "We offer a diverse range of specialized services tailored to meet the unique challenges of each project.",
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
        <ServicesOutlineSection/>
        <ClientFeedbackSection/>
        <CTASection/>
      </main>
    </>
  );
}
