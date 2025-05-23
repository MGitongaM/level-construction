export default function HeroSection() {
  return (
    <section className="min-h-[80dvh] bg-teal-100 w-full bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1746776458/homeHeroImg_y1ghvh.jpg')] bg-cover bg-center bg-no-repeat bg">
      <div className="min-h-[80dvh] bg-teal-900/85 backdrop-blur-sm relative">
      <div className="min-h-[80dvh] grid place-content-center container text-slate-100 mx-auto px-4 py-10 space-y-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            {/* Building Future Solutions */}
            {/* Building the Future of Kenya, One Project at a Time */}
            Building Future Solutions, <br /> One Project at a Time
          </h1>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg font-semibold leading-8">
            {/* At Level Construction, we are dedicated to provinding top notch
            construction and engineering services for the construction industry.
            Our expertise ensures that we meet the unqiue challenges of this
            vital industry with innovative solutions and trusted solutions. */}
            At Level Services Construction, we are more than just builders-we
            are your trusted partners in shaping Kenya&apos;s skylines and
            communities. With years of experience in the construction and
            engineering sector, our team is dedicated to delivering innovative,
            reliable, and sustainable solutions tailored to the unique needs of
            our clients
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
