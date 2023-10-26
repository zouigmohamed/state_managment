import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import counterSlice from "../reducers/CounterSlice"
 export  const store = configureStore({
  reducer: {
     users: userReducer,
    counter : counterSlice
  }
})