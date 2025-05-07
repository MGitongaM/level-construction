export default function PartnerSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-10 space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Your Trusted Partner in Construction Services
        </h2>
        <div className="h-96 w-full bg-teal-100 rounded-md"></div>
        <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-balance leading-8 text-center">
            At level service construction we pride ourselves on our commitment to
            quality and safelty. Our specialized services are designed to meet the
            unique demands of the kenyan construction indusry.
            </p>
            <div className=" flex justify-evenly items-start gap-8">
            <div className="w-5/12 space-y-6 border rounded-md px-4 py-8">
                <p className="text-xl font-semibold">Innovative</p>
                <p className="leading-8">
                Tailored solutions for your construction needs
                </p>
            </div>
            <div className="w-5/12 space-y-6 border rounded-md px-4 py-8">
                <p className="text-xl font-semibold">Reliable</p>
                <p className="leading-8">
                Building trust through quality workmanships
                </p>
            </div>
            </div>

        </div>
      </div>
    </section>
  );
}
