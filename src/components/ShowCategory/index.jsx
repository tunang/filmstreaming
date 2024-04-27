
import { useParams } from "react-router-dom";
import Aside from "../aside/Aside";
import ShowCategory from "./ShowCategory";


const Index = () => {
    const param = useParams();

    return (
        <div className='absolute w-full grid grid-cols-2 md:grid-cols-5 gap-5 mt-32 px-12 z-1'>
            <Aside />
            
            <ShowCategory />
            
            
        </div>

    
);
}
 
export default Index;