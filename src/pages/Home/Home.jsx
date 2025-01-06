import { Helmet } from "react-helmet-async";
import ComingSoon from "./ComingSoon/ComingSoon";
import FeaturedMovies from "./FeaturedMovies/FeaturedMovies";
import NowInTheCinema from "./NowInTheCinema/NowInTheCinema";
import Slider from "./Slider/Slider";
import Categoryes from "./Categoryes/Categoryes";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {

    return (
        <>
            <Helmet> <title>Cine Sphere - Journey to the Realm of Films</title> </Helmet>
            <section className="py-0">
                <Slider></Slider>
            </section>
            
            <section className="container mx-auto px-5 pt-0">
                <Categoryes></Categoryes>
            </section>

            <section className="container mx-auto px-5">
                <FeaturedMovies></FeaturedMovies>
            </section>

            <section className="container mx-auto px-5">
                <NowInTheCinema></NowInTheCinema>
            </section>

            <section>
                <ComingSoon></ComingSoon>
            </section>

            <section className="pb-52">
                <Testimonial />
            </section>
        </>
    );
};

export default Home;