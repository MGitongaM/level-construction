import ImageView from "../NextCloudinary/ImageView";

export const MarketFocusSection = () => {
  const focusAreas = [
    {
      id: 1,
      name: "LPG and bulk supply companies",
      imageSrc: "LPG_and_bulk_supply_companies_ys8cg0",
    },
    {
      id: 2,
      name: "Energy service companies",
      imageSrc: "Energy_service_companies_juxlvq",
    },
    {
      id: 3,
      name: "Manufacturing and processing industries",
      imageSrc: "Manufacturing_and_processing_industries_jqu7vb",
    },
    {
      id: 4,
      name: "Agriculture and farming enterprises",
      imageSrc: "Agriculture_and_farming_enterprises_zev0un",
    },
    {
      id: 5,
      name: "Educational institutions",
      imageSrc: "Educational_institutions_och60i",
    },
    {
      id: 6,
      name: "Hotels and hospitality businesses",
      imageSrc: "Hotels_and_hospitality_businesses_wcpgoo",
    },
    {
      id: 7,
      name: "Hospitals and healthcare facilities",
      imageSrc: "Hospitals_and_healthcare_facilities_kbttdx",
    },
  ];
  return (
    <>
      <section className="container mx-auto px-4 py-10 bg-teal-50 rounded-md" id="focusIndusties">
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
