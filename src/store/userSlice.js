import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        isLoggedIn: false,
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.name = "";
            state.isLoggedIn = false;
        },   
    },
});

export const { setName, login, logout } = userSlice.actions;
export default userSlice.reducer;