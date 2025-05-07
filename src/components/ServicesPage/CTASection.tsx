import { Button } from "../ui/button";

export default function CTASection() {
  return (
    <section className="h-full">
        <div className="container mx-auto px-4 py-10">
            <div className="flex justify-evenly items-center gap-8">
                <div className="w-5/12">
                    <h3 className="text-3xl font-semibold">Get Started with Your Project</h3>
                    <p className="">Contact us today for expert consultation and tailored solutions for your construction needs</p>
                    <Button size="lg" className="bg-teal-400 text-black hover:bg-teal-600 hover:text-slate-100 hover:scale-110">Contact Us Today</Button>
                </div>
                <div className="w-5/12 bg-teal-100">
                
                </div>
            </div>
        </div>
    </section>
  )
}
