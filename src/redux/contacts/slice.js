import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts} from "./operation";



export const createContacts = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [addContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
            
        },
        [deleteContacts.fulfilled](state, action) {
            const index = state.items.findIndex(
             contact => contact.id === action.payload.id
           );
            state.items.splice(index, 1);
        } 
    },
}
)

export const createFilter = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        changeFilter(state, action) {
         return state = action.payload;
        }
    }
}
)

export const { changeFilter } = createFilter.actions;










    // extraReducers: builder =>
    // builder
    // .addCase(fetchContacts.pending, (state, action) => state)
    // .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items = action.payload;
    //  })
    // .addCase(fetchContacts.rejected, (state, action) => state)
    // .addCase(addContacts.pending, (state, action) => state)
    // .addCase(addContacts.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    // })
    // .addCase(addContacts.rejected, (state, action) => {})
    // .addCase(deleteContacts.fulfilled, (state,action) => {
    //    state.items = state.items.filter(contact => contact.id !== action.payload);
    // })
    // },