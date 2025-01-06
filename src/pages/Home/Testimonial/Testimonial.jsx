import { FaQuoteLeft, FaRegStar, FaStar, FaQuoteRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import required modules
import { Autoplay } from 'swiper/modules';

// Sample testimonials data
const testimonials = [
    {
        name: "Jhone Dehon",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nesciunt saepe quam doloremque nulla cumque vero sequi, repellendus vel reiciendis? Eos totam quidem ducimus amet, in fuga quia minus ab!",
        image: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
        rating: 4
    },
    {
        name: "Jhone Dehon",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nesciunt saepe quam doloremque nulla cumque vero sequi, repellendus vel reiciendis? Eos totam quidem ducimus amet, in fuga quia minus ab!",
        image: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
        rating: 4
    },
    {
        name: "Jhone Dehon",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nesciunt saepe quam doloremque nulla cumque vero sequi, repellendus vel reiciendis? Eos totam quidem ducimus amet, in fuga quia minus ab!",
        image: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
        rating: 4
    },
    {
        name: "Jhone Dehon",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nesciunt saepe quam doloremque nulla cumque vero sequi, repellendus vel reiciendis? Eos totam quidem ducimus amet, in fuga quia minus ab!",
        image: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
        rating: 4
    },
    {
        name: "Jhone Dehon",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nesciunt saepe quam doloremque nulla cumque vero sequi, repellendus vel reiciendis? Eos totam quidem ducimus amet, in fuga quia minus ab!",
        image: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
        rating: 4
    },
    {
        name: "Jhone Dehon",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nesciunt saepe quam doloremque nulla cumque vero sequi, repellendus vel reiciendis? Eos totam quidem ducimus amet, in fuga quia minus ab!",
        image: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
        rating: 4
    },
    // Add more testimonials as needed
];

const Testimonial = () => {
    return (
        <div className="container mx-auto px-5 space-y-5">
            <h2 className="text-secondaryColor">
                <span className="text-textColor dark:text-white">Visitors</span> <span className="underline underline-offset-8">Testimonial</span>
            </h2>

            <Swiper
                loop={true}
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    
                    0: {
                        slidesPerView: 1, 
                    },
                   
                    768: {
                        slidesPerView: 2, 
                    },
                    
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Autoplay]}
                className="cineTestimonials"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white border-primaryColor border-4 flex flex-col lg:flex-row items-center gap-8 px-6 py-8">
                            <img
                                src={testimonial.image}
                                alt={`${testimonial.name} photo`}
                                className="w-24 h-24 object-cover rounded-full"
                            />

                            <div className="relative">
                                <div className="flex items-center justify-between relative">
                                    <div className="flex flex-col lg:flex-row items-center gap-2">
                                        <h2 className="font-medium text-2xl">{testimonial.name}</h2>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            i < testimonial.rating ?
                                                <FaStar key={i} className="text-[1.1rem] text-white" /> :
                                                <FaRegStar key={i} className="text-white text-[1.1rem]" />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-justify text-sm my-3 text-text">
                                    {testimonial.text}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;
