import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Order from "../Layout/Home/Order";
import PrivateRoutes from "./Private/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoutes><CheckOut /></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path:"/order",
        element:<Order></Order>
      }
    ],
  },
]);

export default router;
