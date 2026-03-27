// import { heroEntries } from "@/staticData/ServicesPage/HeroSectionData";

export default function HeroSection() {
  return (
    <section className="min-h-[80dvh] bg-teal-100 w-full bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1746788969/Comprehensive_Construction_Solutions_dqclm5.jpg')] bg-cover bg-center bg-no-repeat bg">
      <div className="min-h-[80dvh] bg-teal-900/75 backdrop-blur-sm relative grid place-content-center conainer mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 text-slate-100">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Comprehensive Solutions for the Construction Industry
          </h1>
          <p className="text-lg font-semibold leading-8">
            At Level Services Construction, we offer a diverse range of
            specialized services tailored to meet the unique challenges of each
            project. From engineering design to project execution and
            management, our team ensures precision, safety, and efficiency at
            every stage. We&apos;re committed to delivering lasting solutions that
            drive results for our clients across Kenya and beyond
          </p>
        </div>
        {/* <div className="flex flex-wrap md:flex-nowrap justify-evenly items-start gap-10 lg:gap-20 pt-20 lg:px-20">
          {heroEntries.map((entry) => (
            <div key={entry.id} className="flex flex-col gap-4">
              <span className="bg-teal-50 p-1 rounded-md w-10 text-center">{entry.icon}</span>
              <p className="text-xl font-bold">{entry.title}</p>
              <p className="leading-8">{entry.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
