import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const SingleMovie = ({ movie, setFavoriteMovies, deleteBtn = false }) => {
    const { user } = useAuth();
    const { _id, title, duration, poster, genre, releaseYear, rating } = movie;
    const axios = useAxios();

    const deleteFavoriteMovie = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this movie from your favorite list?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#ffcd07",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/favorites/${id}`)
                    .then(response => {
                        console.log(response.data);
                        Swal.fire({
                            title: "Deleted!",
                            text: `"${title}" has been deleted.`,
                            icon: "success",
                            customClass: {
                                confirmButton: 'alert-confirm-btn'
                            }
                        });

                        axios.get(`/favorites?email=${user.email}`)
                            .then(response => {
                                setFavoriteMovies(response.data);
                            })
                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire({
                            title: "Error",
                            text: 'An error occurred while deleting the movies',
                            icon: "error",
                            customClass: {
                                confirmButton: 'alert-confirm-btn'
                            }
                        });
                    });
            }
        });
    }

    return (
        <div className="shadow-lg bg-[#fff] rounded flex flex-col">
            <div className="p-4 flex-grow">
                <h2 className="font-[500] text-[1.2rem]">{title}</h2>
                <p className="text-[#424242] text-[0.9rem]">Duration: {duration} min</p>
            </div>

            <img
                src={poster}
                alt=""
                className="w-full h-[250px] "
            />

            <div className="flex flex-col w-full p-4 ">
                <div className="space-y-2 mb-5">
                    <div><h4>Genre: {
                        genre.map((item, idx) => <span key={idx}>{item}{idx < genre.length - 1 && ', '}</span>)
                    }</h4></div>

                    <div><h4>Release Year: {releaseYear}</h4></div>
                    <div><h4>Rating: {rating} star</h4>
                    </div>
                </div>

                {
                    deleteBtn ?

                        <button onClick={() => deleteFavoriteMovie(_id)}
                            className="relative w-full inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span
                                className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondaryColor group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="#e7ba0a" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span
                                className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="#fff" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="text-secondaryColor relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Delete Favorite</span>
                        </button>
                        :
                        <Link to={`/movie-details/${_id}`}>
                            <button
                                className="relative w-full inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                <span
                                    className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondaryColor group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="#e7ba0a" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <span
                                    className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="#fff" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <span className="text-secondaryColor relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">See Details</span>
                            </button>
                        </Link>
                }


            </div>
        </div>
    );
};

export default SingleMovie;