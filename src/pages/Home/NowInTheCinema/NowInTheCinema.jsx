import {
    FaHeart,
} from "react-icons/fa";
import { HiMiniShare } from "react-icons/hi2";

import gravity from "../../../assets/gravity.jpg";
import hobbit from "../../../assets/the-hobbit-.jpg";
import intership from "../../../assets/The-Intershipjpg.jpg";
import end from "../../../assets/This-Is-the-End.avif";
import thor from "../../../assets/thor.jpg";
import wwz from "../../../assets/wwz.jpeg";

const NowInTheCinema = () => {
    return (
        <div className="space-y-5">
            <h2 className="text-secondaryColor"><span className="text-textColor dark:text-white">Now In The </span> <span className="underline underline-offset-8">Cinema</span></h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-3">

                <div className="rounded">
                    <div className="grid grid-cols-12 w-full items-center bg-primaryColor text-white">
                        <div className="grid col-span-5 justify-center gap-3 ">
                            <div>
                                <h1 className="text-xl md:text-2xl text-textColor underline underline-offset-4 decoration-white">Gravity</h1>
                                <p className="text-sm text-textColor ">Genre: Sci-Fi | Thriller</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <a href="#" className='py-3 px-4 mt-5 bg-textColor hover:bg-[#303b52] transition-all duration-300 shadow-lg inline-block'>play now</a>
                            </div>
                        </div>

                        <div className="grid col-span-7">
                            <img
                                src={gravity}
                                alt=""
                                className="w-full h-64 object-cover object-left"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full p-4 bg-white">
                        <div className="flex items-center gap-4 "> 
                            <FaHeart size={20}/>
                            <HiMiniShare className="text-[1.4rem] cursor-pointer" size={21} />
                        </div>
                    </div>
                </div> {/* single */}
                <div className="rounded">
                    <div className="grid grid-cols-12 w-full items-center bg-primaryColor text-white ">
                        <div className="grid col-span-5 justify-center gap-3 ">
                            <div>
                                <h1 className="text-xl md:text-2xl text-textColor underline underline-offset-4 decoration-white">World War Z</h1>
                                <p className="text-sm text-textColor ">Genre: Action | Horror</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <a href="#" className='py-3 px-4 mt-5 bg-textColor hover:bg-[#303b52] transition-all duration-300 shadow-lg inline-block'>play now</a>
                            </div>
                        </div>

                        <div className="grid col-span-7">
                            <img
                                src={wwz}
                                alt=""
                                className="w-full h-64 cover"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full p-4 bg-white border-l-2 border-primaryColor">
                        <div className="flex items-center gap-4 "> 
                            <FaHeart size={20}/>
                            <HiMiniShare className="text-[1.4rem] cursor-pointer" size={21} />
                        </div>
                    </div>
                </div> {/* single */}
                <div className="rounded">
                    <div className="grid grid-cols-12 w-full items-center bg-primaryColor text-white ">
                        <div className="grid col-span-5 justify-center gap-3 ">
                            <div>
                                <h1 className="text-xl md:text-2xl text-textColor underline underline-offset-4 decoration-white">The Internship</h1>
                                <p className="text-sm text-textColor ">Genre: Comedy</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <a href="#" className='py-3 px-4 mt-5 bg-textColor hover:bg-[#303b52] transition-all duration-300 shadow-lg inline-block'>play now</a>
                            </div>
                        </div>

                        <div className="grid col-span-7">
                            <img
                                src={intership}
                                alt=""
                                className="w-full h-64 cover"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full p-4 bg-white border-l-2 border-primaryColor">
                        <div className="flex items-center gap-4 "> 
                            <FaHeart size={20}/>
                            <HiMiniShare className="text-[1.4rem] cursor-pointer" size={21} />
                        </div>
                    </div>
                </div> {/* single */}
                <div className="rounded">
                    <div className="grid grid-cols-12 w-full items-center bg-primaryColor text-white ">
                        <div className="grid col-span-5 justify-center gap-3 ">
                            <div>
                                <h1 className="text-xl md:text-2xl text-textColor underline underline-offset-4 decoration-white">This Is the End</h1>
                                <p className="text-sm text-textColor ">Genre: Comedy | Fantasy</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <a href="#" className='py-3 px-4 mt-5 bg-textColor hover:bg-[#303b52] transition-all duration-300 shadow-lg inline-block'>play now</a>
                            </div>
                        </div>

                        <div className="grid col-span-7">
                            <img
                                src={end}
                                alt=""
                                className="w-full h-64 cover"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full p-4 bg-white">
                        <div className="flex items-center gap-4 "> 
                            <FaHeart size={20}/>
                            <HiMiniShare className="text-[1.4rem] cursor-pointer" size={21} />
                        </div>
                    </div>
                </div> {/* single */}
                <div className="rounded">
                    <div className="grid grid-cols-12 w-full items-center bg-primaryColor text-white ">
                        <div className="grid col-span-5 justify-center gap-3 ">
                            <div>
                                <h1 className="text-xl md:text-2xl text-textColor underline underline-offset-4 decoration-white">Thor</h1>
                                <p className="text-sm text-textColor ">Genre: Action | Adventure </p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <a href="#" className='py-3 px-4 mt-5 bg-textColor hover:bg-[#303b52] transition-all duration-300 shadow-lg inline-block'>play now</a>
                            </div>
                        </div>

                        <div className="grid col-span-7">
                            <img
                                src={thor}
                                alt=""
                                className="w-full h-64 cover"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full p-4 bg-white border-l-2 border-primaryColor">
                        <div className="flex items-center gap-4 "> 
                            <FaHeart size={20}/>
                            <HiMiniShare className="text-[1.4rem] cursor-pointer" size={21} />
                        </div>
                    </div>
                </div> {/* single */}
                <div className="rounded">
                    <div className="grid grid-cols-12 w-full items-center bg-primaryColor text-white ">
                        <div className="grid col-span-5 justify-center gap-3 ">
                            <div>
                                <h1 className="text-xl md:text-2xl text-textColor underline underline-offset-4 decoration-white">The Hobbit</h1>
                                <p className="text-sm text-textColor ">Genre: Adventure | Fantasy</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <a href="#" className='py-3 px-4 mt-5 bg-textColor hover:bg-[#303b52] transition-all duration-300 shadow-lg inline-block'>play now</a>
                            </div>
                        </div>

                        <div className="grid col-span-7">
                            <img
                                src={hobbit}
                                alt=""
                                className="w-full h-64 cover"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full p-4 bg-white border-l-2 border-primaryColor">
                        <div className="flex items-center gap-4 "> 
                            <FaHeart size={20}/>
                            <HiMiniShare className="text-[1.4rem] cursor-pointer" size={21} />
                        </div>
                    </div>
                </div> {/* single */}
      

            </div>

        </div>
    );
};

export default NowInTheCinema;