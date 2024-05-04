import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassWord, setCheckPassWord] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleLoginButton = () => {
        console.log(">>>check info: ", email, password);
    }


    return ( <div className="absolute w-full grid grid-cols-3 mt-32 z-1">
    <div className="col-start-1 md:col-start-2 col-end-4 md:col-end-3 text-center">
        <div className="mb-6">
            <h1 className=" text-white">Register</h1>
        </div>

        {/* First name Last name input group */}
        <div className="flex w-3/4 mx-auto">
        {/* First name */}
        <div className="input-group pr-1"> 
            <h4 className="text-quinary mb-1" htmlFor="">First Name</h4>
            <input
                className=" auth-input"
                type="text"
                placeholder="First Name"
                value={email}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
        {/* Last name */}
        <div className=" input-group pl-1"> 
            <h4 className="text-quinary mb-1" htmlFor="">Last Name</h4>
            <input
                className="auth-input"
                type="text"
                placeholder="Last Name"
                value={email}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>
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
        {/* Confirm your password login group */}
        <div className="input-group">
            <h4 className="text-quinary mb-1" htmlFor="">Confirm your password</h4>
            <input
                className="auth-input"
                type="password"
                placeholder="Confirm your password"
                value={password}
                onChange={(e) => setCheckPassWord(e.target.value)}
            />
        </div>

        <div className="input-group">
        <input
                className="auth-button"
                type="button"
                value='Create'
                onClick={() => handleLoginButton()}
            />
        </div>

        {/* Action (Forgot password & Register) */}
        <div className="w-3/4 text-right mt-4 mx-auto">
            <p className="text-quinary mt-2">Already have an account?<Link to={'/login'} className="text-quaternary hover:border-b-[1px] border-quaternary mt-2"> Log in</Link></p>
        </div>

    </div>



</div> );
}
 
export default Register;