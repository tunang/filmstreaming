import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import fetchItems from "../../services/ProductServices";
import BannerItems from "./BannerItem";
const Banner = () => {
    const {data: bannerFilms, loading, error} = fetchItems('https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1');
    
    return ( 
    <div className="relative col-span-4 min-h-[250px] md:min-h-[480px] loading">    
         { bannerFilms && bannerFilms.data && <BannerItems films = {bannerFilms}/>}
    </div> 
    );
}
 
export default Banner;