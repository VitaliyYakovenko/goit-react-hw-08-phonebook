import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import {Box , Typography} from "@mui/material";


export default function ContactsPage() {
    
    return (<Box style={{  
            marginTop: 40,
            marginLeft: "auto",
            marginRight: "auto",
            width: 500
             }}>
           <ContactForm />
            <Typography style={{
            textAlign: "center", 
            marginBottom: 15,
            marginTop: 20,
            fontWeight: 500,
            color: "#1976d2"
            }}
            variant="h4"
            component="p">
            Contacts
           </Typography>
           <Filter/>
           <ContactList/>
    </Box>)
} 