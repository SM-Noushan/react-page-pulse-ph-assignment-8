import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error_404 from "../pages/Error_404";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error_404 />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('./data.json')
            },
            {
                path: 'book/:id',
                element: <BookDetails />,
                loader: () => fetch('./data.json')
            }
        ]
    },
]);