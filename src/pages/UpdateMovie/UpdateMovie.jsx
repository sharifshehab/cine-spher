import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import MovieForm from "../shared/MovieForm";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateMovie = () => {
    const axios = useAxios();
    const preData = useLoaderData();
    const id = preData[0]._id;
    const navigate = useNavigate();

    const updateMovie = async (data) => {

        const movie = {
            title: data.title,
            poster: data.poster,
            genre: data.genre,
            duration: data.duration,
            releaseYear: data.releaseYear,
            rating: data.rating,
            summary: data.summary
        }
        console.log('new data', movie);

        try {
            const response = await axios.put(`/movies/${id}`, movie);
            Swal.fire({
                title: "Movie Updated",
                text: `has been updated successfully`,
                icon: "success",
                customClass: {
                    confirmButton: 'alert-confirm-btn'
                }
            });

            navigate(-1);

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Error",
                text: `Failed to update in the Database.`,
                icon: "error",
                customClass: {
                    confirmButton: 'alert-confirm-btn'
                }
            });
        }
    }
    return (
        <>
            <Helmet> <title>Cine Sphere - Update Movie</title> </Helmet>

            <section className="container mx-auto px-5 pb-52">
                <h2 className="text-secondaryColor text-center mb-16"><span className="text-textColor dark:text-white">Update</span> <span className="underline underline-offset-8">Movie</span></h2>
                <MovieForm handleFormSubmit={updateMovie} currentData={preData[0]}></MovieForm>
            </section>
        </>
    );
};

export default UpdateMovie;