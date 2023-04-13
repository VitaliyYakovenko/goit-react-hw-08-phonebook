import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/slice';
import {TextField} from "@mui/material";



export default function Filter() {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(changeFilter(e.target.value));
    }
        
    return (   
            <TextField
            style={{marginBottom: 15}}
            onChange={onChange}
            type="text"
            name="filter"     
            value={filter}
            fullWidth
            label="Find contacts by name"    
            id="outlined-basic">
            </TextField>
    )   
}