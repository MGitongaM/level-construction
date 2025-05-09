import ImageView from "../NextCloudinary/ImageView";

export default function ServicesOutlineSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-10 space-y-40">
        {/* first outline  */}
        <div className="flex flex-wrap md:flex-wrap justify-evenly itmes-center gap-8">
          <div className="w-full md:w-6/12 lg:w-5/12 space-y-6">
            <h3 className="text-3xl font-semibold">
              Comprehensive Engineering Solutions for the Construction Industry
            </h3>
            <p className="leading-8">
              Our engineering services are designed to meet the unique
              challenges of the petroleum sector. We leverage advanced
              technologies and industry expertise to deliver exceptional results
            </p>
            <div className="flex justify-between items-start gap-4">
              <div className="w-full md:w-6/12 space-y-2">
                <p className="text-base md:text-xl font-semibold">
                  Innovative desion
                </p>
                <p className="leading-8">
                  Tailored encineering desians that enhance efficiency and
                  safety in the construction indusrty
                </p>
              </div>
              <div className="w-full md:w-6/12 space-y-2">
                <p className="text-base md:text-xl font-semibold">
                  Project Management
                </p>
                <p className="leading-8">
                  Expert manacement ensuring timel delivery and adherence to
                  industry standards
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            {/* <div className="h-96 bg-teal-600 rounded-md"></div> */}
            <ImageView
              imageSrc="Engineering_Solutions_naorod"
              height={800}
              width={800}
              alt={`Level service construction engineering services image`}
              classNames="object-cover bg-teal-400 h-full w-full bg-teal-300 rounded-md"
            />
          </div>
        </div>
        {/* second outline  */}
        <div className="flex flex-wrap md:flex-wrap justify-evenly itmes-center gap-8">
          <div className="w-full md:w-5/12">
            {/* <div className="h-96 bg-teal-600 rounded-md"></div> */}
            <ImageView
              imageSrc="Comprehensive_Construction_Solutions_dqclm5"
              height={800}
              width={800}
              alt={`Level service construction construction services image`}
              classNames="object-cover bg-teal-200 h-full w-full bg-teal-300 rounded-md"
            />
          </div>
          <div className="w-full md:w-5/12 space-y-6">
            <h3 className="text-3xl font-semibold">
              Comprehensive Construction Solutions for the Petroleum Industry
            </h3>
            <p className="leading-8">
              At Level Construction. we nrovide ton-natch construction corviced
              tailored specifically for the petroleum sector. Our expertise
              ensures that every project is executed with precision, safety, and
              efficiency, meeting the unique demands orthis vitalinaustry
            </p>
            {/* <div className="flex justify-between items-center gap-4">
              <div className="w-5/12">
                <p className="text-xl font-semibold">Innovative desion</p>
                <p className="leading-8">
                  Tailored encineering desians that enhance efficiency and
                  safety in the construction indusrty
                </p>
              </div>
              <div className="w-5/12">
                <p className="text-xl font-semibold">Project Management</p>
                <p className="leading-8">
                  Expert manacement ensuring timel delivery and adherence to
                  industr standards
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {/* third outline  */}
        <div className="flex flex-wrap md:flex-wrap justify-evenly itmes-center gap-8">
          <div className="w-full md:w-6/12 lg:w-5/12 space-y-6">
            <h3 className="text-3xl font-semibold">
              Expert Project Management for Your Success
            </h3>
            <p className="leading-8">
              Our Project Management services ensure that every phase of your
              constructon projectis executed with precision and enticiency. we
              prontize communication and collaboration to meet vour specific
              needs and timelines.
            </p>
            <div className="flex justify-between items-start gap-4">
              <div className="w-6/12 space-y-2">
                <p className="text-base md:text-xl font-semibold">
                  Innovative desion
                </p>
                <p className="leading-8">
                  Tailored encineering desians that enhance efficiency and
                  safety in the construction indusrty
                </p>
              </div>
              <div className="w-6/12 space-y-2">
                <p className="text-base md:text-xl font-semibold">
                  Project Management
                </p>
                <p className="leading-8">
                  Expert manacement ensuring timel delivery and adherence to
                  industr standards
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            {/* <div className="h-96 bg-teal-600 rounded-md"></div> */}
            <ImageView
              imageSrc="Expert_Project_Management_jxpehn"
              height={800}
              width={800}
              alt={`Level service construction project management services image`}
              classNames="object-cover bg-teal-400 h-full w-full bg-teal-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
