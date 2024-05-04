import { IoEarOutline, IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAddBox, MdOutlineLocalMovies, MdPlayCircleOutline, MdLogout } from "react-icons/md";
import { TiHeartOutline } from "react-icons/ti";
import { BiVideoRecording } from "react-icons/bi";
import { RiSlideshow3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutRedux } from "../../redux/action/userAction";

const Aside = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const asideTitles = [
        {
            title: 'Browse',
            items: [
                { label: 'Home', icon: <IoHomeOutline />, active: false, action: () => {navigate('/')} },
                { label: 'New release', icon: <MdOutlineAddBox />, active: false, action: () => {navigate('/new_release')} },
            ]
        },
    
        {
            title: 'Library',
            items: [
                { label: 'Watching', icon: <IoEarOutline />, active: false, action: () => {navigate('/watching')} },
                { label: 'Favorite', icon: <TiHeartOutline />, active: false, action: () => {navigate('/favorite')} },
            ]
        },
    
        {
            title: 'Category',
            items: [
                { label: 'Movies', icon: <BiVideoRecording  />, active: false, action: () => {navigate('/movies')} },
                { label: 'TV Series', icon: <MdPlayCircleOutline />, active: false, action: () => {navigate('/tv_series')} },
                { label: 'TV Shows', icon: <RiSlideshow3Line  />, active: false, action: () => {navigate('/tv_shows')} },
                { label: 'Cartoons', icon: <MdOutlineLocalMovies />, active: false, action: () => {navigate('/cartoons')} },
            ]
        },
    
        {
            title: 'General',
            items: [
                { label: 'Account', icon: <IoSettingsOutline />, active: false, action: () => {navigate('/account')} },
                { label: 'Log out', icon: <MdLogout />, active: false, action: () => {dispatch(handleLogoutRedux())}},
            ]
        },
    ];

    return (
        <aside className='md:block hidden row-start-1 row-end-10 border-r-[1px] border-quinary'>
            {asideTitles.map((asideTitle, index) => {
                return <ul className="mt-6 first-of-type:mt-0" key={index}>
                    <h3 className="font-semibold text-quinary">{asideTitle.title}</h3>
                    {asideTitle.items.map((item) => {
                        return <li onClick={item.action} className="flex items-center mt-1 last:mb-4 cursor-pointer ">
                            <p className="text-quinary text-xl">{item.icon}</p>
                            <p className="text-quinary text-xl ml-2 hover:text-quaternary">{item.label}</p>
                        </li>
                    })}
                </ul>
            })}
        </aside>
    );
}

export default Aside;