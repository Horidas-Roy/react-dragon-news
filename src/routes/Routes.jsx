import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Resister from "../pages/resister/Resister";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/news.json'),
            },
            {
               path:'/news/:id',
               element:<PrivateRoute><News></News></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Resister></Resister>
            }
        ]
    }    
]);

export default router;