import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../../types/types";

const initialState:IAuth={
    isLogged:false,
    refreshToken:localStorage.getItem("refreshToken") || "",
    authToken:localStorage.getItem("authToken") || ""
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action:PayloadAction<{authToken:string,refreshToken:string}>)=>{
            state.isLogged=true;
            state.authToken=action.payload.authToken;
            state.refreshToken=action.payload.refreshToken;
        },
        logout:(state)=>{
            state.isLogged=false;
            state.authToken="";
            state.refreshToken="";
        }
    }
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer