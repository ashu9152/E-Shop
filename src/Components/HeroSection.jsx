import React from "react";
import jewel from "../images/jewelery.jpg";
import men from "../images/Men-Fashion.jpg";
import women from "../images/women-fashion.jpg";
import electronic from "../images/electronic.jpg";

function HeroSection() {
  return (
    <>
      <div className="flex flex-wrap md:justify-center gap-4">
        <div className=" flex mt-4 gap-4 ">
          <div className="cursor-pointer shrink ">
            <img className="sm:h-[31rem]  " src={women} alt="" />
          </div>

          <div className="cursor-pointer shrink ">
            <img className="sm:h-[31rem] " src={jewel} alt="" />
          </div>
        </div>
        <div className=" flex  lg:flex-col mt-3  gap-4 justify-center ">
          <div className="cursor-pointer">
            <img className="sm:h-60 " src={men} alt="" />
          </div>

          <div className="cursor-pointer">
            <img className="sm:h-60 " src={electronic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
