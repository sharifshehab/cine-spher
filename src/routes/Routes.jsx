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
import UpdateMovie from "../pages/UpdateMovie/UpdateMovie";
import PricingPlans from "../pages/PricingPlans/PricingPlans";

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
                path: 'movie-details/:movieId',
                loader: async ({ params }) => {
                    return fetch(`https://cine-sphere-server.vercel.app/movies/${params.movieId}`);
                },
                element: <MovieDetails></MovieDetails>
            },
            {
                path: 'add-movie',
                element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>
            },
            {
                path: 'update-movie/:id',
                loader: async ({ params }) => {
                    return fetch(`https://cine-sphere-server.vercel.app/movies/${params.id}`);
                },
                element: <PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>
            },
            {
                path: 'favorite-movies',
                element: <PrivateRoute><FavoriteMovies></FavoriteMovies></PrivateRoute>
            },
            {
                path: 'plans',
                element: <PricingPlans></PricingPlans>
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