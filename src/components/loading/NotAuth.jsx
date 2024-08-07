import { Navigate, useNavigate } from "react-router-dom";

const NotAuth = () => {
    const navigate = useNavigate();


  return (
    <div className="col-span-3 flex flex-col h-60 items-center justify-center">
      <h2 className="text-quinary">Didn't login ?</h2>
      <button
        onClick={() => navigate("/login")}
        className="w-60 text-xl text-white bg-quaternary py-3 mt-2 rounded-full"
      >
        Click here to login
      </button>
    </div>
  );
};

export default NotAuth;
