import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/user/operation";

export default function UserMenu() {
    const userEmail = useSelector(state => state.user.user.email);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logOut());
    }

    return (
    <>
    <div>User email {userEmail}</div>
    <button onClick={onLogout} type="button">Logout</button>        
    </>     
    
    )
}