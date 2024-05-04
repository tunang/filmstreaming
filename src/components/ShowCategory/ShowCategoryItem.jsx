import { useEffect, useState } from "react";
import fetchItems from "../../services/ProductServices";
import { Link, useFetcher, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { handleFavButtonRedux } from "../../redux/action/favoriteAction";

const ShowCategoryItem = ({title, api}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(5);
    
    const [films, setFilms] = useState([]);


    const fetchFilms = async () => {
        const data = await axios.get(`https://phimapi.com/v1/api/danh-sach/${api}?limit=12&page=${currentPage}`);
        setFilms(data);
    }
    
    useEffect( () => {
        fetchFilms();
    },[currentPage])


    const handleClick = (id, slug) => {
        navigate(`/play/${id}/${slug}`)
    }

    const handleIncreaseClick = () => {
        setCurrentPage(currentPage + 1);
    }

    const handleDecreaseClick = () => {
        if(currentPage === 1){
            toast.error('Cant decrease');
            return;
        }
        setCurrentPage(currentPage - 1);
    }

    const handleHeartButton = (film, event) => {
        if(event && event.stopPropagation){
            event.stopPropagation(); 
        }
        dispatch(handleFavButtonRedux(film));
    }
    

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (<>
        <h1 className="col-start-1 md:col-start-2 col-end-3 md:col-end-6 text-quinary pb-4 border-b-2 border-quinary">{title}</h1>
        
        {films && films.data && films.data.data && films.data.data.items.map((item, index) => {
            return <div onClick={() => handleClick(item._id, item.slug)} className="relative pb-20 bg-quaternary rounded"> 
                <img className="w-full h-full overflow-hidden object-cover rounded-t-[4px]" src={`https://img.phimapi.com/${item.poster_url}`} key={item._id} alt="" loading="lazy"/>
                <p className="absolute px-4 py-2 w-full text-white md:text-xl font-normal whitespace-nowrap overflow-hidden text-ellipsis">{item.origin_name}</p>
                <p className="absolute text-quinary top-[5%] left-[5%] w-fit px-2 rounded bg-tertiary">{item.year}</p>
                <p className="absolute text-[12px] text-black top-[10%] left-[5%] w-fit px-2 rounded bg-quinary">{item.quality}</p>
                <FaRegHeart onClick={(e) => {handleHeartButton(item,e )}} className="absolute text-quinary top-[5%] right-[5%] w-fit h-9 px-2 rounded cursor-pointer"/>

            </div>
        })}

        <div className="col-span-4">
            {
            films
            && films.data
            && films.data.data
            && films.data.data.params    
            && <Pagination currentPage={currentPage} totalPage={films.data.data.params.totalPages} paginate={paginate} handleDecreaseClick={handleDecreaseClick} handleIncreaseClick={handleIncreaseClick}/>
            }

        </div>
    
        
    </>);
}
 
export default ShowCategoryItem;