import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function RestrictedRoute({component: Component, redirectTo = "/" }) {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    
    return (
        isLoggedIn
        ? <Navigate to={redirectTo} />
        :  Component
    )
}


RestrictedRoute.propTypes = {
  Component: PropTypes.object,
  redirectTo : PropTypes.string,
}