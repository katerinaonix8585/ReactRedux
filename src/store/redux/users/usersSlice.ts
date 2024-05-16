import { createAppSlice } from "store/createAppSlice";
import { UserData, UsersSliceState } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";

const usersInitialState: UsersSliceState = {
    users: []
}


export const usersSlice = createAppSlice({
    name: "Users",
    initialState: usersInitialState,
    reducers: create=>({
       addUser: create.reducer((state: UsersSliceState, action: PayloadAction<UserData>)=>{
        state.users = [...state.users, action.payload]}),
       deleteAllUser: create.reducer((state: UsersSliceState)=>{
        state.users = usersInitialState.users
       })
    }),
    selectors: {
        users: (state: UsersSliceState) => state.users
    }    
})

export const usersSliceActions = usersSlice.actions;
export const usersSliceSelectors = usersSlice.selectors;