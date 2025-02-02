import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllItems from "../pages/AllItems";
import AddItem from "../pages/AddItem";
import MyItemList from "../pages/MyItemList";
import Register from "../pages/Register";
import UpdateItem from "../pages/UpdateItem";
import ViewDetails from "../pages/ViewDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allitems',
                element: <AllItems></AllItems>,
                loader: () => fetch('http://localhost:5000/artCraft')
            },
            {
                path: '/viewdetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/artCraft/${params.id}`)
            },
            {
                path: '/additem',
                element: <AddItem></AddItem>
            },
            {
                path: '/updateitem',
                element: <PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>
            },
            {
                path: '/myitemlist',
                element: <PrivateRoute><MyItemList></MyItemList></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;