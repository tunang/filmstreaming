import { useParams } from "react-router-dom";
import { useState } from "react";
import fetchItems from "../../services/ProductServices";
import Iframe from 'react-iframe'
import EpsList from "./EpsList";
import Aside from "../aside/Aside";

const WatchPage = () => {
    const { id } = useParams();
    const { slug } = useParams();
    

    const [currentEp, setCurrentEp] = useState(0);
    const { data } = fetchItems(`https://phimapi.com/phim/${slug}`)

    const handleSetCurrentEp = (number) => {
        console.log(number);
        setCurrentEp(number);
    }

    // console.log(data.data.episodes[0].server_data[currentEp].link_embed);
    return (
    <div className="absolute w-full grid grid-cols-8 mt-32 px-4 md:px-12">
        {data && data.data && data.data.movie && data.data.episodes[0] &&
        <>
            <h2 className="text-white col-span-8 mb-5">{data.data.movie.origin_name} - EP{currentEp + 1}</h2> 
            <Iframe className='w-full h-[500px] col-span-8 md:col-span-5' url={data.data.episodes[0].server_data[currentEp].link_embed}
            allowFullScreen/>     
            <EpsList eps={data} currentEp={currentEp} handleSetCurrentEp={handleSetCurrentEp}/>
        </>
        }
    </div>
    );
}

export default WatchPage;