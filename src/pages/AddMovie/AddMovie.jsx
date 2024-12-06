import MovieForm from "../shared/MovieForm";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useEffect } from "react";

const AddMovie = () => {
    const { user } = useAuth();
    const axios = useAxios();

    const addMovie = async (data) => {

        const movie = {
            email: user.email,
            title: data.title,
            poster: data.poster,
            genre: data.genre,
            duration: data.duration,
            releaseYear: data.releaseYear,
            rating: data.rating,
            summary: data.summary
        }

        try {
            const response = await axios.post('/movies', movie);
            Swal.fire({
                title: "Movie Added",
                text: `${data.title}, has been added successfully`,
                icon: "success",
                customClass: {
                    confirmButton: 'alert-confirm-btn'
                }
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Error",
                text: `Failed to add ${data.title} in the Database.`,
                icon: "error",
                customClass: {
                    confirmButton: 'alert-confirm-btn'
                }
            });
        }
    }




    return (
        <section className="container mx-auto px-5">
            <h2 className="text-secondaryColor text-center mb-16"><span className="text-textColor">Add</span> <span className="underline underline-offset-8">Movie</span></h2>
            <MovieForm handleFormSubmit={addMovie}></MovieForm>
        </section>
    );
};

export default AddMovie;