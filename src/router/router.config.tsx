import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import "../index.css";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import Login from "../components/Login/LoginPopup";

export const Router: any = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <PlaceOrder />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/order",
        element: <PlaceOrder />,
      },
    ],
  },
]);
