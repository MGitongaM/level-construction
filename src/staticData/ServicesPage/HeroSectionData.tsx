import { Car, HousePlug, TimerResetIcon } from "lucide-react";

export const heroEntries = [
  {
    id: 1,
    title: "Engineering Services Tailored to Your Needs",
    description:
      "Our engineering team delivers innovative solutions that enhance project outcomes",
    icon: <Car className="text-teal-300 size-8 bg-teal-50 rounded-md p-1" />,
  },
  {
    id: 2,
    title: "Expert Construction for  Optimal Project Execution",
    description:
      "We provide top notch construction services that adhere to industry standards",
    icon: (
      <HousePlug className="text-teal-300 size-8 bg-teal-50 rounded-md p-1" />
    ),
  },
  {
    id: 3,
    title: "Project Management for Seamless Operations",
    description:
      "Our project management ensures timely delivery and budget adhrerences",
    icon: (
      <TimerResetIcon className="text-teal-300 size-8 bg-teal-50 rounded-md p-1" />
    ),
  },
];
