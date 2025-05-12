import { CheckCircle } from "lucide-react";
import ImageView from "../NextCloudinary/ImageView";

export default function DiscoverSection() {
  return (
    <section className="min-h-[80dvh]">
      <div className="container mx-auto  px-4 py-20">
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-8">
          <div className="w-full md:w-6/12 lg:w-4/12 space-y-12">
            <h2 className="text-3xl">
              Discover the Unmatched Benefits of Partnering with Level Services
              Construction
            </h2>
            <p className="leading-8">
              Choosing Level Services Construction means partnering with a team
              you can trust. Our deep industry expertise, reliability, and focus
              on efficiency ensure your project is delivered on time, within
              budget, and to the highest standards
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-teal-300 size-5" />
                Dependable services you can count on, every time
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-teal-300 size-5" />
                Streamlined processes for maximum efficiency and productivity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-teal-300 size-5" />
                Unmatched expertise in Kenya&apos;s construction and engineering sectors
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
