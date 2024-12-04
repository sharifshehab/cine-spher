import FeaturedMovies from "./FeaturedMovies/FeaturedMovies";
import Slider from "./Slider/Slider";

const Home = () => {

    return (
        <>
            <section className="mt-0">
                <Slider></Slider>
            </section>
            <main className="container mx-auto">
                <section>
                    <FeaturedMovies></FeaturedMovies>
                </section>
            </main>
        </>
  
    );
};

export default Home;