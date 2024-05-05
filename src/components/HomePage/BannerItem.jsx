import { useState } from "react";

import { CiPlay1 } from "react-icons/ci";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BannerItems = ({films}) => {
    const navigate =useNavigate();

    const [index, setIndex] = useState(3);

    const handleLeft = (event) => {
        if(event && event.stopPropagation){
            event.stopPropagation(); 
        }
        setIndex(index - 1);
    }

    const handleRight = (event) => {
        if(event && event.stopPropagation){
            event.stopPropagation(); 
        }
        setIndex(index + 1);
    }

    const handleClick = (id, slug) => {
        navigate(`/play/${id}/${slug}`)
    }
    return (

    <div onClick={() => handleClick(films.data.items[index]._id, films.data.items[index].slug)}>
        <img className="relative w-full h-[250px] md:h-[480px] object-cover rounded-lg" src={films.data.items[index].thumb_url} alt="" loading="lazy"/>
        <h1 className="absolute top-[38%] left-[5%] text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1)]">{films.data.items[index].origin_name}</h1>
        <p className="absolute text-quinary top-[30%] left-[5%] w-fit px-1 rounded bg-tertiary">{films.data.items[index].year}</p>
        <div className="hidden md:absolute items-center w-64 h-[64px] bottom-[10%] left-[5%] bg-quinary rounded-full cursor-pointer">
            <CiPlay1 className="text-white bg-quaternary h-[77px] w-[77px] rounded-full p-5" />
            <h4 className="text-black ml-2">Watch now</h4>
        </div>
        <FaChevronLeft onClick={(e) => handleLeft(e)} className="absolute h-[250px] md:h-[480px] left-3 top-0 text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1)" />
        <FaChevronRight onClick={(e) => handleRight(e)} className="absolute h-[250px] md:h-[480px] top-0 right-3 text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1)" />
    </div>
    );
}

export default BannerItems;