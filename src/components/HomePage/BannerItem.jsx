import { useState } from "react";

import { CiPlay1 } from "react-icons/ci";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const BannerItems = ({films}) => {
    const [index, setIndex] = useState(3);

    const handleLeft = () => {
        setIndex(index - 1);
    }

    const handleRight = () => {
        setIndex(index + 1);
    }
    return (

    <>
        <img className="relative w-full h-[480px] object-cover rounded-lg" src={films.data.items[index].thumb_url} alt="" />
        <h1 className="absolute top-[38%] left-[5%] text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1)]">{films.data.items[index].origin_name}</h1>
        <p className="absolute text-quinary top-[50%] left-[5%] w-fit px-1 rounded bg-tertiary">{films.data.items[index].year}</p>
        <div className="absolute flex items-center w-64 h-[64px] bottom-[10%] left-[5%] bg-quinary rounded-full">
            <CiPlay1 className="text-white bg-quaternary h-[77px] w-[77px] rounded-full p-5" />
            <h4 className="text-black ml-2">Watch now</h4>
        </div>
        <FaChevronLeft onClick={() => handleLeft()} className="absolute h-[480px] left-3 top-0 text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1)" />
        <FaChevronRight onClick={() => handleRight()} className="absolute h-[480px] top-0 right-3 text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1)" />
    </>
    );
}

export default BannerItems;