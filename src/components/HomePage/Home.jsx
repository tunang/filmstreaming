import Aside from "../aside/Aside";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Movies from "../ShowCategory/ShowCategory";
import fetchItems from "../../services/ProductServices";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Banner from "./Banner";
import CategoryFilms from "./CategoryFilms";
// https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1

const Home = () => {

    const {data: homePageFilms} = fetchItems('https://phimapi.com/v1/api/danh-sach/phim-le?limit=4');
    const categoriesUrl = 'https://phimapi.com/v1/api/danh-sach/';
    const categories = [
        {title: 'Movies', api:'phim-le' },
        {title: 'Cartoons', api:'hoat-hinh' },
        {title: 'TV Shows', api:'tv-shows' },
    ]
    
    return (
            <div className='absolute w-full grid grid-cols-5 gap-5 mt-32 px-12 z-1'>
                <Aside />
                
                <div className="relative col-span-4 transition-all">
                      <Banner />
                </div>
                

                <CategoryFilms />
                
                
            </div>

        
    );
}

export default Home;