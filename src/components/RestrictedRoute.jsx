import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function RestrictedRoute({component: Component, redirectTo = "/" }) {
    
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
          
    return (
        isLoggedIn
        ? <Navigate to={redirectTo} />
        :  Component
    )
}