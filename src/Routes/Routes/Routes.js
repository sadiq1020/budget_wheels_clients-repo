import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryDetails from "../../Pages/CategoryDetails/CategoryDetails";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:name',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/categoryProducts?name=${params.name}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])

export default router;