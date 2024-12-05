import SingleMovie from "../../shared/SingleMovie";

const FeaturedMovies = () => {

    return (
        <div className="space-y-5">
            <h2 className="text-secondaryColor"><span className="text-textColor">Featured</span> <span className="underline underline-offset-8">Movies</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-10">
                <SingleMovie></SingleMovie>
                <SingleMovie></SingleMovie>
                <SingleMovie></SingleMovie>
                <SingleMovie></SingleMovie>
                <SingleMovie></SingleMovie>
                <SingleMovie></SingleMovie>
            </div>
            
        </div>
    );
};

export default FeaturedMovies;