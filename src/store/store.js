import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const store = configureStore({

    // reducer:{reducer}
    reducer:{
        auth:authSlice,
    }
})

export default store