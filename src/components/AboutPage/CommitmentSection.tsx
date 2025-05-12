import ImageView from "../NextCloudinary/ImageView";

export default function CommitmentSection() {
  return (
    <section className="min-h-[80dvh]">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-8">
          <div className="w-full md:w-5/12 space-y-6">
            <h2 className="text-2xl md:text-3xl  font-bold">
              Building a Stronger Future: Our Commitment to Quality in
              Construction
            </h2>
            <p className="leading-8">
              At Level Construction, our mission is to provide top-notch
              construction and engineering services that set new standards for
              quality, safety, and efficiency. We believe in building strong
              relationships with our clients, founded on trust, transparency,
              and a shared vision for success
            </p>
          </div>
          <div className="w-full md:w-6/12">
            {/* <div className="h-96 bg-teal-600 rounded-md"></div> */}
            <ImageView
              imageSrc="Building_a_Stronger_Future_j6dndr"
              height={800}
              width={800}
              alt={`Level service construction building stronger future image`}
              classNames="object-cover bg-teal-200 h-full w-full bg-teal-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
