import { CheckCircle } from "lucide-react";
import ImageView from "../NextCloudinary/ImageView";

export default function DiscoverSection() {
  return (
    <section className="min-h-[80dvh]">
      <div className="container mx-auto  px-4 py-20">
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-8">
          <div className="w-full md:w-6/12 lg:w-4/12 space-y-12">
            <h2 className="text-3xl">
              Discover the Unmatched Benefits of Partnering with Levels
              Construction
            </h2>
            <p className="leading-8">
              Choosing Level Constriction means you get a partner you can trust.
              Our commitment to reliable, efficiency, and industry expertise
              ensure your projects are completed on time and within budget.
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-teal-300 size-5" />
                Dependable services you can count on every time
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-teal-300 size-5" />
                Streamlined process for maximum efficiency and productivity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-teal-300 size-5" />
                Expertise in the construction indusry and engineering solutions
              </li>
            </ul>
          </div>
          <div className="w-full md:w-6/12">
            {/* <div className="min-h-96 bg-teal-200 rounded-md"></div> */}
            <ImageView
              imageSrc="discover_-_benefits_suo5ap"
              height={800}
              width={800}
              alt={`Level service construction benefits image`}
              classNames="object-cover bg-teal-200 h-full w-full bg-teal-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
