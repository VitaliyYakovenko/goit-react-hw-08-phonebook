import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut , refreshUser} from "./operation";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
    builder
    .addCase(register.pending, (state, action) => state)
    .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
     })
    .addCase(register.rejected, (state, action) => state)
            
    .addCase(logIn.pending, (state, action) => state)
    .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token;
        // state.isRefreshing = true;
        state.isLoggedIn = true;
    })
    .addCase(logIn.rejected, (state, action) => {
        state.isLoggedIn = false;
    })
            
    .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
    })

    .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
    })       
    .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
    })
    .addCase(refreshUser.rejected, (state) => {
         state.isRefreshing = false;
    })

})


export const authReducer = authSlice.reducer;