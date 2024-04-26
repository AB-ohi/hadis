'use client'
import React, { useEffect, useState } from "react";

const HadisSideBer = () => {
  const [activeTab, setActiveTab] = useState("chapters");

  const [books, setBooks] = useState([])


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(()=>{
    fetch()
  },[])
  return (
    <div className=" h-[85vh] rounded-[15px] bg-white  w-1/5 m-5">
      <div className="flex justify-between">
        <button onClick={()=>  handleTabClick("books")} className= {activeTab === "books" ? "active bg-[#2B9E76] text-center w-1/2 py-3 text-white rounded-ss-[15px]" : "text-center w-1/2 "}>বই</button>

        <button onClick={() => handleTabClick("chapters")} className={activeTab === "chapters" ? "active bg-[#2B9E76] text-center w-1/2 py-3 text-white rounded-se-[15px]" : "text-center w-1/2 "}>অধ্যায়</button>
      </div>
      <div className="h-[1px] bg-slate-100"></div>
      <div>
        {activeTab === "books" && (
          <div>
            {/* Render Books section */}
            <h2>Books Section</h2>
            {/* Add your books content here */}
          </div>
        )}
        {activeTab === "chapters" && (
          <div>
            {/* Render Chapters section */}
            <h2>Chapters Section</h2>
            {/* Add your chapters content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default HadisSideBer;
