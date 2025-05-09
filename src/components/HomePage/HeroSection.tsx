export default function HeroSection() {
  return (
    <>
      <section className="min-h-[80dvh] w-full bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1746776458/homeHeroImg_y1ghvh.jpg')] bg-cover bg-center bg-no-repeat bg">
        <div className="min-h-[80dvh] bg-teal-700/75 backdrop-blur-sm">
          <div className="container mx-auto flex min-h-[80dvh] items-center px-4 py-10">
            <div className="max-w-4xl space-y-6 text-slate-100">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold ">
                Expert Construction Solutions for the Construction Industry
              </h1>
              <p className="max-w-3xl text-lg md:text-xl font-semibold leading-8 text-balance">
                At Levels Construction, we pride curselves on deliverina
                excentional construction and engineering services. Our
                commitment to quality and salety ensures that your profects are
                completed on ume and to the nignest standards
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
