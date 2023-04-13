import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function PrivateRoute({component: Component, redirectTo = "/" }) {
    const isRefreshing = useSelector(state => state.user.isRefreshing);
    const isLoggedIn = useSelector(state => state.user.isLoggedIn); 
    const shouldRedirect = !isRefreshing && !isLoggedIn
    

    return (
        shouldRedirect
        ? <Navigate to={redirectTo} />
        :  Component
    )
}


PrivateRoute.propTypes = {
  Component: PropTypes.object,
  redirectTo : PropTypes.string,
}