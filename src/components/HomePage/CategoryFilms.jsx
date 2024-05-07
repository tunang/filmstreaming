import fetchItems from "../../services/ProductServices";
import CategoryFilmItem from "./CategoryFilmItem";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const CategoryFilms = () => {

    const navigate = useNavigate();

    const { data: homePageFilms } = fetchItems('https://phimapi.com/v1/api/danh-sach/phim-le?limit=4&page=1');
    const categoriesUrl = 'https://phimapi.com/v1/api/danh-sach/';
    // console.log(homePageFilms.data.data.items);
    const categories = [
        { title: 'TV Series', api: 'phim-bo',action: () => {navigate('/tv_series')} },
        { title: 'Movies', api: 'phim-le', action: () => {navigate('/movies')} },
        { title: 'Cartoons', api: 'hoat-hinh', action: () => {navigate('/cartoons')} },
        { title: 'TV Shows', api: 'tv-shows', action: () => {navigate('/tv_shows')} },
    ]

    console.log(homePageFilms)
    return (<>
        {categories.map((category) => {
            // {console.log(category.api)}
            return <div className="relative col-span-4 md:col-span-3 lg:col-span-4 scrollbar-thumb-sky-700 scrollbar-track-sky-300">
                
                    <CategoryFilmItem className="relative" title={category.title} api={category.api} action={category.action} />
                    <FaChevronLeft onClick={(e) => handleLeft(e)} className="hidden md:block absolute h-[48px] w-[48px] top-[50%]  left-3 p-2  bg-secondary text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1) cursor-pointer rounded-full" />
                    <FaChevronRight onClick={(e) => handleRight(e)} className="hidden md:block absolute h-[48px]  w-[48px] top-[50%] right-3 p-2 bg-secondary text-white drop-shadow-[0px_0px_15px_rgba(0,0,0,1) cursor-pointer rounded-full" />  
            </div> 
        })}        
    </>);
}

export default CategoryFilms;