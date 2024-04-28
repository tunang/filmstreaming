import fetchItems from "../../services/ProductServices";
import CategoryFilmItem from "./CategoryFilmItem";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";


const CategoryFilms = () => {

    const { data: homePageFilms } = fetchItems('https://phimapi.com/v1/api/danh-sach/phim-le?limit=4&page=1');
    const categoriesUrl = 'https://phimapi.com/v1/api/danh-sach/';
    // console.log(homePageFilms.data.data.items);
    const categories = [
        { title: 'TV Series', api: 'phim-bo' },
        { title: 'Movies', api: 'phim-le' },
        { title: 'Cartoons', api: 'hoat-hinh' },
        { title: 'TV Shows', api: 'tv-shows' },
    ]

    console.log(homePageFilms)
    return (<>
        {categories.map((category) => {
            // {console.log(category.api)}
            return <>

                <CategoryFilmItem className="relative" title={category.title} api={category.api} />
            </> 
        })}        
    </>);
}

export default CategoryFilms;