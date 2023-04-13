import { useDispatch} from "react-redux";
import { logIn } from "redux/user/operation";
import {Box , TextField, Button} from "@mui/material";

export default function LoginPage() {
    const dispatch = useDispatch();

    const onGetUserAccount = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value
            }))
        
        form.reset();
    }
 

    return (
    <Box style={{  
            marginTop: 40,
            marginLeft: "auto",
            marginRight: "auto",
            width: 450
             }}>
            
    <form onSubmit={onGetUserAccount}>
            
            <TextField
            style={{marginBottom: 15}}    
            id="outlined-basic"
            fullWidth
            label="Email"     
            name="email"
            type="email"        
            /> 
            <TextField
            style={{marginBottom: 15}}            
            id="outlined-basic"
            fullWidth    
            label="Password" 
            name="password"        
            type="password"
            />
               
            <Button
            style={{display : "block", margin: "auto", textTransform: "none"}}
            variant="contained"
            type="submit">
            Log In
            </Button>        
    </form>    
    </Box>)
}