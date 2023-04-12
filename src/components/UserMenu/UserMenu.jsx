import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/user/operation";
import {Typography ,Button} from "@mui/material";

export default function UserMenu() {
    const userEmail = useSelector(state => state.user.user.email);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logOut());
    }

    return (
    <div style={{ marginLeft: "auto", marginRight: 10, display:"flex", alignItems: "center"}}>       
    <Typography
    style={{marginRight: 20}}            
    typography="h5"
    color="white"
    component="p">
    Email: {userEmail}
    </Typography>
    <Button
    variant="contained"
    style={{marginRight: 10, backgroundColor: "darkBlue", fontSize:12}}            
    onClick={onLogout} type="button">
    Logout
    </Button>     
    </div>     
    )
}