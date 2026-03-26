import {
  Columns3Cog,
  Fingerprint,
  HousePlus,
  Landmark,
  ScrollText,
  SignatureIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

export default function OurProcessSection() {
  const ourWorkProcesses = [
    {
      id: 1,
      icon: <SignatureIcon />,
      title: "Contract Signing",
      details:
        "Project report, design drawings, bill of quantities, and technical specifications",
    },
    {
      id: 2,
      icon: <Fingerprint />,
      title: "Regulatory Approvals & Procurement:",
      details: "Securing NEMA, EPRA, and county approvals.",
    },
    {
      id: 3,
      icon: <Landmark />,
      title: "Civil Works & Shed Erection:",
      details: " Laying the foundation for structural reliability",
    },
    {
      id: 4,
      icon: <Columns3Cog />,
      title: "Tanks & Equipment Installation",
      details: " Erection,testing, and commissioning",
    },
    {
      id: 5,
      icon: <ScrollText />,
      title: "Handover & Documentation",
      details: "Comprehensive repoarting and compliance confirmation",
    },
    {
      id: 6,
      icon: <HousePlus />,
      title: "Post-Construction Support",
      details:
        "Maintenance and performance monitoring to ensure lasting efficiency",
    },
  ];
  return (
    <>
      <section className="container mx-auto px-4 mt-20 mb-30">
        <h2 className="text-3xl font-bold text-center">Our Project Process</h2>
        <p className="text-center my-10">
          At Level Serveices Construstion, we believe in delivering projects
          through a structured, transparent, and results-oriented approach
        </p>
        {/* <div className="flex flex-col items-center gap-4 mt-10"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {ourWorkProcesses.map((process) => (
            <Card
              key={process.id}
              // className="max-h-40 pl-2: pl-10 nth-1:bg-teal-200/10 nth-2:bg-teal-200/20 nth-3:bg-teal-200/30 nth-4:bg-teal-200/40 nth-5:bg-teal-200/50 nth-6:bg-teal-200/60 w-full md:w-5/12"
              className="max-h-80 pl-2: pl-10 nth-1:bg-teal-200/10 nth-2:bg-teal-200/20 nth-3:bg-teal-200/30 nth-4:bg-teal-200/40 nth-5:bg-teal-200/50 nth-6:bg-teal-200/60 w-full md:w-10/12"
            >
              {/* <CardHeader className="flex flex-row items-center justify-center"> */}
              <Badge variant="outline" className="bg-white">step - {process.id}</Badge>
              <CardHeader className="flex flex-row items-center ">
                <div className="c">{process.icon}</div>
                <CardTitle>{process.title}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="c">{process.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
