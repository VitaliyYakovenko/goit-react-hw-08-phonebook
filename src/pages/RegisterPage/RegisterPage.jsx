import { useDispatch} from 'react-redux';
import { register } from 'redux/user/operation';
import {Box , TextField, Button} from "@mui/material";

export default function RegisterPage() {
    const dispatch = useDispatch();


    const onCreateUserAccount = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        dispatch(register(
        {
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value
        }))
        
        form.reset();
    }

   
    return (
    <>
      <Box style={{  
      marginTop: 40,
      marginLeft: "auto",
      marginRight: "auto",
      width: 450
    }}>
    <form onSubmit={onCreateUserAccount}>
        <TextField
        style={{marginBottom: 15}}    
        id="outlined-basic"
        fullWidth
        label="Username"
        variant="outlined"    
        type="text"
        name="name"
        />
        <TextField
        style={{marginBottom: 15}}    
        id="outlined-basic"
        fullWidth
        label="Email"    
        type="email"
        name="email"
        />
        <TextField
        style={{marginBottom: 15}}    
        id="outlined-basic"
        fullWidth    
        label="Password"    
        type="password"
        name="password"
        />
        <Button
        style={{display : "block", margin: "auto" , textTransform: "none"}}        
        type="submit"
        variant="contained">
        Register
        </Button>
    </form>
    </Box>
    </>)
}
