import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import components
import Username from "./components/Username"
import Register from "./components/Register"
import Profile from "./components/Profile"
import Recovery from "./components/Recovery"
import Reset from "./components/Reset"
import Password from "./components/Password"
import PageNotFound from "./components/PageNotFound"
import Home from "./components/Home";
//create route
const router = createBrowserRouter([
    {
        path : '/',
        element : <Home />
    },
    {
        path : '/register',
        element : <Register />
    },
    {
        path : '/password',
        element : <Password />
    },
    {
        path : '/profile',
        element : <Profile />
    },
    {
        path : '/recovery',
        element : <Recovery />
    },
    {
        path : '/reset',
        element : <Reset />
    },
    
    {
        path : '*',
        element : <PageNotFound />
    },
]) 

export default function App(){
    return(
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}