import { useEffect, useState } from "react";

import { CiPlay1 } from "react-icons/ci";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


// https://github.com/tailwindlabs/tailwindcss/discussions/12046

const BannerItems = ({ films }) => {
    const navigate = useNavigate();

    const [Index, setIndex] = useState(0);
    

    const handleClick = (id, slug) => {
        navigate(`/play/${id}/${slug}`)
    }

    function handleRight(event) {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }

        if(Index === films.data.items.length - 1){
            setIndex(0);
        }
        else{
            setIndex(Index + 1);
        }

        
    }

    function handleLeft(event) {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }

        if(Index === 0){
            setIndex(films.data.items.length - 1);
        }
        else{
            setIndex(Index - 1);
        }
    }

    // console.log(Index)
    // console.log(films.data.items)

    return (
        <div className="w-full h-full">
            <div className={`flex w-full h-full overflow-hidden`}>
                {films.data.items.map((film, index) => {
                    return <div  className={`block transform w-full h-full shrink-0 grow-0 transition duration-500`} style={{ transform: `translateX(${-Index * 100}%)` }} onClick={() => handleClick(film._id, film.slug)}>
                                <img className="relative w-full h-[250px] md:h-[480px] object-cover rounded-lg " src={film.thumb_url} alt="" loading="lazy" />
                                <h1 className="absolute text-white top-[30%] drop-shadow-[0px_0px_15px_rgba(0,0,0,1)] ml-[7%]">{film.origin_name}</h1>
                                <p className="absolute text-quinary top-[25%] w-fit px-1 rounded bg-tertiary ml-[7%]">{film.year}</p>
                                <div className="hidden md:absolute md:flex items-center w-64 h-[64px] bottom-[10%] bg-quinary rounded-full ml-[5%] cursor-pointer">
                                    <CiPlay1 className="text-white bg-quaternary h-[77px] w-[77px] rounded-full p-5" />
                                    <h4 className="text-black ml-2">Watch now</h4>
                                </div>
                            </div>
                })}
            </div>
                <FaChevronLeft onClick={(e) => handleLeft(e)} className="absolute h-[250px] md:h-[480px] left-0 top-0 w-8 text-white bg-gradient-to-r from-primary drop-shadow-[0px_0px_15px_rgba(0,0,0,1) pl-2 cursor-pointer" />
                <FaChevronRight onClick={(e) => handleRight(e)} className="absolute h-[250px] md:h-[480px] top-0 right-0 w-8 text-white bg-gradient-to-l from-primary drop-shadow-[0px_0px_15px_rgba(0,0,0,1) pr-2 cursor-pointer" />
        </div>

    );
}

export default BannerItems;