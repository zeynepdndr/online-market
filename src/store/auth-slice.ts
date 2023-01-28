import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    athenticated: '',
    errorMessage: '',
};


const authSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        signIn(state, action) {
        },
        signUp(state, action) {

        },
        logout() { }
    },
});

export const authActions = authSlice.actions;

export default authSlice;
