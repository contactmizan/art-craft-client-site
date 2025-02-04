import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllItems from "../pages/AllItems";
import AddItem from "../pages/AddItem";
import Register from "../pages/Register";
import UpdateItem from "../pages/UpdateItem";
import ViewDetails from "../pages/ViewDetails";
import PrivateRoute from "./PrivateRoute";

// Create routes
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
        loader: () => fetch('http://localhost:5000/artCraft') // Fetch all items
      },
      {
        // View Details route - Protected
        path: '/viewdetails/:id',
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:5000/artCraft/${params.id}`);
          if (!response.ok) {
            throw new Error('Item not found');
          }
          return response.json();
        }
      },
      {
        path: '/additem',
        element: <AddItem></AddItem>
      },
      {
        path: '/updateitem/:id',
        element: (
          <PrivateRoute>
            <UpdateItem></UpdateItem>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/artCraft/${params.id}`)
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
