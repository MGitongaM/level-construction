import { heroEntries } from "@/staticData/ServicesPage/HeroSectionData";
import ImageView from "@/components/NextCloudinary/ImageView";
import {Columns3Cog, FilePen, ShieldCheck } from "lucide-react";

export default function ServicesOutlineSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20 space-y-40">
        <h2 className="text-3xl font-bold text-center  ">What We Do</h2>
        {/* first outline  */}
        <div className="flex flex-wrap-reverse md:flex-wrap justify-evenly itmes-center gap-8 -mt-20">
          <div className="w-full md:w-6/12 lg:w-6/12 space-y-6">
            <h3 className="text-3xl font-semibold">
              Engineering, Procurement & Construction (EPC)
            </h3>
            <p className="leading-8">
              We deliver turnkey engineering, procurement, and construction
              (EPC) solutions from concept development through commissioning.
              Our multidisciplinary team works collaboratively to deliver safe,
              compliant, and cost effective infrastructure.
              <br/><br/>
               Our services
              encompass feasibility studies, engineering design, statutory
              approvals, procurement, civil works, structural construction,
              mechanical and electrical installations, fire protection systems,
              instrumentation, testing, commissioning, and long-term maintenance
              support. Every project is executed in accordance with
              international best practices, PMI project management principles,
              and applicable local regulations to ensure quality, safety, and
              operational excellence.
            </p>
            <div className="flex flex-col justify-between items-start gap-4 mt-10">
              <div className="w-full md:w-12/12 space-y-2">
                <p className="text-base md:text-xl font-semibold flex items-center gap-2">
                  <Columns3Cog className="text-teal-400"/>
                  Tailored Engineering Design
                </p>
                <p className="leading-8 pl-4">
                  We provide practical, innovative, and safety driven engineering designs that optimize project performance, lifecycle costs, constructability, and regulatory compliance.
                </p>
              </div>
              <div className="w-full md:w-12/12 space-y-2">
                <p className="text-base md:text-xl font-semibold flex items-center gap-2">
                  <FilePen className="text-teal-400"/>
                  Concept to Completion
                </p>
                <p className="leading-8 pl-4">
                  From feasibility and planning through procurement, construction, commissioning, and handover, we coordinate every discipline under a single project management framework to deliver projects safely, on schedule, and within budget.
                </p>
              </div>
              <div className="w-full md:w-12/12 space-y-2">
                <p className="text-base md:text-xl font-semibold flex items-center gap-2">
                  <ShieldCheck className="text-teal-400"/>
                  Quality, Safety & Compliance
                </p>
                <p className="leading-8 pl-4">
Our commitment to rigorous quality assurance, occupational health and safety, and environmental stewardship ensures every project meets client expectations and complies with applicable industry standards and statutory requirements.                </p>
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
              
              We offer professional project management services for
              infrastructure projects, overseeing all phases from planning,
              procurement to construction, commissioning, and handover. Project
              management services include scope definition, scheduling, cost
              control, contractor coordination, quality assurance, risk
              management, and progress reporting, ensuring projects are
              delivered safely, on time, and within budget.
            </p>
            <div className="flex justify-between items-start gap-4 mt-10">
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
              <span className="bg-teal-50 p-1 rounded-md w-10 text-center">
                {entry.icon}
              </span>
              <p className="text-xl font-bold">{entry.title}</p>
              <p className="leading-8">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
