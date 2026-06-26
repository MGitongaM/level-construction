export default function LocationSection() {
  return (
    <>
      <div className="container mx-auto px-4">
        {/* <iframe src="https://maps.app.goo.gl/ENZxAynxjv2x27MA6" className="rounded-lg w-full h-96"/> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.890643635822!2d36.87392867596757!3d-1.235571298752649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f155f3c9e2241%3A0xe63a84bd70d17c93!2sThe%20Trio%20Complex!5e0!3m2!1sen!2ske!4v1782469352610!5m2!1sen!2ske"
        //   width="600"
        //   height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-96"
        />
      </div>
    </>
  );
}
