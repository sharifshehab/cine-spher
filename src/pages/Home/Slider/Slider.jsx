import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

import sliderMoana from "../../../assets/slider-moana.png";
import sliderInterstellar from "../../../assets/slider-interstellar.png";
import sliderGodzilla from "../../../assets/slider-godzilla.png";

const Slider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                className="cine-slider"
            >
                <SwiperSlide>
                    <div className='relative flex items-center justify-center'>
                        <img src={sliderMoana} className='w-full h-[450px] md:h-[750px] object-cover' />
                        {/* image overlay */}
                        <div className='absolute inset-0 bg-black bg-opacity-40'></div>

                        <div className='absolute container mx-auto px-5 '>
                            <div className='space-x-2 text-sm'>
                                <span className='text-primaryColor'>
                                    Adventure,
                                </span>
                                <span className='text-primaryColor'>
                                    Comedy,
                                </span>
                                <span className='text-primaryColor'>
                                    Animation
                                </span>
                            </div>

                            <h1 className=' text-2xl md:text-5xl py-4 text-white'>Moana 2</h1>
                            <p className='w-full lg:w-7/12 text-white'>In Ancient Polynesia, when a terrible curse incurred by Maui reaches an impetuous Chieftain's daughter's island, she answers the Ocean's call to seek out the demigod to set things right. Watch Moana 2 to feel the adventure and immerse yourself in the journey!</p>
                            <a href="#" className='py-3 px-4 mt-5 bg-gradient-to-b from-primaryColor to-secondaryColor hover:bg-gradient-to-t transition-all duration-300 shadow-lg inline-block'>play trailer</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative flex items-center justify-center'>
                        <img src={sliderInterstellar} className='w-full h-[450px] md:h-[750px] object-cover' />
                        {/* image over lay */}
                        <div className='absolute inset-0 bg-black bg-opacity-40'></div>

                        <div className='absolute container mx-auto px-5 '>
                            <div className='space-x-2 text-sm'>
                                <span className='text-primaryColor'>
                                    Adventure, 
                                </span>
                                <span className='text-primaryColor'>
                                    Drama,
                                </span>
                                <span className='text-primaryColor'>
                                    Science Fiction
                                </span>
                            </div>

                            <h1 className=' text-2xl md:text-5xl py-4 text-white'>Interstellar</h1>
                            <p className='w-full lg:w-7/12 text-white'>The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage. Watch Interstellar to embark on a breathtaking journey through space and time!</p>
                            <a href="#" className='py-3 px-4 mt-5 bg-gradient-to-b from-primaryColor to-secondaryColor hover:bg-gradient-to-t transition-all duration-300 shadow-lg inline-block'>play trailer</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative flex items-center justify-center'>
                        <img src={sliderGodzilla} className='w-full h-[450px] md:h-[750px] object-cover' />
                        {/* image over lay */}
                        <div className='absolute inset-0 bg-black bg-opacity-40'></div>

                        <div className='absolute container mx-auto px-5 '>
                            <div className='space-x-2 text-sm'>
                                <span className='text-primaryColor'>
                                    Science Fiction,
                                </span>
                                <span className='text-primaryColor'>
                                    Horror,
                                </span>
                                <span className='text-primaryColor'>
                                    Action
                                </span>
                            </div>

                            <h1 className=' text-2xl md:text-5xl py-4 text-white'>Godzilla Minus One</h1>
                            <p className='w-full lg:w-7/12 text-white'>In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror. Witness the epic struggle and experience the relentless battle for survival!</p>
                            <a href="#" className='py-3 px-4 mt-5 bg-gradient-to-b from-primaryColor to-secondaryColor hover:bg-gradient-to-t transition-all duration-300 shadow-lg inline-block'>play trailer</a>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={sliderMoana} className='h-16 w-full object-cover mt-2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderInterstellar} className='h-16 w-full object-cover mt-2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderGodzilla} className='h-16 w-full object-cover mt-2' />
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;