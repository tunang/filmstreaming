import Aside from "../aside/Aside";
import ShowCategoryItem from "./ShowCategoryItem";
import fetchItems from "../../services/ProductServices";
import { useLocation } from "react-router-dom";


const ShowCategory = () => {
    const { data: categoryFilms } = fetchItems('https://phimapi.com/v1/api/danh-sach/phim-le?limit=4&page=1');
    const categoriesUrl = 'https://phimapi.com/v1/api/danh-sach/';
    const location = useLocation();
    // console.log(categoryFilms.data.data.items);
    const categories = [
        { title: 'Movies', api: 'phim-le', location:'/movies'},
        { title: 'Cartoons', api: 'hoat-hinh', location:'/cartoons' },
        { title: 'TV Shows', api: 'tv-shows', location:'/tv_shows' },
        { title: 'TV Series', api: 'phim-bo', location:'/tv_series' },
    ]

    console.log(location)
    return (<>
        {categories.map((category) => {
            if(location.pathname.includes(category.location)){
                return <>
                    <ShowCategoryItem className="" title={category.title} api={category.api} />
                </> 
            }
        })}        
    </>);
}

export default ShowCategory;