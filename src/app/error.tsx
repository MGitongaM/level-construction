"use client";
import ImageView from "@/components/NextCloudinary/ImageView";

export default function Errorpage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center h-[60dvh]">
        <ImageView
          imageSrc="error_pbrlpg"
          height={800}
          width={800}
          alt={`Not found image`}
          classNames="object-contain mx-auto max-h-[60dvh]"
        />
        <div className="text-center space-y- w-6/12 md:w-3/12 mx-auto bg-amber-100 py-4 px-6 rounded-md">
          <p className="text-center">
            An error occurred while loading the page.
          </p>
          <p className="text-center">Please try again later.</p>
        </div>
      </div>
    </section>
  );
}
