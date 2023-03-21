import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        open : false
    },
    reducers: {
        toggle : state => {
            state.open = !state.open
        }
    }
})

export const {toggle} = modalSlice.actions
export default modalSlice.reducer