import React from "react";
import jewel from "../images/jewelery.jpg";
import men from "../images/Men-Fashion.jpg";
import women from "../images/women-fashion.jpg";
import electronic from "../images/electronic.jpg";

function HeroSection() {
  return (
    <>
      <div className="flex flex-wrap md:justify-center gap-4">
        <div className=" flex  md:flex-row flex-col mt-4 gap-4 ">
          <div className="cursor-pointer shrink">
            <img className="lg:h-[33rem] h-[20rem]" src={women} alt="" />
          </div>

          <div className="cursor-pointer shrink ">
            <img className="lg:h-[33rem] h-[20rem]" src={jewel} alt="" />
          </div>
        </div>
        <div className=" flex  flex-col mt-4 gap-4 justify-center ">
          <div className="cursor-pointer">
            <img className="lg:h-64" src={men} alt="" />
          </div>

          <div className="cursor-pointer">
            <img className="lg:h-64" src={electronic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
