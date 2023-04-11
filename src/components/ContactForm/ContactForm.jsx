import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContacts } from "redux/contacts/operation";
import { nanoid } from "nanoid";


export default function ContactForm() {
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();
    const InputIdName = nanoid();
    const InputIdPhone = nanoid();
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
           <form  
            onSubmit={onAddContact}
            >
            <label 
            htmlFor={InputIdName}>Name</label>    
            <input      
            onChange={onInputChange}
            type="text"
            value={name}    
            name="name"    
            id={InputIdName}    
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
           <label 
            htmlFor={InputIdPhone}>Phone</label> 
            <input
            onChange={onInputChange}
            type="tel"
            value={number}
            name="number"
            id={InputIdPhone}        
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
             />
            <br/>
            <button
            type="submit">Add contact</button>
        </form>
    )
}