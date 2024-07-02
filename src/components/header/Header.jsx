import logo from './logo.png'
import { CiSearch } from "react-icons/ci";
import { RiMenuLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { handleHamburgerMenuButton } from '../../redux/action/asideAction';




const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [searchInput, setSearchInput] = useState('');
    const user = useSelector(state => state.user.account)
    const handleLoginButton = () => {
        navigate('/login');
    }

    const handleLogo = () => {
        navigate('/');
    }

    const handleSearchButton = () => {
        navigate(`/search/${searchInput}`)
    }

    const handleAsideButton =() => {
        dispatch(handleHamburgerMenuButton());
    }
    
    return ( <div className='w-full h-20 md:h-24 grid grid-cols-2 md:grid-cols-3 items-center content-center md:justify-items-center bg-secondary cursor-pointer'>
        <div className='flex items-center'>
            <img onClick={() => handleLogo()} className='hidden md:block h-28 pt-2 scale-[2.4] cursor-pointer' src={logo} alt="" />
            <RiMenuLine onClick={() => handleAsideButton()} className='text-quinary md:hidden h-6 w-10 scale-[120%]'/>
            <h2 onClick={() => handleLogo()} className='text-quinary md:hidden'>Name</h2>
        </div>
        
        <div className='absolute right-3 md:relative'>
            <CiSearch onClick={() => handleSearchButton()} className='absolute h-10 md:h-12 w-12 scale-50 cursor-pointer'  />
            <input  
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className='w-40 md:w-64 lg:w-96 h-10 md:h-12 bg-quinary rounded-xl pl-12' 
            type="text" 
            placeholder='Search here'/>
        </div>
        
        <div onClick={() => handleLoginButton()} className='hidden md:block md:relative h-12 md:w-44 md:bg-quinary rounded-full'>
            <h4 className='hidden md:block md:absolute text-tertiary leading-[48px] w-32 text-center '>{
                user && user.auth ?
                'name'
                : 'Log in' }</h4>
            <CgProfile className='absolute right-0 h-12 w-16 text-quinary md:text-primary cursor-pointer'/>
        </div>

    </div> );
}
 
export default Header;