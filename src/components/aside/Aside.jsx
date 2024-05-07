import { IoEarOutline, IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAddBox, MdOutlineLocalMovies, MdPlayCircleOutline, MdLogout } from "react-icons/md";
import { TiHeartOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

import { BiVideoRecording } from "react-icons/bi";
import { RiSlideshow3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutRedux } from "../../redux/action/userAction";
import { useEffect } from "react";

const Aside = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAsideOpening = useSelector(state => state.asideStatus);

    const user = useSelector(state => state.user.account)
    const handleLoginButton = () => {
        navigate('/login');
    }
    

    const asideTitles = [
        {
            title: 'Browse',
            items: [
                { label: 'Home', icon: <IoHomeOutline />, active: false, action: () => {navigate('/')} },
                // { label: 'New release', icon: <MdOutlineAddBox />, active: false, action: () => {navigate('/new_release')} },
                { label: 'Favorite', icon: <TiHeartOutline />, active: false, action: () => {navigate('/favorite')} },
                { label: 'Watching', icon: <IoEarOutline />, active: false, action: () => {navigate('/watching')} },
            ]
        },
    
        // {
        //     title: 'Library',
        //     items: [
        //         { label: 'Watching', icon: <IoEarOutline />, active: false, action: () => {navigate('/watching')} },
        //         { label: 'Favorite', icon: <TiHeartOutline />, active: false, action: () => {navigate('/favorite')} },
        //     ]
        // },
    
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
        <aside className={`${isAsideOpening ? 'fixed' : 'hidden'} top-24 px-6 h-screen bg-black z-[3] md:aside-desktop`}>
            <div onClick={() => handleLoginButton()} className='md:hidden md:relative h-10 bg-quinary rounded-full mb-4'>
            <h4 className='absolute text-tertiary leading-[40px] w-32 text-center'>{
                user && user.auth ?
                'name'
                : 'Log in' }</h4>
            {/* <CgProfile className='block absolute right-0 h-12 w-16 text-primary cursor-pointer'/> */}
        </div>

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