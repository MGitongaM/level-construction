import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationSection from "@/components/NavigationSection";
import FooterSection from "@/components/FooterSection";
import { getCldOgImageUrl } from "next-cloudinary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const url =getCldOgImageUrl({
  src:"home_ndnwyh",
})

export const metadata: Metadata = {
  title: "Level Services Construction",
  description:
    "We deliver exceptional construction and engineering services tailored for the Kenyan market.",
    openGraph:{
      images:{
        width:1200,
        height:800,
        url,
      }
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationSection />
        {children}
        <FooterSection/>
      </body>
    </html>
  );
}
