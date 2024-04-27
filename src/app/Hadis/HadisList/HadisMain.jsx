import Image from "next/image";
import React, { useEffect, useState } from "react";
import book from "../../../../public/book (1).svg";
import icon from "../../../../public/ওহীর সূচনা অধ্যায় - সহিহ বুখারী _ iHadis.com - Google Chrome 4_27_2024 9_15_02 AM.png";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci"; 
import { IoShareSocialOutline } from "react-icons/io5"; 
import { MdOutlineReport } from "react-icons/md";
import { MdOutlineDirections } from "react-icons/md";

const HadisMain = () => {
  const [hadiths, setHadith] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/hadith")
      .then((res) => res.json())
      .then((data) => setHadith(data));
  }, []);

  return (
    <div className="w-full">
      {hadiths.map((hadith, index) => (
        <div key={hadith._id}>
          <div className=" w-full bg-white p-5 rounded-[15px]">
            <div className="flex items-center gap-3">
              <Image src={book} alt="img" />
              <p>{hadith.number}</p>
            </div>

            <p className="text-[15px]">{hadith.title}</p>
            {
                hadith.preface ? <div>
                    <div className="h-[1px] bg-slate-200 my-8"></div>
                    {hadith.preface}
                </div>
                :
                <div className="hidden">

                </div>
            }
          </div>
          <div className=" bg-white p-5 my-5 rounded-[15px]">
            <div className="flex items-center gap-2">
              <Image className="w-[26px]" src={icon} alt="img"/>
              <p className="text-[#2B9E76]">{hadith.id}</p>
            </div>
            <div className="">
              <h1 className="my-4 text-[26px] text-end">{hadith.ar}</h1>
              <h1 className="my-4 text-[#2B9E76]">{hadith.narrator} থেকে বর্ণিত:</h1>
              <h1 className="my-4">{hadith.bn}</h1>
            </div>
            <div className="flex justify-between items-center mt-7">
              <div className="flex items-center text-[12px] gap-3">
              <p>হাদিসের মান :</p>
              <button className="p-2 rounded-[8px] text-white font-bold bg-[#2B9E76]">সহিহ হাদিস</button>
              </div>
              <div className="flex items-center gap-6 text-[25px] text-gray-500">
              <IoCopyOutline />
              <CiBookmark />
              <IoShareSocialOutline />
              <MdOutlineReport />
              <MdOutlineDirections />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HadisMain;
