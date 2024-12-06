import { useEffect, useState } from "react";
import SingleMovie from "../shared/SingleMovie";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const AllMovies = () => {
    const axios = useAxios();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/movies')
            .then(data => {
                setMovies(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: 'An error occurred while loading the movies',
                    icon: "error",
                    customClass: {
                        confirmButton: 'alert-confirm-btn'
                    }
                });
            });
    }, []);


    return (
        <section className="container mx-auto px-5">
            <h2 className="text-secondaryColor text-center mb-16 text-5xl"><span className="text-textColor">All</span> <span className="underline underline-offset-8">Movies</span></h2>

            {loading ? (<p className="text-center"><span className="loading loading-spinner loading-lg text-primaryColor"></span></p>)
                : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                        {
                            movies.length > 0 ? (movies.map(movie => <SingleMovie key={movie._id} movie={movie}></SingleMovie>))
                                :
                                (<p className="text-center col-span-full">No movies found</p>)
                        }
                    </div>
                )
            }

        </section>
    );
};

export default AllMovies;