import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContacts } from "redux/contacts/operation";
import {TextField, Button} from "@mui/material";


export default function ContactForm() {
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

     const onInputChange = (e) => {
        const { name, value } = e.currentTarget;
    
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
        
    };

        const onAddContact = (e) => {
        e.preventDefault();

        if (contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in contacts.`);
         reset();    
         return;
        };
        
        const user = {name,number}
            
        dispatch(addContacts(user))
        reset();
    };

    const reset = () => {
        setName("");
        setNumber("");
    } 

    return (
           <form onSubmit={onAddContact}>

            <TextField
            style={{marginBottom: 15}}    
            onChange={onInputChange}
            type="text"
            label="Name"    
            value={name}    
            name="name"
            fullWidth    
            id="outlined-basic"                  
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        
            <TextField 
            onChange={onInputChange}
            style={{marginBottom: 15}}    
            type="tel"
            fullWidth
            value={number}
            name="number"
            label="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
             />
            <Button
            style={{textTransform: "none", margin: "auto", display:"block"}}    
            variant="contained"    
            type="submit">
            Add contact
            </Button>
        </form>
    )
}