import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
        <li>
        <NavLink to='/register'>Sign in</NavLink>
        </li>
        <li>
        <NavLink to='/login'>Log in</NavLink>
        </li>
         </>   
        )
}