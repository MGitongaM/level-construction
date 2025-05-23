import Link from "next/link";
import { Button } from "../ui/button";

export default function CTASection() {
  return (
    <section className="h-full">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-8 border border-teal-600 rounded-md">
          <div className="w-full md:w-5/12 space-y-6 pl-10">
            <h3 className="text-3xl font-semibold">
              Ready to Start Your Project?
            </h3>
            <p className="">
              Let&apos;s bring your vision to life with expert consultation and
              tailored solutions that deliver real impact
            </p>
            <Link href="/contact-us">
              <Button
                size="lg"
                className="bg-teal-400 text-black hover:bg-teal-600 hover:text-slate-100 hover:scale-110"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-6/12 h-80 bg-teal-600 md:rounded-r-md"></div>
        </div>
      </div>
    </section>
  );
}
