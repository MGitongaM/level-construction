import ImageView from "../NextCloudinary/ImageView";

export default function PartnerSection() {
  const brands = [
    { id: 1, name: "petrocity", src: "petrocity_i9m7aq" },
    { id: 2, name: "avic international", src: "avic_madrmu" },
    { id: 3, name: "chemi-chemi", src: "chemi_zqbsib" },
    { id: 4, name: "astrol", src: "astrol_raboje" },
    { id: 5, name: "proto", src: "proto_qpfr3h" },
    { id: 6, name: "gasfil", src: "gasfil_h3fupp" },
    { id: 7, name: "lexo", src: "lexo_slkmac" },
    { id: 8, name: "amani", src: "amani_r5jfgk" },
    { id: 9, name: "mengas", src: "mengas_b3qhg2" },
  ];
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-10 space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Your Trusted Partner in Construction Services
        </h2>

        <ImageView
          imageSrc="Trusted_Partner_vhauhq"
          height={800}
          width={800}
          alt={`Level service construction trusted partner image`}
          classNames="object-cover bg-teal-200 h-96 w-full bg-teal-300 rounded-md"
        />
        <div className="max-w-5xl mx-auto space-y-6">
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
        <h2 className="text-3xl font-bold text-center mt-20 mb-10">
          Brands that Trusts Us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-2">
          {brands.map((brand) => (
            <ImageView
              key={brand.id}
              imageSrc={brand.src}
              height={800}
              width={800}
              alt={`${brand.name} logo`}
              classNames="object-cover bg-center border rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
