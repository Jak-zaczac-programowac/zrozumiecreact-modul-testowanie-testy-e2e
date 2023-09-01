import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { Favourites } from "./views/Favourites/Favourites.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./views/Cart/Cart.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Cart />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
