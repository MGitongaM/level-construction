import Link from "next/link";
import ImageView from "./NextCloudinary/ImageView";

export default function FooterSection() {
  return (
    <>
      <footer className="conatiner px-4 pt-20 pb-4">
        {/* <div className="flex justify-between items-center bg-green-800 text-slate-100 rounded-xl px-8 py-10"> */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-y-8 bg-teal-950 text-slate-100 rounded-xl px-8 py-10">
          <div className="w-full md:w-5/12 space-y-4">
            <Link href={`/`} className="flex items-center" >
              <ImageView
                // imageSrc="level_services_logo_bg-transparent_ellvje"
                imageSrc="levels_services_transparent_logo_only_zquhit"
                height={400}
                width={400}
                alt=""
                classNames="object-cover size-20"
              />
              <p className="font-semibold">Level Services Construction</p>
            </Link>
            <p className="text-3xl md:text-5xl leading-12">
              Your Trusted Partner <br/>in Construction
            </p>
            <p className="text-xs">
              {/* Delivery excellence in trucking and transportation for the
              construction industry */}
            </p>
          </div>
          <div className="flex justify-between items-start gap-x-8 text-sm">
            <div className="c">
              <ul className="list-none  space-y-4">
                <li className="hover:underline underline-offset-2">
                  <Link href={`/about-us`}>About us</Link>
                </li>
                <li className="hover:underline underline-offset-2">
                  <Link href={`/products`}>Products</Link>
                </li>
                <li className="hover:underline underline-offset-2">
                  <Link href={`/our-services/#click-testimonials`}>Testimonials</Link>
                </li>
                <li className="hover:underline underline-offset-2">
                  <Link href={`/our-services`}>Services</Link>
                </li>
              </ul>
            </div>
            <div className="c">
              <ul className="list-none space-y-4">
                <li className="hover:underline underline-offset-2">
                  <Link href={`/about-us/#faqs`}>FAQS</Link>
                </li>
                <li className="hover:underline underline-offset-2">
                  <Link href={`/contact-us`}>Contact Us</Link>
                </li>
                {/* <li className="hover:underline underline-offset-2">
                  <Link href={`/trucks`}>Trucks</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-xs gap-4 px-2 pt-4">
          <div className="c">
            <p>
              &#169; {new Date().getFullYear()} Level Construction. All rights
              reserved
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="underline underline-offset-2">
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
