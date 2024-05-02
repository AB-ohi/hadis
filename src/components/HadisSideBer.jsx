"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./style.css";
import "../app/globals.css";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const HadisSideBer = () => {
  const [activeTab, setActiveTab] = useState("chapters");
  const [sideBerOpen,setSideBerOpen] = useState(false)

  const [books, setBooks] = useState([]);
  const [chapters, setChapters] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://toy-marketplace-server-8o1xb7a8p-ab-ohi.vercel.app/allToy"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://toy-marketplace-server-8o1xb7a8p-ab-ohi.vercel.app/toys"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="md:w-1/5 w-[90%] m-5">
      <div className={`${ sideBerOpen? 'h-[85vh] md:rounded-[15px] bg-white md:block hadisSideBer w-full z-10': 'h-[85vh] md:rounded-[15px] bg-white md:block hadisSideBerHidden w-full z-10'}`}>
        <div className="flex justify-between py-6 px-4 md:hidden">
          <h1>ক্যাটাগরি</h1>
          <div onClick={()=>setSideBerOpen(false)}>
            <RxCross2 />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => handleTabClick("books")}
            className={
              activeTab === "books"
                ? "active bg-[#2B9E76] text-center w-1/2 py-3 text-white md:rounded-ss-[15px]"
                : "text-center w-1/2 "
            }
          >
            বই
          </button>

          <button
            onClick={() => handleTabClick("chapters")}
            className={
              activeTab === "chapters"
                ? "active bg-[#2B9E76] text-center w-1/2 py-3 text-white md:rounded-se-[15px]"
                : "text-center w-1/2 "
            }
          >
            অধ্যায়
          </button>
        </div>
        <div className="h-[1px] bg-[#F2F4F6]"></div>
        <div className="flex items-center bg-[#F2F4F6] p-3 mx-4 mt-6 rounded-[11px]">
          <CiSearch className="text-xl" />
          <input
            className="bg-[#F2F4F6] outline-none w-full"
            type="search"
            name=""
            placeholder="Search For Filter"
            id=""
          />
        </div>
        <div>
          {activeTab === "books" && (
            <div className="mt-6">
              {books.map((book) => (
                <button
                  key={book._id}
                  className="flex items-center rounded-[11px] w-[90%] bg-slate-100 mx-auto p-4"
                >
                  <div className="">
                    <p className="hexagon">B</p>
                  </div>
                  <div>
                    <h1>{book.title}</h1>
                    <p>সর্বমোট হাদিস -{book.number_of_hadis}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
          {activeTab === "chapters" && (
            <div className="mt-6">
              {chapters.map((chapter, index) => (
                <div
                  className="flex items-center rounded-[11px] w-[90%] bg-slate-100 mx-auto p-4 "
                  key={chapter._id}
                >
                  <div className="">
                    <p className="hexagon">{index + 1}</p>
                  </div>
                  <div>
                    <h1 className="text-[17px] mb-2">{chapter.title}</h1>
                    <p className="text-[12px] text-slate-400">
                      হাদিসের রেঞ্জ:{chapter.hadis_range}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div onClick={()=>setSideBerOpen(true)} className="bg-white md:hidden flex items-center rounded-[11px] px-3 py-5 gap-3">
        <div className="text-[25px]">
          <RxHamburgerMenu />
        </div>
        <h1>সহিহ বুখারী</h1>
      </div>
    </div>
  );
};

export default HadisSideBer;
