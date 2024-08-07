import Aside from "../aside/Aside";
import { useSelector } from "react-redux";
import FavoriteDetails from "./FavoriteDetail";
import { getFavoriteList } from "../../services/FavoriteFilmsServices";
import { useEffect, useState } from "react";
import NotAuth from "../loading/NotAuth";

const Favorite =  () => {

    const user = useSelector((state) => state.user);

    return (<>
    {user.account.auth ? <FavoriteDetails title={'Favorite'} /> : <NotAuth />}
        
    </>);
}

export default Favorite;