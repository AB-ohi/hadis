'use client'
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';
import HadisHeading from './HadisHeading';
import HadisName from './HadisName';
import HadisMain from './HadisMain';


const HadisList = () => {
    
  const [chapters, setChapters] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/chapter')
        .then(res=> res.json())
        .then(data => setChapters(data))
       },[])
    
     
    return (
        <div className=' h-[85vh] rounded-[15px] overflow-auto  w-1/2 m-5'>
            <HadisHeading/>
            <HadisName/>
            <HadisMain/>
        </div>
    );
};

export default HadisList;