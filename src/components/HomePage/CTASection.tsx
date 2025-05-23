import Link from "next/link";
import { Button } from "../ui/button";

export default function CTASection() {
  return (
    <>
      <section className="h-full">
        <div className="container m-auto px-4 py-20">
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 border border-teal-400 rounded-md px-4 py-8 ">
            <div className="w-full md:w-5/12 lg:w-4/12">
              <div className="max-w-lg mx-auto">
                <p className="text-3xl lg:text-5xl">
                  Get Your Free Consultation Today
                </p>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-4/12 space-y-6">
              <p className="leading-8">
                {/* At LevelsConstruction, we understand the unique challenges of
                the construction industry. Contact us now to discuss how our
                tailored solutions can meet your needs */}
                Ready to build with confidence? Contact us now to discuss how
                our tailored solutions can bring your project to life.
              </p>
              <Link href="/contact-us">
                <Button
                  size="lg"
                  className="bg-teal-500 text-xl text-slate-100 hover:bg-teal-400 hover:text-black hover:scale-110"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
