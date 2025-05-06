import { ProcessEntries } from "@/staticData/HomePage/ProcessSectionData";

export default function ProcessSection() {
  return (
    <>
      <section className="min-h-[80dvh]">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              Understanding Our Construction Process for the Construction
              Industry
            </h2>
            <div className="flex justify-evenly items-center gap-8 py-20">
              {ProcessEntries.map((process) => (
                <div key={process.id} className="flex flex-col gap-4">
                  <div className="h-48 bg-teal-300 rounded-md"></div>
                  <p className="text-2xl">{process.title}</p>
                  <p className="">{process.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
