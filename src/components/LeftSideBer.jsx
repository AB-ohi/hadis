import React from "react";
import img from "../../public/27832.jpg";
import Image from "next/image";
const LeftSideBer = () => {
  return (
    <div className=" h-[85vh] md:block hidden md:w-1/5 w-[90%]">
        <div className="bg-white p-4">
            <h1 className="text-center text-[22px]">সেটিংস</h1>
            <p className="mt-7 mb-4">আরবি ফন্ট সিলেক্ট করুন</p>
            <select className="w-full outline-none border-solid border-[1px] border-gray-200 p-3 rounded-[11px] mb-7" name="" id="">
                <option value="">KFGQ</option>
                <option value="">Me Quran</option>
                <option value="">Al Mushaf</option>
                <option value="">Amiri</option>
                <option value="">Arial</option>
            </select>
            <p>এরাবিক ফন্ট সাইজ</p>
            <p>অনুবাদ ফন্ট সাইজ</p>
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
  );
};

export default LeftSideBer;
