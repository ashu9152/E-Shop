import React from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const addToFavourite = () => {

    toast("This Feature is unnder Maintanence");
    // alert("Added to Favourite");
  };
  return (
    <>
      <nav className="flex-nowrap ite  bg-orange-500 ">
        <div className="text-white flex justify-around  ">
          <div className="mb-2">
            <NavLink to={"/"}>
              <h2 className=" md:text-5xl text-3xl cursor-pointer">ShopCart</h2>
            </NavLink>
          </div>
          <div className="flex text-2xl items-center text-white ">
            <FaHeart
              onClick={addToFavourite}
              title="Under Maintanence"
              className="hover:text-gray-700 cursor-pointer "
            />
            <NavLink to={"/cart"}>
              <FaCartPlus className="ml-4 hover:text-gray-700 cursor-pointer" />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
