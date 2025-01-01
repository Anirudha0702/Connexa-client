import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ITheme } from "../../types/types";
import { PaletteMode } from "@mui/material";
const initialState:ITheme={
    selectedTheme:"light"
}
export const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        setTheme:(state,action:PayloadAction<PaletteMode>)=>{
            state.selectedTheme=action.payload;
        }
    }
})
export const {setTheme} = themeSlice.actions

export default themeSlice.reducer