import { heroEntries } from "@/staticData/ServicesPage/HeroSectionData";
import ImageView from "../NextCloudinary/ImageView";

export default function ServicesOutlineSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20 space-y-40">
        <h2 className="text-3xl font-bold text-center  ">
              What We Do
            </h2>
        {/* first outline  */}
        <div className="flex flex-wrap-reverse md:flex-wrap justify-evenly itmes-center gap-8 -mt-20">
          <div className="w-full md:w-6/12 lg:w-5/12 space-y-6">
            <h3 className="text-3xl font-semibold">
              {/* Engineering Excellence for the Construction Industry */}
              Engineering Design & Construction Services
            </h3>
            <p className="leading-8">
              {/* At Level Services Construction, we deliver a full spectrum of specialized construction solutions, expertly crafted to address the unique challenges and evolving needs of our clients across Kenya and beyond. Our commitment to precision, efficiency, and innovation ensures every project is completed to the highest standards-on time and within budget */}
              {/* We craft innovative engineering designs that address the evolving
              needs of the petroleum and general construction sectors. By
              leveraging cutting-edge tools and a client-focused approach, we
              guarantee solutions that align with your vision and industry
              demands */}
              We undertake detailed engineering, procurement and construction in
              accordance with applicable international and local standards. The
              scope includes site layouts, storage tank sizing and positioning,
              piping and instrumentation diagrams (P&IDs), pressure piping
              designs, fire protection systems, gas detection systems, and
              hazardous area classification. Designs are optimized for safety,
              operational efficiency, maintainability, and regulatory compliance
            </p>
            <div className="flex justify-between items-start gap-4">
              <div className="w-full md:w-6/12 space-y-2">
                <p className="text-base md:text-xl font-semibold">
                  Tailored Engineering Design
                </p>
                <p className="leading-8">
                  Efficient, safety-oriented solutions engineered to enhance
                  project performance
                </p>
              </div>
              <div className="w-full md:w-6/12 space-y-2">
                <p className="text-base md:text-xl font-semibold">
                  {/* End-to-End Project Management */}
                  Concept to Completion
                </p>
                <p className="leading-8">
                  Strategic oversight that ensures compliance with industry
                  standards and timely delivery
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <ImageView
              imageSrc="Engineering_Solutions_naorod"
              height={800}
              width={800}
              alt={`Level service construction engineering services image`}
              classNames="object-cover bg-teal-400 h-full w-full bg-teal-300 rounded-md"
            />
          </div>
        </div>
        {/* second outline  */}
        {/* <div className="flex flex-wrap md:flex-wrap justify-evenly itmes-center gap-8">
          <div className="w-full md:w-5/12">
            
            <ImageView
              imageSrc="Comprehensive_Construction_Solutions_dqclm5"
              height={800}
              width={800}
              alt={`Level service construction construction services image`}
              classNames="object-cover bg-teal-200 h-full w-full bg-teal-300 rounded-md"
            />
          </div>
          <div className="w-full md:w-5/12 space-y-6">
            <h3 className="text-3xl font-semibold">
              Petroleum Industry Construction Expertise
            </h3>
            <p className="leading-8">
              At Level Services Construction, we bring specialized knowledge to
              petroleum-sector projects. Our construction solutions are tailored
              to meet the rigorous safety and quality requirements of this vital
              industry, ensuring operational integrity from the ground up
            </p>
            <div className="flex justify-between items-center gap-4">
              <div className="w-5/12">
                <p className="text-xl font-semibold">Innovative desion</p>
                <p className="leading-8">
                  Tailored encineering desians that enhance efficiency and
                  safety in the construction indusrty
                </p>
              </div>
              <div className="w-5/12">
                <p className="text-xl font-semibold">Project Management</p>
                <p className="leading-8">
                  Expert manacement ensuring timel delivery and adherence to
                  industr standards
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* third outline  */}
        <div className="flex flex-wrap md:flex-wrap justify-evenly itmes-center gap-8">
          <div className="w-full md:w-5/12">
            <ImageView
              imageSrc="Expert_Project_Management_jxpehn"
              height={800}
              width={800}
              alt={`Level service construction project management services image`}
              classNames="object-cover bg-teal-400 h-full w-full bg-teal-300 rounded-md"
            />
          </div>
          <div className="w-full md:w-6/12 lg:w-5/12 space-y-6">
            <h3 className="text-3xl font-semibold">
              {/* Your Partner in Project Management Excellence */}
              Project Management Services
            </h3>
            <p className="leading-8">
              {/* We understand that successful projects are built on strong
              foundations and even stronger management. That&apos;s why we offer
              expert project management services that oversee every detail with
              precision, from concept to completion */}
              We offer professional project management services for
              infrastructure projects, overseeing all phases from planning,
              procurement to construction, commissioning, and handover. Project
              management services include scope definition, scheduling, cost
              control, contractor coordination, quality assurance, risk
              management, and progress reporting, ensuring projects are
              delivered safely, on time, and within budget.
            </p>
            <div className="flex justify-between items-start gap-4">
              <div className="w-6/12 space-y-2">
                <p className="text-base md:text-xl font-semibold">
                  Strategic Planning & Coordination
                </p>
                <p className="leading-8">
                  Keeping every phase of your project aligned with your goals
                </p>
              </div>
              <div className="w-6/12 space-y-2">
                <p className="text-base md:text-xl font-semibold">
                  Risk & Budget Control
                </p>
                <p className="leading-8">
                  Minimizing delays and cost overruns through proactive
                  management
                </p>
              </div>
            </div>
          </div>
        </div>
         <h3 className="text-3xl font-semibold md:ml-20">
              The Value We Deliver
            </h3>
        <div className="flex flex-wrap lg:flex-nowrap justify-evenly items-start gap-10 lg:gap-20 -mt-48 md:-mt0 pt-20 lg:px-20">
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
