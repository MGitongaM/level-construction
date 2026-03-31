import { BadgeCheck, FilePen } from "lucide-react";
import ProjectImageCarousel from "./ProjectImageCarousel";
import { projects } from "@/staticData/ProjectsPage/ProjectsData";

export default function ProjectsSection() {
  return (
    <>
      <section className="conatiner mx-auto px-4 my-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Our Project Portfolio
        </h1>

        <div className="max-w-7xl  mx-auto my-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-wrap md:flex-nowrap gap-y-8 my-20 border rounded-md"
            >
              <div className="w-full md:w-5/12  h-[70dvh] 2xl:h-[55dvh]  rounded-md ">
                <ProjectImageCarousel images={project.images} />
              </div>

              <div className="w-full md:w-7/12 md:mx-auto  odd:bg-white even:bg-teal-100 rounded-md px-4 py-12">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <hr className="border border-l border-teal-300 my-4" />
                <h4 className="text-lg font-semibold mb-4">Project Scope:</h4>
                <div className="space-y-4 ml-2 h-[20dvh] overflow-y-auto px-2">
                  {project.scope.map((scopeList) => (
                    <p key={scopeList} className="">
                      <FilePen
                        size={14}
                        className="text-blue-300 inline mr-2 "
                      />
                      {scopeList}
                    </p>
                  ))}
                </div>
                <hr className="border border-teal-300 my-4" />
                <h4 className="text-lg font-semibold  mb-4">Outcome:</h4>
                <div className="space-y-2 ml-2">
                  {project.outcome.map((outcomeList) => (
                    <p key={outcomeList} className="">
                      <BadgeCheck
                        size={30}
                        className="text-green-300 inline mr-2"
                      />
                      {outcomeList}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
