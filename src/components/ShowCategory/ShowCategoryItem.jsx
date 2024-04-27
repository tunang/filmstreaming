import { useState } from "react";
import fetchItems from "../../services/ProductServices";

const ShowCategoryItem = ({title, api}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data: films } = fetchItems(`https://phimapi.com/v1/api/danh-sach/${api}?limit=12&page=${currentPage}`);
    
    
    console.log(films);
    return (<>
        <h1 className="col-start-1 md:col-start-2 col-end-3 md:col-end-6 text-quinary pb-4 border-b-2 border-quinary">{title}</h1>
        
        {films && films.data && films.data.data && films.data.data.items.map((item, index) => {
            return <div className="relative pb-20 bg-quaternary rounded"> 
                <img className="w-full h-full overflow-hidden object-cover rounded-t-[4px]" src={`https://img.phimapi.com/${item.poster_url}`} alt="" />
                <p className="absolute px-4 py-2 w-full text-white text-xl font-normal whitespace-nowrap overflow-hidden text-ellipsis">{item.origin_name}</p>
                <p className="absolute text-quinary top-[5%] left-[5%] w-fit px-2 rounded bg-tertiary">{item.year}</p>
                <p className="absolute text-[12px] text-black top-[10%] left-[5%] w-fit px-2 rounded bg-quinary">{item.quality}</p>
            </div>
        })}

<h1 className="text-white">Pagination</h1>
    
        
    </>);
}
 
export default ShowCategoryItem;