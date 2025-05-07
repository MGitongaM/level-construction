import { Star } from "lucide-react";

export default function ClientFeedbackSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20 space-y-4">
        <div className="max-2xl space-y-2 pl-1 md:pl-20">
          <h2 className="text-3xl font-bold">Client Feedback</h2>
          <p className="leading-8">
            Their expertise made a significant difference in our project
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-8 pt-10">
          <div className="w-full md:w-5/12 space-y-6 border rounded-md px-4 py-8">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <span key={index}>
                  <Star className="size-4" />
                </span>
              ))}
            </div>
            <p className="leaading-8">
              &quot;The team at Levels Construction exceeded our eynectations
              with their profescionalism and attention to. detail. Every phase
              of the project was executed flawlessly&quot;
            </p>
            <div className="flex justify-between items-center gap-4">
              <div className="w-5/12 ">
                <div className="bg-teal-400 size-12 rounded-lg"></div>
              </div>
              <div className="w-5/12">
                <p className="font-semibold">Wanga Zama</p>
                <p className="">Director, Acme Limited</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 space-y-6 border rounded-md px-4 py-8">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <span key={index}>
                  <Star className="size-4" />
                </span>
              ))}
            </div>
            <p className="leaading-8">
              &quot;The team at Levels Construction exceeded our eynectations
              with their profescionalism and attention to. detail. Every phase
              of the project was executed flawlessly&quot;
            </p>
            <div className="flex justify-between items-center gap-4">
              <div className="w-5/12 ">
                <div className="bg-teal-400 size-12 rounded-lg"></div>
              </div>
              <div className="w-5/12">
                <p className="font-semibold">Wanga Zama</p>
                <p className="">Director, Acme Limited</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
