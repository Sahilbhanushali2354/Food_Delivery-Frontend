import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/router.config";
import StoreContextProvider from "./context/StoreContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreContextProvider>
    <RouterProvider router={Router}></RouterProvider>
  </StoreContextProvider>
);
