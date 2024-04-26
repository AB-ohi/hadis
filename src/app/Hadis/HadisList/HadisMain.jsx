import Image from "next/image";
import React, { useEffect, useState } from "react";
import book from "../../../../public/book (1).svg";

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
          <div className="">{index}</div>
        </div>
      ))}
    </div>
  );
};

export default HadisMain;
