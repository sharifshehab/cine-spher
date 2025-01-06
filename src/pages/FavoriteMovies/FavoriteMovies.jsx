import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const FavoriteMovies = () => {
    const { user } = useAuth();
    const axios = useAxios();
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/favorites?email=${user.email}`)
            .then(response => {
                setFavoriteMovies(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: 'An error occurred while loading your favorite movies',
                    icon: "error",
                    customClass: {
                        confirmButton: 'alert-confirm-btn'
                    }
                });
            });
    }, []);

    return (
        <>
            <Helmet> <title>Cine Sphere - Favorite Movies</title> </Helmet>
            <section className="container mx-auto px-5">
                <h2 className="text-secondaryColor text-center mb-16 text-5xl"><span className="text-textColor dark:text-white">My</span> <span className="underline underline-offset-8">Favorite Movies</span></h2>
                <div className="overflow-x-auto mt-14 pb-32">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-base text-textColor dark:text-white">
                                <th>Image</th>
                                <th>Name</th>
                                <th>Duration</th>
                                <th>Genre</th>
                                <th>Release Year</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}

                            {loading ? (
                                <p className="text-center h-screen">
                                    <span className="loading loading-spinner loading-lg text-primaryColor"></span>
                                </p>
                            ) : (
                                favoriteMovies.length > 0 ? (
                                    favoriteMovies.map((movie, index) => (
                                        <tr key={index} className="dark:text-primaryColor">
                                            <td><img src={movie.poster} alt="" className="w-28 rounded-sm" /></td>
                                            <td>{movie.title}</td>
                                            <td>{movie.duration} min</td>
                                            <td>{movie.genre.join(', ')}</td>
                                            <td>{movie.releaseYear}</td>
                                            <td>{movie.rating}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <p className="text-center col-span-full dark:text-white">No favorite movies found</p>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default FavoriteMovies;