import React, { Children } from 'react';
import HadisList from './HadisList/page';
import SideList from '@/components/Sideber';
import HadisSideBer from '@/components/HadisSideBer';
import Navbar from '@/components/Navbar';
import LeftSideBer from '@/components/LeftSideBer';

const layout = ({children}) => {
    return (
        <div className='md:h-[90vh] h-full flex md:flex-row flex-col md:justify-between items-center w-full bg-slate-100 rounded-ss-[15px] md:mt-0  mt-7'>
           <HadisSideBer/>
           {children}
           <LeftSideBer/>
        </div>
    );
};

export default layout;