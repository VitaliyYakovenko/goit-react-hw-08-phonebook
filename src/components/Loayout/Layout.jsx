import {NavLink, Outlet } from "react-router-dom"
import UserInform from "components/UserInform/UserInform";
import { useSelector} from "react-redux";
import NavBar from "components/NavLink/NavLink";



export default function Layout() {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
   
  

    return (<>
        <header>
        <ul >
        <li>
        <NavLink to='/'>Home</NavLink>            
        </li>
        {isLoggedIn && <NavLink to='contacts'>Contacts</NavLink>}            
        {isLoggedIn
        ? <UserInform />
        : <NavBar />}
        </ul>    
        </header>
        <main>
        <Outlet />
        </main>  
    </>)
} 