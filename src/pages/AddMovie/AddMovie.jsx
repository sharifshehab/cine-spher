import MovieForm from "../shared/MovieForm";

const AddMovie = () => {

    const addMovie = (data) => {
        console.log('add movie page',data);
    }

    return (
        <section className="container mx-auto px-5">
            <h2 className="text-secondaryColor text-center mb-16"><span className="text-textColor">Add</span> <span className="underline underline-offset-8">Movie</span></h2>
            <MovieForm handleFormSubmit={addMovie}></MovieForm>
        </section>
    );
};

export default AddMovie;