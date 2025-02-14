import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./features/productSlice";


export const store = configureStore({
    reducer:{
        counter: counterSlice,       
    }
})