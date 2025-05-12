import { ProcessEntries } from "@/staticData/HomePage/ProcessSectionData";
import ImageView from "../NextCloudinary/ImageView";

export default function ProcessSection() {
  return (
    <>
      <section className="min-h-[80dvh]">
        <div className="container mx-auto px-4 pt-20 pb-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              {/* Understanding Our Construction Process for the Construction
              Industry */}
              Our Construction Process: Built for Excellence
            </h2>
            <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-8 py-20">
              {ProcessEntries.map((process) => (
                <div key={process.id} className="flex flex-col gap-4">
                  {/* <div className="h-48 bg-teal-300 rounded-md"></div> */}
                  <ImageView 
                    imageSrc={process.imageSrc}
                    height={800}
                    width={800}
                    alt={`Level service construction - ${process.title} image`}
                    classNames="object-cover h-64 bg-teal-300 rounded-md"
                  />
                  <p className="text-2xl">{process.title}</p>
                  <p className="px-4">{process.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
