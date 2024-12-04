import SingleFeatureMovie from "./SingleFeatureMovie";


const FeaturedMovies = () => {

    return (
        <div className="space-y-5">
            <h2 className="text-secondaryColor"><span className="text-textColor">Featured</span> <span className="underline underline-offset-8">Movies</span></h2>
            <div className="grid grid-cols-6 gap-10">
                <SingleFeatureMovie></SingleFeatureMovie>
                <SingleFeatureMovie></SingleFeatureMovie>
                <SingleFeatureMovie></SingleFeatureMovie>
                <SingleFeatureMovie></SingleFeatureMovie>
                <SingleFeatureMovie></SingleFeatureMovie>
                <SingleFeatureMovie></SingleFeatureMovie>
            </div>
            
        </div>
    );
};

export default FeaturedMovies;