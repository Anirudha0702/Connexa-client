import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../../types/types";

const initialState:IAuth={
    isLogged:false,
    expiredAt:"",
    authToken:""
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action:PayloadAction<{authToken:string,expiredAt:string}>)=>{
            state.isLogged=true;
            state.authToken=action.payload.authToken;
            state.expiredAt=action.payload.expiredAt;
        },
        logout:(state)=>{
            state.isLogged=false;
            state.authToken="";
            state.expiredAt="";
        }
    }
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer