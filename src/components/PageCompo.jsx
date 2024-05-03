import Link from 'next/link';
import React from 'react';

const PageCompo = () => {
    return (
        <div>
            <Link className='bg-[#2B9E76]  text-white' href='/Hadis/HadisList'>Go to hadis page</Link>
        </div>
    );
};

export default PageCompo;