
import { BsClockHistory } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineDeleteForever } from "react-icons/md";

// icons
import { IoIosRocket } from "react-icons/io";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaRegDotCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRev } from "react-icons/fa6";

const MovieDetails = () => {
    const singleMovie = useLoaderData();
    const { _id, email, title, poster, duration, genre, releaseYear, rating, summary } = singleMovie[0];

    return (
        <section className="container mx-auto px-5">

            <div className="">

                <div className="bg-[#f5f5f5] grid grid-cols-1 lg:grid-cols-4 rounded">

                    {/* left side */}
                    <div className="flex flex-col p-[15px] lg:p-[20px] gap-[18px] col-span-3">
                        <div className="w-full shadow-md rounded bg-white">
                            <div className="text-center py-6">
                                <h2 className="underline underline-offset-8 decoration-primaryColor">{title}</h2>
                            </div>
                            <img
                                src={poster}
                                alt="icecream"
                                className="w-full"
                            />

                            <div className="p-4">
                                <h3 className="text-3xl underline underline-offset-8 decoration-primaryColor pt-3 pb-5">Summary</h3>
                                <p className="text-gray-700">{summary}</p>
                            </div>

                        </div>

                    </div>{/* left side - end */}

                    {/* right side */}
                    <div
                        className="border-l-2 border-dashed border-gray-200 p-5  flex items-center justify-center gap-7">


                        <div className="border border-[#e5eaf2] p-2 rounded w-full bg-white">
                            <div className="bg-primaryColor rounded p-4 text-center ">
                                <h4 className="text-2xl text-textColor underline underline-offset-8 decoration-white">
                                    Movie Info
                                </h4>
                            </div>

                            <div className="flex flex-col px-8 text-[#424242] mt-6">

                                <p className="flex items-center gap-2 py-3 border-b border-gray-300">
                                    <FaRegDotCircle className="text-[#000]" />
                                    Genre: {genre.map((item, idx) => <span key={idx}>{item}{idx < genre.length - 1 && ', '}</span>)}

                               
                                </p>
                                {/* duration, genre, releaseYear, rating */}
                                <p className="flex items-center gap-2 py-3 border-b border-gray-300">
                                    <FaRegDotCircle className="text-[#000]" />
                                    Duration: {duration } min
                                </p>
                                <p className="flex items-center gap-2 py-3 border-b border-gray-300">
                                    <FaRegDotCircle className="text-[#000]" />
                                    Release Year: {releaseYear }
                                </p>
                                <p className="flex items-center gap-2 py-3 border-b border-gray-300">
                                    <FaRegDotCircle className="text-[#000]" />
                                    Rating: {rating} stars
                                </p>

                            </div>

                            <div className="px-4 my-5 flex items-center justify-between gap-10">

                                {/* left */}

                                <button
                                    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span
                                        className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondaryColor group-hover:h-full"></span>
                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <RiDeleteBin5Line color="#707070" size={20}/>
                                    </span>
                                    
                                    <span
                                        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <RiDeleteBin5Line color="#ffffff" size={20} />
                                    </span>

                                    <span className="text-secondaryColor relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Delete</span>
                                </button>


                                {/* right */}

                                <button
                                    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span
                                        className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondaryColor group-hover:h-full"></span>
                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <FaRev color="#707070 " size={20} />
                                    </span>
                                    <span
                                        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <FaRev color="#ffffff " size={20} />
                                    </span>

                                    <span className="text-secondaryColor relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Update</span>
                                </button>


                            </div>
                        </div>

                    </div>{/* right side - end */}

                </div>

            </div>
        </section>
    );
};

export default MovieDetails;