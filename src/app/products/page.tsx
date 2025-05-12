import AllProcuctsSection from "@/components/ProductsPage/AllProcuctsSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url =getCldOgImageUrl({
  src:"products_z0d0av",
})

export const metadata: Metadata = {
  title: "Products - Level Services Construction",
  description:
    "We offer a diverse range of products that meet your needs while adhering to industry specifications and standards.",
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
        <AllProcuctsSection/>
    </main>
    </>
  )
}
