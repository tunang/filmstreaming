import WatchingDetails from "./WatchingDetail";
import NotAuth from "../loading/NotAuth";
import { useSelector } from "react-redux";


const Watching = () => {
    const user = useSelector((state) => state.user);

    return (<>
    {user.account.auth ? <WatchingDetails title={'Watching'}/> : <NotAuth />}
        
    </>);
    return ( <>
        <WatchingDetails title={'Watching'}/>
    </> );
}
 
export default Watching;