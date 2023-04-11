import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut , refreshUser} from "./operation";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
    builder
    .addCase(register.pending, (state) => state)
    .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
     })
    .addCase(register.rejected, (state, action) => {
        state.error = "rejected"
    })
            
    .addCase(logIn.pending, (state) => state)
    .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
    })
    .addCase(logIn.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = "rejected";
    })
            
    .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
        state.error = null;
    })

    .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
    })       
    .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
    })
    .addCase(refreshUser.rejected, (state) => {
         state.isRefreshing = false;
    })

})


export const authReducer = authSlice.reducer;