import { useParams } from "react-router-dom";
import Aside from "../aside/Aside";
import SearchFilmsDetail from "./SearchFilmsDetail";

const SearchFilms = () => {
    const { name } = useParams();


    console.log(name);


    return (<>
        <SearchFilmsDetail title={name} api={name} />
    </>);
}

export default SearchFilms;