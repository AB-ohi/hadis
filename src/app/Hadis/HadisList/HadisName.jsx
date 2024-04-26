"use client"
import React, { useEffect, useState } from 'react';

const HadisName = () => {

    const [chapters, setChapters] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chapter')
        .then(res=> res.json())
        .then(data => setChapters(data))
       },[])
    return (
        <div className='w-full bg-white rounded-[11px] p-5 my-5'>
            {
                chapters.map((chapter)=>
                <div
                key={chapter._id}
                className='flex gap-5 items-center'
                >
                    <p className='px-[20px] py-[15px] rounded-[11px] bg-[#2B9E76] text-white'>{chapter.chapter_id}</p>
                    <h1>{chapter.title}</h1>
                </div>)
            }
        </div>
    );
};

export default HadisName;