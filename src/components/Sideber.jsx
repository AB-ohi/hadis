
import home from '../../public/home.svg'
import book from '../../public/book.svg'
import subject from '../../public/subject.svg'
import bookmark from '../../public/bookmark.svg'
import others from '../../public/others.svg'
import goto from '../../public/goto.svg'
import Image from 'next/image';

const SideList = () => {
    const SideLists = [
        {
            img : home
        },
        {
            img :book
        },
        {
            img :subject
        },
        {
            img : bookmark
        },
        {
            img : others
        },
        {
            img : goto
        },
    ]
    return (
        <div className='my-auto md:overflow-hidden overflow-y-scroll w-24 flex items-center justify-center gap-10 flex-col'>
            {
                SideLists.map((SideList, index)=>
                <div  className='hover:bg-[#2B9E76] transition-[0.8s] hover:rounded-[10px] p-4' key={index}>
                    <Image src={SideList.img} alt=''/>
                </div>)
            }
        </div>
    );
};

export default SideList;