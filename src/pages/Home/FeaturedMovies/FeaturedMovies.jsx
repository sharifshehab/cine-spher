import { useEffect, useState } from "react";
import SingleMovie from "../../shared/SingleMovie";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import { data } from "react-router-dom";

const FeaturedMovies = () => {
    const axios = useAxios();
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/movies?limit=6')
            .then(data => {
                setFeatured(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: 'An error occurred while loading the featured movies',
                    icon: "error",
                    customClass: {
                        confirmButton: 'alert-confirm-btn'
                    }
                });
            });
    },[])

    return (
        <div className="space-y-5">
            <h2 className="text-secondaryColor"><span className="text-textColor dark:text-white">Featured</span> <span className="underline underline-offset-8">Movies</span></h2>
            
                {loading ? (<p className="text-center"><span className="loading loading-spinner loading-lg text-primaryColor"></span></p>)
                    : (
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-8">
                            {
                                featured.length > 0 ? (featured.map(movie => <SingleMovie key={movie._id} movie={movie}></SingleMovie>))
                                    :
                                    (<p className="text-center col-span-full">No movies found</p>)
                            }
                        </div>
                    )
            }
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
        </div>
    );
};

export default FeaturedMovies;