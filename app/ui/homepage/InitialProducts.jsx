import Image from "next/image";
import React from "react";
import product from "../../assets/banner-new.jpg";

const InitialProducts = () => {
  return (
    <section className="p-4 bg-slate-600 w-screen overflow-x-hidden">
      <h1 className="text-2xl">New arrivals: </h1>
      <div className="relative ">
        <Image
          src={product}
          className="h-56 w-56 object-contain"
          alt="Product"
        ></Image>
      </div>
    </section>
  );
};

export default InitialProducts;
