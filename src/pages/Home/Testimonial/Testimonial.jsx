import { FaRegStar, FaStar } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import required modules
import { Autoplay } from 'swiper/modules';

// Sample testimonials data
const testimonials = [
    {
        name: "Jhone D.",
        text: "CineSphere has completely transformed my movie-watching experience! The wide selection of films, from blockbusters to indie gems, ensures I always find something exciting to watch. The interface is user-friendly, and the streaming quality is top-notch!",
        image: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
        rating: 4
    },
    {
        name: "Sarah L.",
        text: "I love how CineSphere curates recommendations based on my viewing history. It feels like the platform understands my tastes perfectly. Plus, the ability to create my own watchlist and share it with friends is a fantastic feature!",
        image: "https://img.freepik.com/free-photo/smiling-child-happiness-with-cute-outdoors-joy-fun-playful-generated-by-artificial-intelligence_188544-101774.jpg?t=st=1736174091~exp=1736177691~hmac=5c7e9cc66d60668b11dd9c0ce1ed6f73bf9d7ce3aaa9a9a7cd7417e14f6b794d&w=1380",
        rating: 5
    },
    {
        name: "Mike R.",
        text: "As a movie buff, CineSphere is my go-to platform. The extensive collection of genres and the ability to filter by release year or rating makes it so easy to discover new favorites. The mobile app is also incredibly convenient for on-the-go streaming.",
        image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1736173875~exp=1736177475~hmac=765144a2e5afbe7076be67df458fac6ce5c6bfbf7b64b03d8ce503f8f53a78b3&w=1380",
        rating: 3
    },
    {
        name: "Emily S.",
        text: "CineSphere offers an unparalleled streaming experience. The loading times are lightning fast, and I've never encountered buffering issues, even during peak hours. The customer service team is also very responsive and helpful!",
        image: "https://img.freepik.com/free-photo/pleased-little-caucasian-girl-with-purple-party-hat-putting-hands-chin-isolated-white-wall-with-copy-space_141793-107967.jpg?t=st=1736174145~exp=1736177745~hmac=03284f000c9f5181baa84c8c8f935962450581ea2a13240d4842b36fc0f3c6d6&w=1060",
        rating: 4
    },
    {
        name: "David K.",
        text: "I appreciate CineSphere's commitment to quality. The 4K UHD options and the seamless streaming experience make movie nights at home feel like a trip to the cinema. It's definitely worth the subscription! Happy Watching.",
        image: "https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg?t=st=1736174040~exp=1736177640~hmac=e2fe590fee505898c3bc287ad1624b8db6347893d116c79b7aba7f5ea1358560&w=1380",
        rating: 2
    },
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
                                                <FaStar key={i} className=" text-secondaryColor" /> :
                                                <FaRegStar key={i} className="text-primaryColor" />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-left text-sm my-3 text-text">
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
