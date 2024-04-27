
import HadisHeading from './HadisHeading';
import HadisName from './HadisName';
import HadisMain from './HadisMain';


const HadisList = () => {
    

    return (
        <div className=' h-[85vh] rounded-[15px] overflow-auto  w-1/2 m-5'>
            <HadisHeading/>
            <HadisName/>
            <HadisMain/>
        </div>
    );
};

export default HadisList;