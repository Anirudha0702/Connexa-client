import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ITheme } from "../../types/types";
const initialState:ITheme={
    selectedTheme:"light"
}
export const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        setTheme:(state,action:PayloadAction<string>)=>{
            state.selectedTheme=action.payload;
        }
    }
})
export const {setTheme} = themeSlice.actions

export default themeSlice.reducer