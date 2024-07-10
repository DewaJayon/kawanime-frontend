import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Anime from "./pages/anime.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/anime",
        element: <Anime />,
    },
    {
        path: "/movie",
        element: <Home />,
    },
    {
        path: "/live-action",
        element: <Home />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar />
        <div className="bg-gray-900">
            <RouterProvider router={router} />
        </div>
        <Footer />
    </React.StrictMode>
);
