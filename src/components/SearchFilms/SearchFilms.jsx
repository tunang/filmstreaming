import { useParams } from "react-router-dom";
import Aside from "../aside/Aside";
import SearchFilmsDetail from "./SearchFilmsDetail";

const SearchFilms = () => {
    const { name } = useParams();


    console.log(name);


    return (<div className='absolute w-full grid grid-cols-4 md:grid-cols-5 gap-5 mt-32 px-4 md:px-12 z-1'>
        <Aside />

        <SearchFilmsDetail title={name} api={name} />
    </div>);
}

export default SearchFilms;