import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut , refreshUser} from "./operation";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
    builder
    .addCase(register.pending, (state) => {
        state.error = false;    
    })
    .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = false;
     })
    .addCase(register.rejected, (state) => {
        state.error = true;
    })
            
    .addCase(logIn.pending, (state) => {
        state.error = false;    
    })
    .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = false;
    })
    .addCase(logIn.rejected, (state) => {
        state.isLoggedIn = false;
        state.error = true;
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