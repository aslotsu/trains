import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        open : false,
        hasAccount: false,
        isLoggedIn: false
    },
    reducers: {
        toggle : state => {
            state.open = !state.open
        },
        changeForm: state => {
            state.hasAccount = !state.hasAccount
        },
        login: state => {
            state.isLoggedIn = !state.isLoggedIn
        }
    }
})

export const {toggle, changeForm} = modalSlice.actions
export default modalSlice.reducer