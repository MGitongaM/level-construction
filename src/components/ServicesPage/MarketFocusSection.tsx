import ImageView from "@/components/NextCloudinary/ImageView";
import { focusAreas } from "@/staticData/ServicesPage/MarketFocusData";

export const MarketFocusSection = () => {
  return (
    <>
      <section
        className="container mx-auto px-4 py-10 bg-teal-50 rounded-md"
        id="focusIndusties"
      >
        <h2 className="text-3xl font-bold text-center">Industries We Serve</h2>
        <p className="text-center max-w-3xl mx-auto py-8">
          We take pride in building the infrastructure that powers our
          communities. From energy plants to specialized industrial facilities
          to commercial spaces, our team applies deep rooted technical knowledge
          to meet the unique demands of every sector we touch
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10">
          {focusAreas.map((area) => (
            <div key={area.id} className=" ">
              <ImageView
                imageSrc={area.imageSrc}
                height={800}
                width={800}
                alt={`${area.name} image`}
                classNames="object-cover bg-center rounded-md h-[30dvh]"
              />
              <p className="font-semibold text-center">{area.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
