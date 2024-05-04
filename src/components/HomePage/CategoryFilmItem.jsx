import fetchItems from "../../services/ProductServices";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const CategoryFilmItem = ({title, api, action}) => {
    const navigate = useNavigate();

    const { data: films } = fetchItems(`https://phimapi.com/v1/api/danh-sach/${api}?limit=12&page=2`);
    

    const handleClick = (id, slug) => {
        navigate(`/play/${id}/${slug}`)
    }

    console.log(api);
    return (<>
        <div className="flex justify-between items-end col-start-2 col-end-6 text-quinary pb-4 border-b-2 border-quinary">
            <h1 onClick={action} className="cursor-pointer">{title}</h1>
            <p onClick={action} className="px-2 py-1 border-2 border-quinary hover:bg-secondary hover:text-quinary cursor-pointer">View all</p>
        </div>
        
        <div className="flex h-[600px] overflow-x-auto gap-5 mt-8 loading">
            {films && films.data && films.data.data && films.data.data.items.map((item, index) => {
                return <div onClick={() => handleClick(item._id, item.slug)} className="min-w-[25%] relative pb-20 bg-quaternary rounded overflow-hidden "> 
                    <img className="w-full h-full overflow-hidden object-cover rounded-t-[4px]" src={`https://img.phimapi.com/${item.poster_url}`} alt="" loading="lazy" />
                    <p className="absolute px-4 py-2 w-full text-white text-xl font-normal whitespace-nowrap overflow-hidden text-ellipsis">{item.origin_name}</p>
                    <p className="absolute text-quinary top-[5%] left-[5%] w-fit px-2 rounded bg-tertiary">{item.year}</p>
                    <p className="absolute text-[12px] text-black top-[10%] left-[5%] w-fit px-2 rounded bg-quinary">{item.quality}</p>
                </div>
            })}

        </div>
    
        
    </>);
}

export default CategoryFilmItem;