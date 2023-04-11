import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { register } from 'redux/user/operation';
import {warningMessageRegister} from '../../utils/utils'

export default function RegisterPage() {
    const error = useSelector(state => state.user.error);
    const dispatch = useDispatch();
    const inputIdName = nanoid();
    const inputIdEmail = nanoid();
    const inputIdPassword = nanoid();

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
    useEffect(() => {   
       if(error === "rejected") {
        warningMessageRegister()
        }
    },[error])
      
   
      

    return (<div>
            <form onSubmit={onCreateUserAccount}>
                <label htmlFor={inputIdName}>Username</label>
                <input
                    id={inputIdName}
                    type="text"
                    name="name"
                   />
                <br />
                <label htmlFor={inputIdEmail}>Email</label>
                <input
                    id={inputIdEmail}
                    type="email"
                    name="email"
                  />
                <br />
                <label htmlFor={inputIdPassword}>Password</label>
                <input
                    id={inputIdPassword}
                    type="password"
                    name="password"
                 />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>)
    }
