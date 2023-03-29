import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Shared/Login-Reg/Login/Login";
import Reg from "../Shared/Login-Reg/Reg/Reg";

 const router=createBrowserRouter([
   {
    path:'/',
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/reg',
            element:<Reg/>
        },

    ]
   }
])
export default router