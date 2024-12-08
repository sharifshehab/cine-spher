import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import SingleMovie from "../shared/SingleMovie";
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
                {loading ? (<p className="text-center"><span className="loading loading-spinner loading-lg text-primaryColor"></span></p>)
                    : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                            {
                                favoriteMovies.length > 0 ? (favoriteMovies.map(movie => <SingleMovie key={movie._id} movie={movie} deleteBtn={true} setFavoriteMovies={setFavoriteMovies}></SingleMovie>))
                                    :
                                    (<p className="text-center col-span-full dark:text-white">No favorite movies found</p>)
                            }
                        </div>
                    )
                }
            </section>
        </>
    );
};

export default FavoriteMovies;