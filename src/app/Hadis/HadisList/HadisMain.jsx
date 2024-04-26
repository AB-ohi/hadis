import React, { useEffect, useState } from 'react';

const HadisMain = () => {

    const [hadiths, setHadith] = useState([]);

    useEffect(()=>{
       fetch('http://localhost:5000/hadith')
       .then(res => res.json())
       .then(data => setHadith(data))
    },[])

    return (
        <div>
            {
                hadiths.map((hadith)=>
                <div
                key={hadith._id}
                >
                    <div className=''>

                    </div>
                    <div className=''>

                    </div>
                </div>)
            }
        </div>
    );
};

export default HadisMain;