import { useEffect, useState } from "react";
import SingleMovie from "../shared/SingleMovie";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AllMovies = () => {
    const axios = useAxios();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

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

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
    }


    useEffect(() => {
        axios.get(`/movies?search=${search}`)
            .then(response => {
                setMovies(response.data)
        })
    }, [search])

    return (
        <>
        <Helmet> <title>Cine Sphere - All Movies</title> </Helmet>
        
        <section className="container mx-auto px-5">
            <h2 className="text-secondaryColor text-center mb-16 text-5xl"><span className="text-textColor dark:text-white">All</span> <span className="underline underline-offset-8">Movies</span></h2>

            <form action="#" onSubmit={handleSearch}>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        name="search"
                        placeholder="Search"
                    />
                    <button type="submit" className="flex items-center justify-center h-8 w-8 opacity-70">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </label>
            </form>
            
            {loading ? (<p className="text-center"><span className="loading loading-spinner loading-lg text-primaryColor"></span></p>)
                : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mt-10">
                        {
                            movies.length > 0 ? (movies.map(movie => <SingleMovie key={movie._id} movie={movie}></SingleMovie>))
                                :
                                (<p className="text-center col-span-full">No movies found</p>)
                        }
                    </div>
                )
            }
            </section>
        </>
    );
};

export default AllMovies;