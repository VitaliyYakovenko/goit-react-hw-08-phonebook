import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';
import { useEffect } from 'react';
import Loader from "../Loader/Loader"
import { deleteContacts } from 'redux/contacts/operation';
import {List, ListItem ,Typography,Button,Box} from "@mui/material";


export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const error = useSelector(state => state.contacts.error);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
   
  },[dispatch])

  const normalizedName =  filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(normalizedName));
 
   
   
  if (error === "rejected") {
    return (<div>Not found contacts</div>)
  } 
   
  if (isLoading) {
    return (<div><Loader/></div>)
  }        
  
  if (contacts.length === 0) {
    return (<div>Add your contacts</div>)
  }

  if (!isLoading) {
    return (
          <List style={{ width: '100%',backgroundColor: 'rgb(231, 235, 240)'}}>
            {visibleContacts.map(contact => (
            <ListItem
            style={{display:"flex", alignItems:"center"}}    
            key={contact.id}>
           <Typography
            style={{marginRight: 20}}            
            typography="h6"
            color="#1976d2"
            component="span">
            {contact.name}
            </Typography>
                
            <Box style={{marginLeft:"auto"}}>
            <Typography
            style={{marginRight: 20}}            
            typography="h6"
            color="#1976d2"
            component="span">
            {contact.number}
            </Typography>
                
           <Button
            variant="contained"
            style={{backgroundColor: "darkBlue"}}      
            onClick={() => dispatch(deleteContacts(contact.id))}>
            Delete
            </Button>
            </Box>    
           </ListItem>
          ))}
          </List>
      )
  }
}
