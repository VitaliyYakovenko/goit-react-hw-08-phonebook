import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom"
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector} from "react-redux";
import NavBar from "components/NavLink/NavLink";
import Loader from "components/Loader/Loader";



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
        ? <UserMenu />
        : <NavBar />}
        </ul>    
        </header>
        <main>
        <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>   
        </main>  
    </>)
} 