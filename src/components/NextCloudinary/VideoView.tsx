"use client";

import { VideoProps } from "@/types";
import { CldVideoPlayer } from "next-cloudinary";

export default function VideoView({
  videoSrc,
  height,
  width,
  classNames,
}: VideoProps) {
  return (
    <>
      <CldVideoPlayer
        src={videoSrc}
        height={height}
        width={width}
        className={classNames}
      />
      autoPlay loop
    </>
  );
}
