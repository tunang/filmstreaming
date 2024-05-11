
import { useParams } from "react-router-dom";
import Aside from "../aside/Aside";
import ShowCategory from "./ShowCategory";


const Index = () => {
    const param = useParams();

    return (
        <>
            <ShowCategory />
        </>

    
);
}
 
export default Index;