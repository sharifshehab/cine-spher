import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
// icons
import { FaRegDotCircle } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { TfiReload } from "react-icons/tfi"
import { RiDeleteBin2Line } from "react-icons/ri";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const MovieDetails = () => {
    const { user } = useAuth();
    const singleMovie = useLoaderData();
    const axios = useAxios();
    const navigate = useNavigate();
    const location = useLocation();
    const { _id, title, poster, duration, genre, releaseYear, rating, summary } = singleMovie[0];
    const favoriteMovie = {
        email: user?.email,
        poster,
        title,
        genre,
        duration,
        releaseYear,
        rating,
        summary
    }

    const deleteMovie = (id) => {

        if (!user || !user.uid) {
            navigate('/login', { state : {from: location } });
            return;
        } 

        Swal.fire({
            title: "Are you sure you want to delete this movie?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#ffcd07",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/movies/${id}`)
                    .then(response => {
                        console.log(response.data);
                        Swal.fire({
                            title: "Deleted!",
                            text: `"${title}" has been deleted.`,
                            icon: "success",
                            timer: 2300,
                            showConfirmButton: false
                        });
                        navigate('/all-movies');
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

    const addToFavorite = () => {

        if (!user || !user.uid) {
            navigate('/login', { state: { from: location } });
            return;
        } else {
            axios.post('/favorites', favoriteMovie)
                .then(response => {
                    Swal.fire({
                        title: "Added to favorite",
                        text: `${title} has been added to your favorite list.`,
                        icon: "success",
                        timer: 2300,
                        showConfirmButton: false
                    });
                })
        }

     
    }

    return (
        <>
            <Helmet> <title>Cine Sphere - Movie Details</title> </Helmet>

            <section className="container mx-auto px-5 pb-52">
                    <div className="bg-[#f5f5f5]  flex flex-col md:flex-row items-center">

                        {/* left side */}
                        <div className="flex flex-col p-4 lg:p-5 gap-5 basis-5/6">
                            <div className="w-full shadow-md bg-white">
                                <div className="text-center py-6">
                                    <h2 className="underline underline-offset-8 decoration-primaryColor">{title}</h2>
                                </div>
                                <img
                                    src={poster}
                                    alt="icecream"
                                    className="w-full"
                                />

                                <div className="p-4">
                                    <h3 className="text-3xl underline underline-offset-8 decoration-primaryColor pt-3 pb-5">Summary</h3>
                                    <p className="text-gray-700">{summary}</p>
                                </div>

                        </div>
                        
                        <div>
                            <Link to={`/all-movies`}>
                                <button
                                    className="relative w-full inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-primaryColor group">
                                    <span
                                        className="absolute bottom-0 left-0 w-full  transition-all duration-150 ease-in-out bg-textColor group-hover:h-full dark:bg-white"></span>
                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="#fff" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </span>
                                    <span
                                        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="#e7ba0a" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </span>
                                    <span className="text-textColor relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-primaryColor">See All Movies</span>
                                </button>
                            </Link>
                        </div>

                        </div>{/* left side - end */}

                        {/* right side */}
                        <div
                            className="border-l-2 border-dashed border-gray-200 p-5  flex items-center justify-center gap-7">

                            <div className="border border-[#e5eaf2] w-full bg-white p-2 ">

                                <div className="bg-primaryColor p-4 text-center ">
                                    <h4 className="text-2xl text-textColor underline underline-offset-8 decoration-white">
                                        Movie Info
                                    </h4>
                                </div>

                                <div className="flex flex-col px-8 text-[#424242] mt-6">

                                    <p className="flex items-center gap-2 py-3 border-b border-gray-300">
                                        <FaRegDotCircle className="text-[#000]" />
                                        Genre: {genre.map((item, idx) => <span key={idx}>{item}{idx < genre.length - 1 && ', '}</span>)}


                                    </p>

                                    <p className="flex items-center gap-2 py-3 border-b border-gray-300">
                                        <FaRegDotCircle className="text-[#000]" />
                                        Duration: {duration} min
                                    </p>
                                    <p className="flex items-center gap-2 py-3 border-b border-gray-300">
                                        <FaRegDotCircle className="text-[#000]" />
                                        Release Year: {releaseYear}
                                    </p>
                                    <p className="flex items-center gap-2 py-3 border-b border-gray-300">
                                        <FaRegDotCircle className="text-[#000]" />
                                        Rating: {rating} stars
                                    </p>

                                </div>

                                <div className="pb-5">

                                    <div className="my-5 flex items-center justify-between gap-3">
                                        {/* left */}
                                        <button onClick={() => deleteMovie(_id)}
                                            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-gray-50 group">
                                            <span
                                                className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondaryColor group-hover:h-full"></span>
                                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                <RiDeleteBin2Line color="#707070" size={21} />
                                            </span>

                                            <span
                                                className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                <RiDeleteBin2Line color="#ffffff" size={21} />
                                            </span>

                                            <span className="text-secondaryColor relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Delete Movie</span>
                                        </button>

                                        {/* right */}
                                        <Link to={`/update-movie/${_id}`}>
                                            <button
                                                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-gray-50 group">
                                                <span
                                                    className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondaryColor group-hover:h-full"></span>
                                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                    <TfiReload color="#707070 " size={19} />
                                                </span>
                                                <span
                                                    className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                    <TfiReload color="#ffffff " size={19} />
                                                </span>

                                                <span className="text-secondaryColor relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Update Movie</span>
                                            </button>
                                        </Link>
                                    </div>

                                    <button onClick={addToFavorite}
                                        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-gray-50 group w-full">
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondaryColor group-hover:h-full"></span>
                                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                            <MdFavoriteBorder color="#707070 " size={21} />
                                        </span>
                                        <span
                                            className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                            <MdFavoriteBorder color="#ffffff " size={21} />
                                        </span>

                                        <span className="text-center text-secondaryColor relative w-full transition-colors duration-200 ease-in-out group-hover:text-white">Add to Favorite</span>
                                    </button>

                                </div>{/* buttons */}

                            </div>

                        </div>{/* right side - end */}

                    </div>
            </section>
        </>
    );
};

export default MovieDetails;