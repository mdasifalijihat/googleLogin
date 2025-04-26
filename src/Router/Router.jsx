import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Navbar/Login";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <div> Error </div>,
      children:[
        { index: true, Component:Home},
        {path: '/login', Component:Login},
      ]
    },
  ]);