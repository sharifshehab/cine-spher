import SingleMovie from "../shared/SingleMovie";

const FavoriteMovies = () => {
    return (
        <section className="container mx-auto px-5">
            <h2 className="text-secondaryColor text-center mb-16 text-5xl"><span className="text-textColor">My</span> <span className="underline underline-offset-8">Favorite Movies</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                <SingleMovie></SingleMovie>
                <SingleMovie></SingleMovie>
                <SingleMovie></SingleMovie>
                <SingleMovie></SingleMovie>
            </div>
        </section>
    );
};

export default FavoriteMovies;