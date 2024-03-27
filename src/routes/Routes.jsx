import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error_404 from "../pages/Error_404";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import Readbooks from "../components/Readbooks";
import Wishlist from "../components/Wishlist";
import PagesToRead from "../pages/PagesToRead";
import SeeAllBooks from "../pages/SeeAllBooks";
import Offers from "../pages/Offers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error_404 />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/our-collection',
                element: <SeeAllBooks />,
                loader: () => fetch('/data.json')
            },
            {
                path: '/listed-books',
                element: <ListedBooks />,
                children: [
                    {
                        index: true,
                        element: <Readbooks />,
                    },
                    {
                        path: 'wishlist',
                        element: <Wishlist />,
                    },
                ]
            },
            {
                path: 'book/:id',
                element: <BookDetails />,
                loader: () => fetch('/data.json')
            },
            {
                path: '/pages-to-read',
                element: <PagesToRead />
            },
            {
                path: '/our-offers',
                element: <Offers />,
                loader: () => fetch('/data.json')
            },
        ]
    },
]);