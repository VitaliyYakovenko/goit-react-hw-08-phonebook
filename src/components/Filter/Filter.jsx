import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/slice';
import { nanoid } from 'nanoid'



export default function Filter() {
    const InputIdFilter = nanoid();
    const filter = useSelector(state => state.filter);
    
    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch(changeFilter(e.target.value));
    }
        
    return (
        <div>
            <label
            htmlFor={InputIdFilter}>Find contacts by name</label>
            <input
            onChange={onChange}
            type="text"
            name="filter"     
            value={filter}
            id={InputIdFilter}
            >
            </input>
        </div>    
  )   
}