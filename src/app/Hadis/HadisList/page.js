
import HadisHeading from './HadisHeading';
import HadisName from './HadisName';
import HadisMain from './HadisMain';


const HadisList = () => {
    

    return (
        <div className=' h-[85vh] rounded-[15px] overflow-auto  md:w-2/3 w-[90%] m-5'>
            <HadisHeading/>
            <HadisName/>
            <HadisMain/>
        </div>
    );
};

export default HadisList;