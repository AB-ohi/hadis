"use client"
import "../app/globals.css";
import Image from "next/image";
import React, { useState } from "react";
import home from "../../public/home-logo.png";
import hand from "../../public/helping-hand.svg";
import { CiSearch } from "react-icons/ci";
import "../app/globals.css";
import { RiSettings2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [settingOpen,setSettingOpen] = useState(false);
  const [leftSideBer, setLeftSideBer] = useState(false);
  const [arValue, setArValue] = useState(23);
  const [bnValue, setBnValue] = useState(25);

  const handleChange = (env) => {
    setArValue(env.target.value);
  };
  
  const handelBnChange = (env) =>{
    setBnValue(env.target.value);

  }
  return (
    <div className="top-0 md:relative fixed w-full">
      <div className="flex md:gap-0 gap-3 items-center justify-between  bg-white py-3 px-2 nav">
        <div className="flex items-center gap-[25px]">
          <Image className="w-11" src={home} alt="home" />
          <div className="">
            <h1 className="font-bold md:block hidden md:text-black text-[#2B9E76]">
              হাদিস সমূহ
            </h1>
            <h1 className="font-bold block md:hidden text-[25px] md:text-black text-[#2B9E76]">
              আল হাদিস
            </h1>
            <p className="text-[13px] md:block hidden">
              হাদিস পড়ুন শিখুন এবং জানুন
            </p>
          </div>
        </div>
        <div className="flex items-center  md:gap-20 gap-5">
          <div onClick={()=> setSettingOpen(true)} className="flex items-center gap-2 p-2 md:border-solid border-none md:bg-white bg-gray-100 border-2 rounded-[11px] border-gray-300">
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
            <Image src={hand} alt="hand" />
          </div>
          <div onClick={()=> setLeftSideBer(true)} className="p-2 md:hidden block rounded-[8px] bg-[#2B9E76] text-white ">
            <RiSettings2Fill className="text-[20px]" />
          </div>
        </div>
      </div>
      <div className={`${settingOpen? "h-[85vh] md:rounded-[15px] md:hidden bg-[#3d3d3d62] w-full  setting z-10":"settingHidden md:hidden  w-full z-10 flex items-center"}`}>
        <div className="w-[95%] m-auto p-4 border-none border-2 mt-[20%] rounded-[11px] bg-white border-gray-300  ">
          <input
            className="outline-none rounded-[11px] w-full py-3 px-2 bg-slate-100 mb-7"
            type="search"
            name=""
            placeholder="Search Hadith"
            id=""
          />
          <p className="mb-3">হাদিসের বই সিলেক্ট করুন</p>
          <select
            className="w-full outline-none border-solid border-[1px] border-gray-200 p-3 rounded-[11px] mb-7"
            name=""
            id=""
            placeholder="সকল বই"
          >
            <option>সহিহ বুখারী</option>
            <option>সহিহ মুসলিম</option>
            <option>সুনানে আন-নাসায়ী</option>
            <option>সুনানে আবু দাউদ</option>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <option>জামে' আত-তিরমিজি</option>
            <option>সুনানে ইবনে মাজাহ</option>
            <option>রিয়াদুস সলেহিন</option>
            <option>বুলুগুল মারাম</option>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <option>আল লু'লু ওয়াল মারজান</option>
          </select>
          <p className="mb-3">হাদিসের অধ্যায় সিলেক্ট করুন</p>
          <select
            className="w-full outline-none border-solid border-[1px] border-gray-200 p-3 rounded-[11px] mb-7"
            name=""
            id=""
          >
            <option className="outline-none">সকল অধ্যায়</option>
          </select>
          <div className="flex gap-6">
            <div>
              <input className="mr-3" type="radio" id="age1" name="age" value="30" />
              <label for="age1">আংশিক মিল</label>
            </div>
            <div>
              <input className="mr-3" type="radio" id="age1" name="age" value="30" />
              <label for="age1">হুবুহু মিল</label>

          </div>
            </div>
              <div className="flex gap-2 mt-4">
                <button onClick={()=> setSettingOpen(false)} className="w-[50%] bg-slate-300 py-2 rounded-[8px]">বাতিল</button>
                <button className="w-[50%] bg-[#2B9E76] text-white py-2 rounded-[8px]">সার্চ করুন</button>
              </div>
        </div>
     
      </div>
      <div className={`${leftSideBer? "h-[85vh] md:rounded-[15px] md:hidden bg-[#3d3d3d62] w-full  leftSide z-10":"leftSideHidden md:hidden  w-full z-10 flex items-center"}`}>
        <div className="m-auto w-[90%]">
      <div className="bg-white p-4 rounded-[11px]">
        <div className="flex justify-between items-center">
        <h1 className="text-center text-[22px]">সেটিংস</h1>
        <RxCross2  onClick={()=>setLeftSideBer(false)}/>
        </div>
        <p className="mt-7 mb-4">আরবি ফন্ট সিলেক্ট করুন</p>
        <select
          className="w-full outline-none border-solid border-[1px] border-gray-200 p-3 rounded-[11px] mb-7"
          name=""
          id=""
        >
          <option value="">KFGQ</option>
          <option value="">Me Quran</option>
          <option value="">Al Mushaf</option>
          <option value="">Amiri</option>
          <option value="">Arial</option>
        </select>
        <p>এরাবিক ফন্ট সাইজ</p>
        <div className="flex items-center gap-5 my-3">
          <input
            type="range"
            value={arValue}
            min="0"
            max="100"
            onChange={handleChange}
            className="slider"
            name=""
            id=""
          />
          <p>{arValue}</p>
        </div>
        <p>অনুবাদ ফন্ট সাইজ</p>
        <div className="flex items-center gap-5 my-3">
          <input
            type="range"
            value={bnValue}
            min="0"
            max="100"
            onChange={handelBnChange}
            className="slider"
            name=""
            id=""
          />
          <p>{bnValue}</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <div className="  rounded-[15px] p-4 text-white  bg-[#2B9E76] mt-5">
        <h1 className="text-center text-[30px] mb-4">
          আপনিও সদাকায়ে জারিয়াতে অংশ নিন
        </h1>
        <p>
          আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে।
          আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের
          প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র
          কাছে কবুল হবে।
        </p>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Navbar;
