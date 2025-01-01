import { Navigate, RouterProvider,createBrowserRouter } from "react-router-dom";
import { Home, Login ,SignUp} from "../pages";
import { useAppSelector } from "../store/hooks";
const RoutesProvider: React.FC = () => {
    const {isLogged}=useAppSelector((state)=>state.auth);
    const router=createBrowserRouter(
        [
            {
                path: "/",
                element: isLogged?<Home/>:<Navigate to="/login"/>,  
            },
            {
              path: "/login",
              element: isLogged?<Navigate to="/"/>:<Login/>,  
            },
            {
                path: "/signup",
                element: isLogged?<Navigate to="/"/>:<SignUp/>,
            },
            {
                path: "*",
                element: "Error 404",
            },
        ]
    );
    return (
    <RouterProvider router={router}/>
    );
}
export default RoutesProvider;