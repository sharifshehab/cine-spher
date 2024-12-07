import FeaturedMovies from "./FeaturedMovies/FeaturedMovies";
import Slider from "./Slider/Slider";

const Home = () => {

    return (
        <>
            <section className="pt-0">
                <Slider></Slider>
            </section>
            
            <section className="container mx-auto px-5">
                <FeaturedMovies></FeaturedMovies>
            </section>
        </>
    );
};

export default Home;