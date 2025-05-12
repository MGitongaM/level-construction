import FormSection from "@/components/ContactPage/FormSection";
import HeroSection from "@/components/ContactPage/HeroSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url =getCldOgImageUrl({
  src:"contact_db7rfn",
})

export const metadata: Metadata = {
  title: "Contact Us - Level Services Construction",
  description:
    "Were here to assist you with any inquiries or project discussions you may have",
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
        <HeroSection/>
        <FormSection/>
    </main>
    </>
  )
}
