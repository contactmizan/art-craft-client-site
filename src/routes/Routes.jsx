import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllItems from "../pages/AllItems";
import AddItem from "../pages/AddItem";
import MyItemList from "../pages/MyItemList";
import Register from "../pages/Register";
import UpdateItem from "../pages/UpdateItem";

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
                path: '/additem',
                element: <AddItem></AddItem>
            },
            {
                path: '/updateitem',
                element: <UpdateItem></UpdateItem>
            },
            {
                path: '/myitemlist',
                element: <MyItemList></MyItemList>
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