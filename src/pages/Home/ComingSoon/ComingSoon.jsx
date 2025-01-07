// react icons
import { FaPlay } from "react-icons/fa";

const ComingSoon = () => {
    return (
        <div className="w-full h-full relative rounded bg-comingSoonBG bg-no-repeat bg-cover py-40">
            {/* image overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-40'></div>

            <div className="container mx-auto px-5 relative">
                {/* header */}
                < header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center lg:mt-3" >
                    <div className=" mt-8 lg:mt-0 w-full lg:w-[50%]">
                        <span className="text-primaryColor border-b block underline underline-offset-4 decoration-4">Coming soon</span>
                        <h1 className="text-4xl md:text-6xl font-semibold leading-snug text-white">Smoking Shadow</h1>
                        <p className="text-slate-300 mt-2">
                            Smoking Shadow is a neo-noir thriller following a private detective drawn into a web of lies while investigating a starlet's disappearance. Haunting visuals, complex characters, and unexpected twists unravel the dark side of truth and deception.</p>
                        <div className="flex items-center flex-wrap gap-[20px] mt-6">
                            <a href="https://www.youtube.com/watch?v=1s188WNEiqw" target="_blank">
                                <button
                                    className="bg-primaryColor py-3 px-4 flex items-center gap-3">
                                    <FaPlay className="text-white bg-textColor rounded-full py-2" size={30} />
                                    Watch Trailer
                                </button>
                            </a>
                        </div>
                    </div>
                </header >
            </div>
        </div >

    );
};

export default ComingSoon;