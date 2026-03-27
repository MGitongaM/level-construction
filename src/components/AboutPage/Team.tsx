import { BookCheckIcon, FileCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      firstName: "John",
      lastName: "Wachira",
      image: "",
      postition: "Strategic Director",
      profileDescription: `John Wachira is a Mechanical Engineer and energy lead specialist with over 10 years of technical and
leadership experience in engineering and infrastructure projects. He focuses on transforming engineering
work into scalable sustainable ventures. He also provides overall leadership, strategic direction, and
technical oversight for the company. John currently serves as a strategic director at Level Service Ltd
where he drives strategy, team development and execution culture to scale operations`,
      expertise: [
        "Project planning",
        "Contractor management",
        "Project leadership",
        "Strategic planning",
        "Business development",
        "Technical audits",
        "Procurement tender evaluation",
        "Preparation of Bills of Quantities (BOQs)",
      ],

      academics: [
        "MSc in Mechatronics Engineering(JKUAT)",
        " BTech in Mechanical(production) Engineering",
        "Registered Engineering Technologist (KETRB) and registered with EBK",
      ],
    },
    {
      id: 2,
      firstName: "Michael",
      lastName: "Mwangi",
      image: "",
      postition: "Operations Director",
      profileDescription: `Michael Mwangi is an experienced Civil Engineer with 10+ years in full cycle construction project planning
and design of multi million KES projects across the LPG/energy, petroleum and edible oils,
telecommunications, power and infrastructure sectors.
Currently, Michael serves as Operations Director at Level service Ltd, leading to end-to-end delivery of LPG
infrastructure projects`,
      expertise: [
        "Project management",
        "Civil design",
        "Regulatory compliance EPRA/NEMA/County",
        "BOQ development",
        "Risk management",
        "Geotechnical supervision commissioning",
        "Documentation support",
        "Client support",
      ],

      academics: [
        "MSc in project Management (JKUAT)",
        "BTech in civil engineering (TUK)",
        "Registered Engineering Technologist",
      ],
    },
    {
      id: 3,
      firstName: "Evans",
      lastName: "Maroa",
      image: "",
      postition: "Lead Mechanical Engineer",
      profileDescription: `Evans Maroa is an experienced mechanical engineer with over 5 years with experience with
engineering designs, project planning, outlining and meeting functional environmental projects in
oil and gas energy projects with a key focus on LPG bulk storage development, fuel conversions
system and auto gas station`,
      expertise: [
        "Mechanical design",
        "CAD modelling",
        "Site supervision",
        "Risk mitigation",
        "Stake holder coordination",
      ],

      academics: ["BSc in Mechanical Engineering (TUM)", "Registered Engineer"],
    },
    {
      id: 4,
      firstName: "Henry",
      lastName: "Nyakundi",
      image: "",
      postition: "Lead Civil Engineer",
      profileDescription: `Henry Nyakundi is a Civil Engineer with over 8 years of experience in project management and
infrastructure development. His background covers oil and gas projects, water and sanitation
systems, road construction, and irrigation works.`,
      expertise: [
        "Engineering design",
        "Storm water management",
        "Sanitation systems",
        "Irrigation design",
        "Contract management (FIDIC)",
        "Risk management",
        "Feasibility studies",
        "Stakeholder coordination",
        "Construction supervision",
      ],

      academics: [
        "MSc in project Management (JKUAT)",
        "BSc in Civil Engineering (DeKUT)",
        "PMP and Agile Scrum Master",
      ],
    },
  ];
  return (
    <>
      <section className="container mx-auto px-4 pb-10 md:-mt-30">
        <h2 className="text-3xl font-bold text-center">The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {
            // teamMembers.map((member)=>(<Card key={member.id} className=" border bg-teal-50/20  hover:scale-105 transition duration-700">
            teamMembers.map((member) => (
              <Card
                key={member.id}
                className=" border bg-teal-50/20  hover:scale-100 transition duration-700"
              >
                <CardHeader className="flex flex-row gap-8">
                  <Avatar size="lg" className="">
                    <AvatarImage src={member.image} />
                    <AvatarFallback>
                      {member.firstName.charAt(0).toUpperCase()}
                      {member.lastName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {member.image}
                  <div className="c">
                    <CardTitle className="font-extrabold">
                      {member.firstName} {member.lastName}
                    </CardTitle>
                    <CardDescription className="text-xl">
                      {member.postition}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="Profile">
                      <AccordionTrigger className="font-semibold hover:no-underline">
                        Profile:
                      </AccordionTrigger>
                      <AccordionContent className="ml-2 md:ml-10">
                        {member.profileDescription}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="Areas of Expertise">
                      <AccordionTrigger className="font-semibold hover:no-underline">
                        Areas of Expertise:
                      </AccordionTrigger>
                      <div className="grid grid-cols-2">
                        {member.expertise.map((strength) => (
                          <AccordionContent
                            key={strength}
                            className="ml-2 md:ml-10 flex items-center gap-2"
                          >
                            <FileCheck size={10} className="text-teal-300" />{" "}
                            {strength}
                          </AccordionContent>
                        ))}
                      </div>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="Academic & Professional Qualifications">
                      <AccordionTrigger className="font-semibold hover:no-underline">
                        Academic & Professional Qualifications:
                      </AccordionTrigger>
                      {member.academics.map((strength) => (
                        <AccordionContent
                          key={strength}
                          className="ml-2 md:ml-10 flex items-center gap-2"
                        >
                          <BookCheckIcon size={10} className="text-teal-300" />{" "}
                          {strength}
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </section>
    </>
  );
}
