import logo from './logo.png'
import { CiSearch } from "react-icons/ci";
import { RiMenuLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
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
        console.log(1)
        navigate(`/search/${searchInput}`)
    }
    
    return ( <div className='w-full h-24 grid grid-cols-2 md:grid-cols-3 items-center content-center justify-items-center bg-secondary cursor-pointer'>
        <div className='flex items-center'>
            <img onClick={() => handleLogo()} className='hidden md:block h-28 pt-2 scale-[2.4] cursor-pointer' src={logo} alt="" />
            <RiMenuLine onClick={() => dispatch(handleHamburgerMenuButton())} className='text-quinary md:hidden h-6 w-10 scale-[120%]'/>
            <h2 onClick={() => handleLogo()} className='text-quinary md:hidden'>Name</h2>
        </div>
        
        <div className='hidden md:block'>
            <CiSearch onClick={() => handleSearchButton()} className='absolute h-12 w-12 scale-50 cursor-pointer'  />
            <input  
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className='w-96 h-12 bg-quinary rounded-full px-12' 
            type="text" 
            placeholder='Search here'/>
        </div>
        
        <div onClick={() => handleLoginButton()} className='relative h-12 w-44 bg-quinary rounded-full'>
            <h4 className='absolute text-tertiary leading-[48px] w-32 text-center '>{
                user && user.auth ?
                'name'
                : 'Log in' }</h4>
            <CgProfile className='absolute right-0 h-12 w-16 text-primary cursor-pointer'/>
        </div>

    </div> );
}
 
export default Header;