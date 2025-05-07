import { ExcellenceEntries } from "@/staticData/HomePage/ExcellenceSectionData";

export default function ExcellenceSection() {
  return (
    <>
      <section className="min-h-[80dvh]">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl">Our Commitment to Quality and Safety</h2>
            <p className="leading-8">
              At Levels Construction, we prioritize safety in every project. Our
              rigorous protocols ensure a secure working environment for all
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-evenly items-start gap-8 pt-14 lg:pt-40 pb-20 ">
            {ExcellenceEntries.map((entry) => (
              <div key={entry.id} className="flex flex-col gap-8 px-4 py-8 min-h-[40vh] border-2 border-teal-50 rounded-lg">
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
