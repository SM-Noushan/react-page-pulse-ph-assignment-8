import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error_404 from "../pages/Error_404";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error_404 />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    },
]);