import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AllMovies from "../pages/AllMovies/AllMovies";
import FavoriteMovies from "../pages/FavoriteMovies/FavoriteMovies";
import AddMovie from "../pages/AddMovie/AddMovie";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import MovieDetails from "../pages/MovieDetails/MovieDetails";

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
                path: '/movie-details/:movieId',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/movies/${params.movieId}`);
                },
                element: <MovieDetails></MovieDetails>
            },
            {
                path: 'add-movie',
                element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>
            },
            {
                path: 'favorite-movies',
                element: <PrivateRoute><FavoriteMovies></FavoriteMovies></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
        ]
    }
]);