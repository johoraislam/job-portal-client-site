import { useContext } from "react"
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="flex justify-center items-center text-pink-800"><span className="loading loading-bars loading-2xl"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/signIn'} state={location?.pathname}></Navigate>

  
}

export default PrivateRoute