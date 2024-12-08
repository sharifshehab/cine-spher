import ComingSoon from "./ComingSoon/ComingSoon";
import FeaturedMovies from "./FeaturedMovies/FeaturedMovies";
import NowInTheCinema from "./NowInTheCinema/NowInTheCinema";
import Slider from "./Slider/Slider";

const Home = () => {

    return (
        <>
            <section className="py-0">
                <Slider></Slider>
            </section>
            
            <section className="container mx-auto px-5">
                <FeaturedMovies></FeaturedMovies>
            </section>

            <section className="container mx-auto px-5">
                <NowInTheCinema></NowInTheCinema>
            </section>

            <section className="pb-0">
                <ComingSoon></ComingSoon>
            </section>
        </>
    );
};

export default Home;