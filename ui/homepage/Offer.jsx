import React from "react";
import banner from "../../app/assets/banner-new.jpg";
import Image from "next/image";

const Offer = () => {
  return (
    <div className="w-screen h-[400px] mt-4 p-4 relative flex items-center justify-center ">
      <Image
        src={banner}
        className="flex items-center justify-center max-h-full max-w-full"
        fill
        objectFit="cover"
        quality={100}
        placeholder="blur"
        alt="Banner image"
      ></Image>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center  p-2 rounded-md bg-red-100 bg-opacity-75  text-black/50">
        <h1 className="text-4xl">
          Big offer for summer! Get 50% off during the holiday season!
        </h1>
      </div>
    </div>
  );
};

export default Offer;
