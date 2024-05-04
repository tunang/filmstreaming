import Aside from "../aside/Aside";
import { useSelector } from "react-redux";
import FavoriteDetails from "./FavoriteDetail";

const Favorite = () => {
    const favFilms = useSelector(state => state.favFilms)

    return (<div className='absolute w-full grid grid-cols-2 md:grid-cols-5 gap-5 mt-32 px-12 z-1'>
        <Aside />

        <FavoriteDetails title={'Favorite'} data={favFilms} />
    </div>);
}

export default Favorite;