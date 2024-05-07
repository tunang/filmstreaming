import { useEffect, useState } from "react";
import fetchItems from "../../services/ProductServices";
import { Link, useAsyncError, useFetcher, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import 'react-toastify/dist/ReactToastify.css';
import { FaRegHeart } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import { handleFavButtonRedux } from "../../redux/action/favoriteAction";

const ShowCategoryItem = ({title, api}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(5);
    
    const [films, setFilms] = useState([]);


    const fetchFilms = async () => {
        setFilms([]);
        setLoading(true);
        const data = await axios.get(`https://phimapi.com/v1/api/danh-sach/${api}?limit=12&page=${currentPage}`);
        setFilms(data);
        setLoading(false);
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
    // src={`https://img.phimapi.com/${item.poster_url}`}
    return (<>
        <h1 className="col-start-1 md:col-start-2 col-end-5 md:col-end-6 text-quinary pb-4 border-b-2 border-quinary">{title}</h1>
        <div className={`col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 `}>
            {films && films.data && films.data.data && films.data.data.items.map((item, index) => {
                return <div onClick={() => handleClick(item._id, item.slug)} className={`relative h-[220px] md:h-[300px] lg:h-[600px] pb-10 lg:pb-20 bg-quaternary rounded ${loading ? 'animate-pulse' : ''}`}> 
                    <img className={`w-full h-full overflow-hidden object-cover rounded-t-[4px]`} src={`https://img.phimapi.com/${item.poster_url}`} key={item._id} alt="" loading="lazy"/>
                    <p className="absolute px-4 py-2 w-full text-white lg:text-xl font-normal whitespace-nowrap overflow-hidden text-ellipsis">{item.origin_name}</p>
                    <p className="absolute text-quinary top-[5%] left-[5%] w-fit px-2 rounded bg-tertiary">{item.year}</p>
                    <p className="absolute text-[12px] text-black top-[13%] md:top-[11.5%] lg:top-[10%] left-[5%] w-fit px-2 rounded bg-quinary">{item.quality}</p>
                    <FaRegHeart onClick={(e) => {handleHeartButton(item,e )}} className="absolute text-quinary top-[5%] right-[5%] w-fit h-9 px-2 rounded cursor-pointer"/>
                </div>
            })}
        </div>

        
            <div className="col-span-4">
                {
                films
                && films.data
                && films.data.data
                && films.data.data.params    
                && <Pagination currentPage={currentPage} totalPage={films.data.data.params.totalPages} paginate={paginate} handleDecreaseClick={handleDecreaseClick} handleIncreaseClick={handleIncreaseClick}/>
                }

            </div>
            {loading ? <p className="col-span-5 text-quinary"><AiOutlineLoading3Quarters className="inline-block animate-spin mr-5" />Loading... Please wait</p> : '' }
        
    
        
    </>);
}
 
export default ShowCategoryItem;