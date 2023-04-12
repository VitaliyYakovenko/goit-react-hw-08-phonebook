import { Suspense } from "react";
import {Link, Outlet } from "react-router-dom"
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector} from "react-redux";
import NavBar from "components/NavBar/NavBar";
import Loader from "components/Loader/Loader";
import { AppBar, Toolbar, Typography} from "@mui/material";
import HomeIcon from "../HomeIcon/HomeIcon" 


export default function Layout() {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
   
    return (
        <>
    <AppBar
        component="header"
        position="static">
    <Toolbar>
        <li style={{ display: "flex", alignItems: "center" }}>
        <HomeIcon color="white"/>          
        <Link to='/'>                    
        <Typography                        
        typography="h5"
        color="white">                        
         Home                       
        </Typography>                  
        </Link>            
        </li>   
        {isLoggedIn && <Link to='contacts'>
        <Typography
        style={{ marginLeft: 35}}                    
        typography="h6"
        color="white">Contacts</Typography>
        </Link>}   
                
        {isLoggedIn              
        ? <UserMenu/>
        : <NavBar/>}          
                    
    </Toolbar>    
    </AppBar>
            
        <main>
        <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>   
        </main>  
    </>
    )
} 