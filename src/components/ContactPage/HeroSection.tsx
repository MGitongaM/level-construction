import { Mail, MapPinHouse, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-[80dvh]">
      <div className="min-h-[80dvh] grid place-content-center container mx-auto px-4 py-10">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-8">
          <div className="w-full md:w-7/12 space-y-6">
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="text-lg font-semibold leading-8">
              Were here to assist vou with any inquiries or project discussions
              you may have
            </p>
          </div>
          <div className="w-full md:w-5/12 flex flex-col gap-8">
            <div className="c">
              <div className="flex items-center gap-2">
                <Mail className="text-teal-400 size-6 ml-0 md:-ml-10" />
                <p className="text">Email</p>
              </div>
              <p className="c">construction@levelservices.co.ke</p>
            </div>
            <div className="c">
              <div className="flex items-center gap-2">
                <Phone className="text-teal-400 size-6 ml-0 md:-ml-10" />
                <p className="text">Phone</p>
              </div>
              <p className="c">020 009 899 7667</p>
            </div>
            <div className="c">
              <div className="flex items-center gap-2">
                <MapPinHouse className="text-teal-400 size-6 ml-0 md:-ml-10" />
                <p className="text">Office</p>
              </div>
              <p className="c">Upper road, 2nd floor, Nairobi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
