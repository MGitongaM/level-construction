import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

import { ourWorkProcesses } from "@/staticData/HomePage/ProcessSectionData";
import ImageView from "../NextCloudinary/ImageView";

export default function OurProcessSection() {
  return (
    <>
      <section className="container mx-auto px-4 mt-20 mb-30">
        <h2 className="text-3xl font-bold text-center">Our Project Delivery Process</h2>
        <p className="text-center my-10 max-w-3xl mx-auto">
          At Level Services Construction Limited, every project is delivered using internationally recognized Project Management Institute (PMI) principles to ensure safety, quality, schedule, and cost control.
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {ourWorkProcesses.map((process) => (
            <Card
              key={process.id}
              className="h-full md:min-h-90 pl-2: pl-10 pb-14 mb:pb-10 nth-1:bg-teal-200/10 nth-2:bg-teal-200/20 nth-3:bg-teal-200/30 nth-4:bg-teal-200/40 nth-5:bg-teal-200/50 nth-6:bg-teal-200/60 w-full md:w-12/12"
            >
              <Badge variant="outline" className="bg-white">
                step - {process.id}
              </Badge>
              <CardHeader className=" ">
                  <ImageView
                        imageSrc={process.image}
                        height={400}
                        width={400}
                        alt="whatsapp icon"
                        classNames={`object-cover  h-56 ${process.title=="Project Initiation:" ||"Testing & Commissioning:" ? "object-center" :"object-top" }`}
                        />
                <div className="flex flex-row items-center">
                  <div className="c">{process.icon}</div>
                  <CardTitle>{process.title}</CardTitle>
                  <CardDescription></CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="c">{process.details}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-10">
          {ourWorkProcesses.map((process) => (
            <div
              key={process.id}
              className="h-full rounded-lg relative md:min-h-90  pb-14 mb:pb-10 nth-1:bg-teal-200/10 nth-2:bg-teal-200/20 nth-3:bg-teal-200/30 nth-4:bg-teal-200/40 nth-5:bg-teal-200/50 nth-6:bg-teal-200/60 w-full md:w-12/12"
            >
              <Badge variant="outline" className="bg-white absolute top-5 left-4">
                step - {process.id}
              </Badge>
              <div className=" ">
                  <ImageView
                        imageSrc={process.image}
                        height={400}
                        width={400}
                        alt="whatsapp icon"
                        classNames={`object-cover  h-72 w-full rounded-t-lg ${process.title=="Project Initiation:" ||"Testing & Commissioning:" ? "object-center" :"object-top" }`}
                        />
                <div className="flex flex-row items-center gap-x-2 pl-4 py-4">
                  <div className="c">{process.icon}</div>
                  <h3 className="text-xl font-medium">{process.title}</h3>
                </div>
              </div>
              <div className="px-4 leading-7">
                <p className="c">{process.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
