import Aside from "../aside/Aside";
import { useSelector } from "react-redux";
import FavoriteDetails from "./FavoriteDetail";

const Favorite = () => {
    const favFilms = useSelector(state => state.favFilms)

    return (<>
        <FavoriteDetails title={'Favorite'} data={favFilms} />
    </>);
}

export default Favorite;