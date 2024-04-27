import logo from './logo.png'
import { CiSearch  } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';




const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user.account)
    const handleLoginButton = () => {
        navigate('/login');
    }

    const handleLogo = () => {
        navigate('/');
    }


    
    return ( <div className='w-full h-24 grid grid-cols-3 items-center content-center justify-items-center bg-secondary'>
        <img onClick={() => handleLogo()} className='relative h-28 pt-2 scale-[2.4]' src={logo} alt="" />
        <div>
            <CiSearch className='absolute h-12 w-12 scale-50'  />
            <input className='w-96 h-12 bg-quinary rounded-full px-12' type="text" placeholder='Search here' />
        </div>
        
        <div onClick={() => handleLoginButton()} className='relative h-12 w-44 bg-quinary rounded-full'>
            <h4 className='absolute text-tertiary leading-[48px] w-32 text-center '>{
                user && user.auth ?
                'Name'
                : 'Log in' }</h4>
            <CgProfile className='absolute right-0 h-12 w-16 text-primary'/>
        </div>

    </div> );
}
 
export default Header;