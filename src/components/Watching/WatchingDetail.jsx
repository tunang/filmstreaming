import { TiDelete } from "react-icons/ti";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../../services/axios/customAxiosWithHeader";
import { deleteFavoriteFilm, getFavoriteList } from "../../services/FavoriteFilmsServices";
import { deleteWatchingFilm, getWatchingList } from "../../services/WatchingFilmsServices";



const WatchingDetails = ({title}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(5);

    const [films, setFilms] = useState([]);


    const fetchFilms = async () => {
        setFilms([]);
        setLoading(true);
        const data = await getWatchingList();
        // console.log(data);
        setFilms(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchFilms();
    }, [])

    const handleClick = (id, slug) => {
        navigate(`/play/${id}/${slug}`)
    }

    const handleDeleteButton = async (film, event) => {
        if(event && event.stopPropagation){
            event.stopPropagation(); 
        }
        await deleteWatchingFilm(film);
        window.location.reload();
    }

    // films && console.log(films?.data?.favoriteFilmsList?.favoriteFilms);

    return (<>
        <h1 className="col-start-1 md:col-start-2 col-end-5 md:col-end-6 text-quinary pb-4 border-b-2 border-quinary">{title}</h1>
        <div className="col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {films?.data?.watchingFilmsList?.watchingFilms.map((item, index) => {
                return <div key={index} onClick={() => handleClick(item._id, item.slug)} className={`relative h-[220px] md:h-[300px] lg:h-[600px] pb-10 lg:pb-20 bg-quaternary rounded ${loading ? 'animate-pulse' : ''}`}>
                    <img className="w-full h-full overflow-hidden object-cover rounded-t-[4px]" src={`https://img.phimapi.com/${item.poster_url}`} key={item._id} alt="" />
                    <p className="absolute px-4 py-2 w-full text-white md:text-xl font-normal whitespace-nowrap overflow-hidden text-ellipsis">{item.origin_name}</p>
                    <p className="absolute text-quinary top-[5%] left-[5%] w-fit px-2 rounded bg-tertiary">{item.year}</p>
                    <p className="absolute text-[12px] text-black top-[10%] left-[5%] w-fit px-2 rounded bg-quinary">{item.quality}</p>
                    <TiDelete  onClick={(e) => {handleDeleteButton(item, e)}} className="absolute bg-quinary text-red-800 top-[5%] right-[5%] w-fit h-8 rounded cursor-pointer "/>

                </div>
            })}
        </div>
    </>);
}
 
export default WatchingDetails;