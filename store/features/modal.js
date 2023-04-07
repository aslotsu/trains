import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        open : false,
        hasAccount: false,
        isLoggedIn: false,
        refreshed: false
    },
    reducers: {
        toggle : state => {
            state.open = !state.open
        },
        changeForm: state => {
            state.hasAccount = !state.hasAccount
        },
        login: state => {
            state.isLoggedIn = true
        },
        logout: state => {
            state.isLoggedIn = false
        },
        refresh: state => {
            state.refreshed = true
        }

    }
})

export const {toggle, changeForm, login, logout, refresh} = modalSlice.actions
export default modalSlice.reducer