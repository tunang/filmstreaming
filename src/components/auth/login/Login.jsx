import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { loginApi } from "../../../services/UserServices";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginRedux } from "../../../redux/action/userAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { fetchUser } from "../../../redux/reducer/userReducer";




const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('tuan');
    const [isLogin, setIsLogin] = useState(false);

    const account = useSelector(state => state.user.account);


    const handleLoginButton = async () => {
        console.log(">>>check info: ", email, password);
        // const res = await loginApi(email, password);
        // console.log(res);
        // localStorage.setItem('token', res.data.token)
        if( !email || !password){
            toast.error("Email/ Password is required!");
            return;
        }
        
        dispatch(fetchUser({email, password}));
;    }

        useEffect(() => {
            if(account && account.auth === true){
                navigate('/');
            }
        },[account])

    return (<div className="absolute w-full grid grid-cols-3 mt-24 md:mt-32 z-1">
        <div className="col-start-1 md:col-start-2 col-end-4 md:col-end-3 text-center">
            <div className="mb-6">
                <h1 className=" text-white">Login</h1>
            </div>


            {/* Email login group */}
            <div className="input-group"> 
                <h4 className="text-quinary mb-1" htmlFor="">Email</h4>
                <input
                    className="auth-input"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Password login group */}
            <div className="input-group">
                <h4 className="text-quinary mb-1" htmlFor="">Password</h4>
                <input
                    className="auth-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="input-group">
            <input
                    className="auth-button"
                    type="button"
                    value='Login'
                    onClick={() => handleLoginButton()}
                />
            </div>

            {/* Action (Forgot password & Register) */}
            <div className="w-3/4 text-right mt-4 mx-auto">
                <p className="text-quinary"><Link className="hover:border-b-[1px] border-inherit">Forgot password?</Link></p>
                <p className="text-quinary mt-2">No account?<Link to={'/register'} className="text-quaternary hover:border-b-[1px] border-quaternary mt-2"> Create here</Link></p>
            </div>

        </div>

        <div>
            {/* <p className="text-white">After logged in, token and email are saved in localstorage and redux state, use console to check</p>
            <p className="text-white">Email: eve.holt@reqres.in</p>
            <p className="text-white">Password: anything</p>
            <p className="text-white">Api: https://reqres.in/</p> */}
        </div>



    </div>);
}

export default Login;