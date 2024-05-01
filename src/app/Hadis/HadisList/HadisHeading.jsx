'use client'
import React, { useEffect, useState } from 'react';
import { ImBooks } from "react-icons/im";
const HadisHeading = () => {
    
  const [books, setBooks] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("https://toy-marketplace-server-8o1xb7a8p-ab-ohi.vercel.app/toys");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);
    return (
        <div className='md:block hidden'>
            {
                books.map((book)=>
                <div className='flex items-center p-5 bg-white rounded-[15px] w-[100%]' key={book._id}>
                    <div className='text-4xl m-auto w-[5%] text-[#2B9E76]'>
                    <ImBooks/>
                    </div>
                    <div className='flex w-[95%] justify-between items-center'>
                        
                        <div>
                            <h1 className='text-[22px]'>{book.title}</h1>
                            <p className='text-[12px]'>সর্বমোট হাদিস - {book.number_of_hadis}</p>
                        </div>
                        <h1 className='text-[30px] font-bold'>{book.title_ar}</h1>
                    </div>
                </div>)
            }
        </div>
    );
};

export default HadisHeading;