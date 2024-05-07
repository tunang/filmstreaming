import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "../ShowCategory/Pagination";

import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";


const SearchFilmsDetail = ({title, api}) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(5);
    
    const [films, setFilms] = useState([]);

    const fetchFilms = async () => {
        setFilms([]);
        setLoading(true);
        const data = await axios.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${api}&page=${currentPage}`);
        setFilms(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchFilms();
    },[api])

    const handleClick = (id, slug) => {
        navigate(`/play/${id}/${slug}`)
    }

    console.log(films)
    return (<>
        <h1 className="col-start-1 md:col-start-2 col-end-5 md:col-end-6 text-quinary pb-4 border-b-2 border-quinary">Result for: {title}</h1>
        <div className="col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {films 
            && films.data 
            && films.data.data 
            && films.data.data.items.map((item, index) => {
                return <div onClick={() => handleClick(item._id, item.slug)} className="relative h-[220px] md:h-[300px] lg:h-[600px] pb-10 lg:pb-20 bg-quaternary rounded"> 
                    <img className="w-full h-full overflow-hidden object-cover rounded-t-[4px]" src={`https://img.phimapi.com/${item.poster_url}`} key={item._id} alt="" loading="lazy" />
                    <p className="absolute px-4 py-2 w-full text-white lg:text-xl font-normal whitespace-nowrap overflow-hidden text-ellipsis">{item.origin_name}</p>
                    <p className="absolute text-quinary top-[5%] left-[5%] w-fit px-2 rounded bg-tertiary">{item.year}</p>
                    <p className="absolute text-[12px] text-black top-[10%] left-[5%] w-fit px-2 rounded bg-quinary">{item.quality}</p>
                </div>
            })}
            
        </div>

        {films 
        && films.data 
        && films.data.data 
        && films.data.data.items.length === 0 ? <p className="text-quinary">No result</p> : ''
        }

        {loading ? <p className="text-quinary"><AiOutlineLoading3Quarters className="inline-block animate-spin mr-5" />Loading... Please wait</p> : '' }
        {/* {films.data.data.items.length === 0 ? <p className="text-quinary">No Result</p> : '' } */}
    </>);
}
 
export default SearchFilmsDetail;