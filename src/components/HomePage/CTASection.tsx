import { Button } from "../ui/button";


export default function CTASection() {
  return (
    <>
      <section className="h-full">
        <div className="container m-auto px-4 py-20">
          <div className="flex justify-center items-center gap-8">
            <div className="w-4/12">
            <div className="max-w-lg mx-auto">
              <p className="text-5xl">Get Your Free Consultation Today</p>
            </div>
            </div>
            <div className="w-4/12 space-y-6">
              <p className="leading-8">
                At LevelsConstruction, we understand the unique challenges of
                the construction industry. Contact us now to discuss how our
                tailored solutions can meet your needs
              </p>
              <Button size='lg' className="bg-teal-500 text-xl text-slate-100 hover:bg-teal-400 hover:text-black hover:scale-110">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
