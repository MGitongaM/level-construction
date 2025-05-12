import ImageView from "../NextCloudinary/ImageView";

export default function PartnerSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-10 space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Your Trusted Partner in Construction Services
        </h2>
        {/* <div className="h-96 w-full bg-teal-100 rounded-md"></div> */}
        <ImageView
          imageSrc="Trusted_Partner_vhauhq"
          height={800}
          width={800}
          alt={`Level service construction trusted partner image`}
          classNames="object-cover bg-teal-200 h-96 w-full bg-teal-300 rounded-md"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-balance leading-8 text-center">
            At Level Services Construction, your satisfaction is our top
            priority. From residential developments to large-scale commercial
            projects, we are committed to delivering excellence at every stage.
            We take pride in being a reliable partner you can count on-today and
            for generations to come
          </p>
          <div className=" flex flex-wrap md:flex-nowrap justify-evenly items-start gap-8">
            <div className="w-full md:w-6/12 space-y-6 border border-teal-400 rounded-md px-4 py-8">
              <p className="text-xl font-semibold">Innovative Solutions</p>
              <p className="leading-8">
                We embrace modern technologies and creative problem-solving to
                overcome challenges and deliver projects on time and within
                budget
              </p>
            </div>
            <div className="w-full md:w-6/12 space-y-6 border border-teal-400 rounded-md px-4 py-8">
              <p className="text-xl font-semibold">Client-Focused Approach</p>
              <p className="leading-8">
                Every project is unique, and we take the time to understand your
                goals, offering personalized solutions that align with your
                vision
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
