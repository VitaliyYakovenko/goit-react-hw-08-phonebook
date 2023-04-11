import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/user/operation";

export default function UserInform() {
    const userName = useSelector(state => state.user.user.name);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logOut());
    }

    return (
    <>
    <div>User Inform {userName}</div>
    <button onClick={onLogout} type="button">Logout</button>        
    </>     
    
    )
}