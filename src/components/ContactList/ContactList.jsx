import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';
import { useEffect } from 'react';
import { deleteContacts } from 'redux/contacts/operation';


export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
   
//   const error = useSelector(state => state.contacts.error);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
   
  },[dispatch])

  const normalizedName =  filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(normalizedName));
 
   
   
//   if (error === "rejected") {
//     return (<div>Not found contacts</div>)
//   } 
   
//   if (isLoading) {
//     return (<div><Loader/></div>)
//   }        
  
  if (contacts.length === 0) {
    return (<div>Add your contacts</div>)
  }

  if (!isLoading) {
    return (
          <ul>
            {visibleContacts.map(contact => (
          <li
          key={contact.id}>
          <span>{contact.name}</span>
          <span>{contact.number}</span>   
          <button
          onClick={() => dispatch(deleteContacts(contact.id))}>
          Delete
          </button>       
          </li>
          ))}
          </ul>
      )
  }
}

