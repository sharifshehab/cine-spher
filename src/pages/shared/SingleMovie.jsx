import { Link } from "react-router-dom";

const SingleMovie = ({ movie }) => {
    const { _id, title, duration, poster, genre, releaseYear, rating } = movie;
    
    return (
        <div className="shadow-lg bg-[#fff] rounded">
            <div className="flex w-full justify-between items-center p-4">
                <div className="flex items-center gap-4">
                    <div className="">
                        <h2 className="font-[500] text-[1.2rem]">{title}</h2>
                        <p className="text-[#424242] text-[0.9rem]">Duration: {duration} min</p>
                    </div>
                </div>
            </div>

            <img
                src={poster}
                alt=""
                className="w-full h-[250px]"
            />

            <div className="flex flex-col w-full p-4 ">
                <div className="space-y-2 mb-5">
                    <div><h4>Genre: {
                        genre.map((item, idx) => <span key={idx}>{item}{idx < genre.length - 1 && ', '}</span>)
                    }</h4></div>

                    <div><h4>Release Year: {releaseYear}</h4></div>
                    <div><h4>Rating: {rating} stars</h4>
                    </div>
                </div>

                <Link to={`/movie-details/${_id}`}>
                    <button
                        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span
                            className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondaryColor group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="#e7ba0a" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                        <span
                            className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="#fff" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>

                        <span className="text-secondaryColor relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">See Details</span>
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default SingleMovie;