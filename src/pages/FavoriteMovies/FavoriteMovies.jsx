import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

const FavoriteMovies = () => {
    const { user } = useAuth();
    const axios = useAxios();

    const { data: favorites = [], isLoading, refetch } = useQuery({
        queryKey: ['user', user.email],
        queryFn: async () => {
            const res = await axios.get(`/favorites?email=${user.email}`)
            return res.data;
        },
    });

    console.log(favorites);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure you want to remove this movie?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#daaf06",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axios.delete(`/favorites/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Removed!",
                                text: "Your movie has been removed.",
                                icon: "success",
                                confirmButtonColor: "#ffcd07"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

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

                            {isLoading ? (
                                <p className="text-center h-screen">
                                    <span className="loading loading-spinner loading-lg text-primaryColor"></span>
                                </p>
                            ) : (
                                    favorites.length > 0 ? (
                                        favorites.map((movie, index) => (
                                        <tr key={index} className="dark:text-primaryColor">
                                            <td><img src={movie.poster} alt="" className="w-28 rounded-sm" /></td>
                                            <td>{movie.title}</td>
                                            <td>{movie.duration} min</td>
                                            <td>{movie.genre.join(', ')}</td>
                                            <td>{movie.releaseYear}</td>
                                            <td>{movie.rating}</td>
                                            <td> <button onClick={() => handleDelete(movie._id)} className="btn btn-warning rounded-none btn-xs">Remove</button></td>
                                        </tr>
                                    ))
                                ) : (
                                    <p className="text-center col-span-full dark:text-white h-screen">No favorite movies found</p>
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