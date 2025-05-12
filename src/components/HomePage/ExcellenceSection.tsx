import { ExcellenceEntries } from "@/staticData/HomePage/ExcellenceSectionData";

export default function ExcellenceSection() {
  return (
    <>
      <section className="min-h-[80dvh]">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl">Our Commitment to Quality and Safety</h2>
            <p className="leading-8">
              At Level Services Construction, safety is at the core of
              everything we do. Our robust protocols create a secure working
              environment, protecting both our team and your investment.
            </p>
          </div>
          <div className="max-w-2xl pt-20">
            <h2 className="text-3xl">Why Choose Level Services Construction?</h2>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-evenly items-start gap-8 pt-14 lg:pt-10 pb-20 ">
            {ExcellenceEntries.map((entry) => (
              <div
                key={entry.id}
                className="flex flex-col gap-8 px-4 py-8 min-h-[40vh] w-full md:w-4/12 border-2 border-teal-100 rounded-lg"
              >
                <span>{entry.icon}</span>
                <p className="text-2xl">{entry.title}</p>
                <p className="">{entry.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
