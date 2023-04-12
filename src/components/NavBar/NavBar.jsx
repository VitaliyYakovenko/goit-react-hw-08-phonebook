import { NavLink } from "react-router-dom";
import { Typography} from "@mui/material";

export default function NavBar() {
    return (
        <>
        <li style={{ marginLeft: 'auto', marginRight: 10}}>
        <NavLink to='/register'>
        <Typography                
        typography="h6"
        color="white">
        Sign in
        </Typography>
        </NavLink>
        </li>
        <li style={{marginLeft: 10, marginRight: 10}}>
        <NavLink to='/login'>
        <Typography                
        typography="h6"
        color="white">
        Log in
        </Typography>
        </NavLink>
        </li>
        </>
        )
}