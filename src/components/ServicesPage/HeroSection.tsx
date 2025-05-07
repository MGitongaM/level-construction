import { heroEntries } from "@/staticData/ServicesPage/HeroSectionData";

export default function HeroSection() {
  return (
    <section className="min-h-[80dvh]">
      <div className="min-h-[80dvh] grid place-content-center conainer mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Comprehensive Solutions for the Construction Industry
          </h1>
          <p className="leading-8">
            At Level Services Construction, we offer a wide range of specialzed
            services designed to meet the various demands and unique needs for
            our clients when it comes to construction. Our expertise ensures that every
            project is excuted with precision and efficiency.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-start gap-10 lg:gap-20 pt-20 lg:px-20">
          {heroEntries.map((entry) => (
            <div key={entry.id} className="flex flex-col gap-4">
              <span>{entry.icon}</span>
              <p className="text-xl font-bold">{entry.title}</p>
              <p className="leading-8">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
