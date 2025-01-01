import { PaletteMode } from '@mui/material';
export interface IUser{
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
}
export interface ITheme{
    selectedTheme: PaletteMode;  
}

export interface IAuth{
    isLogged: boolean;
    refreshToken:string;
    authToken:string;
}
export interface IAPIResponse {
	status: boolean;
	data: any;
}