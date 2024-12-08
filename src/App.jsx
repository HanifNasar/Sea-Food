import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/home";
import Contact from "./components/ContactUs/Contact";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


const Indexroute = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact",
    element: <Contact />
  },
];

const router = createHashRouter(Indexroute, { basename: "/" });

const App = () => {
  return (
    <>
    <ToastContainer />
    <ToastContainer />
    <RouterProvider router={router} />
    </>
    
  );
};

export default App;
