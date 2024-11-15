import { RouterProvider,createBrowserRouter } from "react-router-dom";
import { Home, Login ,SignUp} from "../pages";
const RoutesProvider: React.FC = () => {
    const router=createBrowserRouter(
        [
            {
                path: "/",
                element: <Home/>,  
            },
            {
              path: "/login",
              element: <Login/>,  
            },
            {
                path: "/signup",
                element: <SignUp/>,
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