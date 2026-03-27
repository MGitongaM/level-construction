export default function HeroSection() {
  return (
    <section className="min-h-[80dvh] bg-teal-100 w-full bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1746776458/homeHeroImg_y1ghvh.jpg')] bg-cover bg-center bg-no-repeat bg">
      <div className="min-h-[80dvh] bg-teal-900/85 backdrop-blur-sm relative">
        <div className="min-h-[80dvh] grid place-content-center container text-slate-100 mx-auto px-4 py-10 space-y-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Building Future Solutions, <br /> One Project at a Time
            </h1>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-semibold leading-8">
              {/* At Level Services Construction, we are more than just builders-we
              are your trusted partners in shaping Kenya&apos;s skylines and
              communities. With years of experience in the construction and
              engineering sector, our team is dedicated to delivering
              innovative, reliable, and sustainable solutions tailored to the
              unique needs of our clients */}
              Level Services Construction is an engineering, procurement, and
              construction (EPC) company operating in the infrastructure and
              energy sectors. Established to meet the growing demand for
              specialized expertise in oil and gas, We have since expanded our
              focus to general infrastructure construction, clean and
              sustainable energy solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
