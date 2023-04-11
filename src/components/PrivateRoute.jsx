import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function RestrictedRoute({component: Component, redirectTo = "/" }) {
    const isRefreshing = useSelector(state => state.user.isRefreshing);
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    
    const shouldRedirect = !isRefreshing && !isLoggedIn;

    return (
        shouldRedirect
        ? <Navigate to={redirectTo} />
        :  Component
    )
}