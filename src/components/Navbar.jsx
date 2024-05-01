import '../app/globals.css'
import Image from "next/image";
import React from "react";
import home from "../../public/home-logo.png";
import hand from "../../public/helping-hand.svg";
import { CiSearch } from "react-icons/ci";
import SideList from "./Sideber";
import { RiSettings2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
      <div className="flex md:gap-0 gap-3 items-center justify-between  bg-white py-3 px-2 nav">
      <div className="flex items-center gap-[25px]">
        <Image className="w-11" src={home} alt="home" />
        <div className="">
          <h1 className="font-bold md:block hidden md:text-black text-[#2B9E76]">হাদিস সমূহ</h1>
          <h1 className="font-bold block md:hidden text-[25px] md:text-black text-[#2B9E76]">আল হাদিস</h1>
          <p className="text-[13px] md:block hidden">হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>
      <div className="flex items-center  md:gap-20 gap-5">
        <div className="flex items-center gap-2 p-2 md:border-solid border-none md:bg-white bg-gray-100 border-2 rounded-[11px] border-gray-300">
          <CiSearch className="text-xl" />
          <input
            className="outline-none md:block hidden"
            type="search"
            name=""
            placeholder="Search Hadith"
            id=""
          />
        </div>
        <div className="md:flex hidden text-white p-4 rounded-[11px] gap-[5px] items-center bg-[#2B9E76]">
          <p>সাপোর্ট করুন</p>
          <Image src={hand} alt="hand"/>
        </div>
        <div className="p-2 md:hidden block rounded-[8px] bg-[#2B9E76] text-white ">
          <RiSettings2Fill className="text-[20px]"/>
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
