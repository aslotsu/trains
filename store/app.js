import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "./features/modal"

const store = configureStore({
   reducer: {
       modal: modalReducer,
       changeForm: modalReducer
   }
})

export default store