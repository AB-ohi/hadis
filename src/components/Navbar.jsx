import Image from "next/image";
import React from "react";
import home from "../../public/home-logo.png";
import hand from "../../public/helping-hand.svg";
import { CiSearch } from "react-icons/ci";
import SideList from "./Sideber";

const Navbar = () => {
  return (
    <div>
      <div className="flex md:flex-row md:gap-0 gap-3 flex-col md:items-center justify-start md:justify-between mt-3 w-[98%] m-auto">
      <div className="flex items-center gap-[25px]">
        <Image className="w-11" src={home} alt="home" />
        <div className="">
          <h1 className="font-bold">হাদিস সমূহ</h1>
          <p className="text-[13px]">হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>
      <div className="flex md:gap-20 gap-5">
        <div className="flex items-center gap-2 p-3 border-solid border-2 rounded-[11px] border-gray-300">
          <CiSearch className="text-xl" />
          <input
            className="outline-none "
            type="search"
            name=""
            placeholder="Search Hadith"
            id=""
          />
        </div>
        <div className="flex text-white px-4 rounded-[11px] gap-[5px] items-center bg-[#2B9E76]">
          <p>সাপোর্ট করুন</p>
          <Image src={hand} alt="hand"/>
        </div>
      </div>
    </div>
    <div>
      {/* <SideList/> */}
    </div>
    </div>
  );
};

export default Navbar;
