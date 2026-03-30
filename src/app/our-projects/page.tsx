import ProjectsSection from "@/components/ourProjects/ProjectsSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url =getCldOgImageUrl({
  src:"projects_zslwvy",
})

export const metadata: Metadata = {
  title: "Our Projects - Level Services Construction",
  description:
    "From design to commissioning, we deliver fully compliant, infrastructure projects to meet client needs",
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
    <ProjectsSection/>
    </>
  )
}
