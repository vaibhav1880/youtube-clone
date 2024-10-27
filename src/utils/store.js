import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
        app: navSlice,
        search: searchSlice,
        chat: chatSlice,
    }
})

export default store;