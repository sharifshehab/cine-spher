import { useEffect, useState } from "react";
import SingleMovie from "../../shared/SingleMovie";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
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
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-10">
                            {
                                featured.length > 0 ? (featured.map(movie => <SingleMovie key={movie._id} movie={movie}></SingleMovie>))
                                    :
                                    (<p className="text-center col-span-full">No movies found</p>)
                            }
                        </div>
                    )
                }

                
          
            
        </div>
    );
};

export default FeaturedMovies;