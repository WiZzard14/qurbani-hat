import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import AllAnimals from "../pages/AllAnimals.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import AnimalDetails from "../pages/AnimalDetails.jsx"; 
import PrivateRoute from "./PrivateRoute.jsx"; 
import MyProfile from "../pages/MyProfile.jsx";
import UpdateProfile from "../pages/UpdateProfile.jsx";
import MyOrders from "../pages/MyOrders";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/animals", element: <AllAnimals /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { 
                path: "/details-page/:id", 
                element: <PrivateRoute><AnimalDetails /></PrivateRoute> 
            },
            { 
                path: "/my-profile", 
                element: <PrivateRoute><MyProfile /></PrivateRoute> 
            },
            { 
                path: "/update-profile", 
                element: <PrivateRoute><UpdateProfile /></PrivateRoute> 
            },
            { 
                path: "/my-orders", 
                element: <PrivateRoute><MyOrders /></PrivateRoute> 
            },
        ]
    }
]);