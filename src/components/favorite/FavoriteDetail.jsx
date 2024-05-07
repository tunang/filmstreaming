import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleFavButtonRedux } from "../../redux/action/favoriteAction";

const FavoriteDetails = ({title, data}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (id, slug) => {
        navigate(`/play/${id}/${slug}`)
    }

    const handleDeleteButton = (film, event) => {
        if(event && event.stopPropagation){
            event.stopPropagation(); 
        }
        dispatch(handleFavButtonRedux(film));
    }

    return (<>
        <h1 className="col-start-1 md:col-start-2 col-end-5 md:col-end-6 text-quinary pb-4 border-b-2 border-quinary">{title}</h1>
        <div className="col-span-4 grid grid-cols-2 md:grid-cols-4 gap-5 ">
            {data.map((item, index) => {
                return <div onClick={() => handleClick(item._id, item.slug)} className="relative pb-10 lg:pb-20 bg-quaternary rounded">
                    <img className="w-full h-full overflow-hidden object-cover rounded-t-[4px]" src={`https://img.phimapi.com/${item.poster_url}`} key={item._id} alt="" />
                    <p className="absolute px-4 py-2 w-full text-white md:text-xl font-normal whitespace-nowrap overflow-hidden text-ellipsis">{item.origin_name}</p>
                    <p className="absolute text-quinary top-[5%] left-[5%] w-fit px-2 rounded bg-tertiary">{item.year}</p>
                    <p className="absolute text-[12px] text-black top-[10%] left-[5%] w-fit px-2 rounded bg-quinary">{item.quality}</p>
                    <TiDelete  onClick={(e) => {handleDeleteButton(item, e)}} className="absolute text-red-800 top-[5%] right-[5%] w-fit h-9 px-2 rounded cursor-pointer"/>

                </div>
            })}
        </div>
    </>);
}

export default FavoriteDetails;