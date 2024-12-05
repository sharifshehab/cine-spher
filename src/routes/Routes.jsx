import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AllMovies from "../pages/AllMovies/AllMovies";
import FavoriteMovies from "../pages/FavoriteMovies/FavoriteMovies";
import AddMovie from "../pages/AddMovie/AddMovie";

export const router = createBrowserRouter([

    {
        path: '/', 
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'all-movies',
                element: <AllMovies></AllMovies>
            },
            {
                path: 'add-movie',
                element: <AddMovie></AddMovie>
            },
            {
                path: 'favorite-movies',
                element: <FavoriteMovies></FavoriteMovies>
            },
        ]
    }
]);