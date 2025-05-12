import { heroEntries } from "@/staticData/ServicesPage/HeroSectionData";

export default function HeroSection() {
  return (
    <section className="min-h-[80dvh] bg-teal-100">
      <div className="min-h-[80dvh] grid place-content-center conainer mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Comprehensive Solutions for the Construction Industry
          </h1>
          <p className="leading-8">
            At Level Services Construction, we offer a diverse range of
            specialized services tailored to meet the unique challenges of each
            project. From engineering design to project execution and
            management, our team ensures precision, safety, and efficiency at
            every stage. We&apos;re committed to delivering lasting solutions that
            drive results for our clients across Kenya and beyond
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-start gap-10 lg:gap-20 pt-20 lg:px-20">
          {heroEntries.map((entry) => (
            <div key={entry.id} className="flex flex-col gap-4">
              <span className="bg-teal-50 p-1 rounded-md w-10 text-center">{entry.icon}</span>
              <p className="text-xl font-bold">{entry.title}</p>
              <p className="leading-8">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
