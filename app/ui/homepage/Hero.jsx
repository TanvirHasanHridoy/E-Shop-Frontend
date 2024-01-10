import React from "react";
import Offer from "./Offer";
import Banner from "./Banner";
import Categories from "./Categories";
import InitialProducts from "./InitialProducts";

const Hero = () => {
  return (
    <div>
      <Banner />
      <Offer />
      {/* <InitialProducts /> */}
      <Categories />
    </div>
  );
};

export default Hero;
