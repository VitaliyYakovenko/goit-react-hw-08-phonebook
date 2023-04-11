import { nanoid } from "nanoid"
import { useDispatch } from "react-redux";
import { logIn } from "redux/user/operation";

export default function LoginPage() {
    const inputIdEmail = nanoid();
    const inputIdPassword = nanoid();
    const dispatch = useDispatch();



    const onGetUserAccount = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logIn(
            {
            email: form.elements.email.value,
            password: form.elements.password.value
            }))
        
        form.reset();
    }
   



    return (<>
        <form onSubmit={onGetUserAccount}>
        <label htmlFor={inputIdEmail}>Email</label>    
        <input
        id={inputIdEmail}
        name="email"        
        type="email">        
        </input>
        <br/>    
        <label htmlFor={inputIdPassword}>Password</label>    
        <input
        id={inputIdPassword}
        name="password"        
        type="password">
        </input>
        <br/>       
    <button type="submit">Log In</button>        
    </form>
    </>)
}