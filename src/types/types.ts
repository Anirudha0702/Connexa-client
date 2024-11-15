export interface IUser{
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
}
export interface ITheme{
    selectedTheme: string;  
}

export interface IAuth{
    isLogged: boolean;
    expiredAt:string;
    authToken:string;
}