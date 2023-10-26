import { createSlice } from "@reduxjs/toolkit";
import {userList} from "../data/data"
const userSlice = createSlice({
    name: "user",
    initialState: userList,
    reducers: {
        //actions 
        addUser: (state, action) => {
            console.log(state);
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const updatingUser = state.find(user => user.id == id);
            if (updatingUser) {
                updatingUser.name = name,
                    updateUser.email =email
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const deletingUser = state.find(user => user.id == id);
            if (deletingUser) {
               return state.filter( f => f.id !== id)
            }
        }
    }
})
export const { addUser ,updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer