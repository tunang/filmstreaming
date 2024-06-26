import { useEffect, useRef } from "react";
import fetchItems from "../../services/ProductServices";
import CategoryFilmItem from "./CategoryFilmItem";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const CategoryFilms = () => {

    const navigate = useNavigate();
    const inputElement = useRef();

    const { data: homePageFilms } = fetchItems('https://phimapi.com/v1/api/danh-sach/phim-le?limit=4&page=1');
    const categories = [
        { title: 'TV Series', api: 'phim-bo',action: () => {navigate('/tv_series')} },
        { title: 'Movies', api: 'phim-le', action: () => {navigate('/movies')} },
        { title: 'Cartoons', api: 'hoat-hinh', action: () => {navigate('/cartoons')} },
        { title: 'TV Shows', api: 'tv-shows', action: () => {navigate('/tv_shows')} },
    ]

    return (<>
        {categories.map((category) => {
            // {console.log(category.api)}
            return <div className="relative col-span-4 md:col-span-3 lg:col-span-4 scrollbar-thumb-sky-700 scrollbar-track-sky-300">
                    <CategoryFilmItem  className="relative" title={category.title} api={category.api} action={category.action} />
            </div> 
        })}        
    </>);
}

export default CategoryFilms;