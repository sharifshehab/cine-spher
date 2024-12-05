
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from 'react-simple-star-rating';

const MovieForm = ({ handleFormSubmit }) => {

    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm();
    const [ratingColor, setRatingColor] = useState(0); // Initial state for rating color
    const ratingValue = watch('rating', 0);

    //  Rating value
    const handleRating = (rate) => {
        setValue('rating', rate);
        setRatingColor(rate);
    }

    const onSubmit = data => {
        handleFormSubmit(data);
        reset();
        setRatingColor(0);
    }

    return (
        <>
            {/* form area */}
            <form className="w-full mt-[50px] space-y-6" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col sm:flex-row items-center gap-12">

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label>
                            <span
                                className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                Movie Poster
                            </span>
                        </label>

                        <input type="url" {...register("poster", {
                            required: "Can't leave movie poster URL empty",
                            pattern: {
                                value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                                message: "Enter a valid URL"
                            }
                        })} placeholder="Past image url" className="ps-2 border-[#e5eaf2] border-b outline-none  py-1 focus:border-secondaryColor transition-colors duration-300"
                        />

                        {errors.poster && (<span className="text-red-500 text-sm">{errors.poster?.message}</span>)}
                    </div>



                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label >
                            <span
                                className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                Movie Title
                            </span>
                        </label>
                        <input type="text" {...register("title", { required: "Can't leave movie title empty", minLength: { value: 5, message: "minimum length is 5" } })} placeholder="Write movie title" className="ps-2 border-[#e5eaf2] border-b outline-none py-1 focus:border-secondaryColor transition-colors duration-300"
                        />

                        {errors.title && (<span className="text-red-500 text-sm">{errors.title?.message}</span>)}
                    </div>
                </div>{/* first-row */}

                <div className="flex flex-col sm:flex-row items-center gap-12">

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label >
                            <span
                                className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                Genre
                            </span>
                        </label>

                        <select {...register("genre", { required: true })} className="p-1 w-full border-[#e5eaf2] border-b focus:border-0 focus:outline-none" defaultValue="">
                            <option disabled value="">Select movie genre</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="animation">Animation</option>
                            <option value="action">Action</option>
                            <option value="horror">Horror</option>
                        </select>
                        {errors.title && (<span className="text-red-500 text-sm">Select movie genre</span>)}
                    </div>

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label >
                            <span
                                className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                Duration
                            </span>
                        </label>
                        <input type="number" {...register("duration", { required: "Can't leave movie duration empty", min: { value: 60, message: "Minimum duration is 60min" } })} placeholder="Provide movie duration" className="ps-2 border-[#e5eaf2] border-b outline-none py-1 focus:border-secondaryColor transition-colors duration-300"
                        />
                        {errors.duration && (<span className="text-red-500 text-sm">{errors.duration?.message}</span>)}
                    </div>
                </div>{/* second-row */}

                <div className="flex flex-col sm:flex-row items-center gap-12">

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label >
                            <span
                                className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                Release Year
                            </span>
                        </label>

                        <select {...register("releaseYear", { required: true })} className="p-1 w-full  focus:border-0 focus:outline-none border-[#e5eaf2] border-b" defaultValue="">
                            <option disabled value="">Select movie year</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                        {errors.title && (<span className="text-red-500 text-sm">Select movie release year</span>)}
                    </div>

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label >
                            <span
                                className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                Rating
                            </span>
                        </label>

                        <input type="hidden" {...register("rating", { required: true })} />
                        <Rating
                            onClick={handleRating}
                            disableFillHover={true}
                            initialValue={ratingColor}
                        />
                        {errors.rating && (<span className="text-red-500 text-sm">Select movie rating</span>)}
                    </div>
                </div>{/* third-row */}

                {/* summary */}
                <div className="w-full">
                    <label >
                        <span
                            className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                            Summary
                        </span>
                    </label>

                    <textarea
                        type="text"
                        {...register("summary", { required: "Can't leave movie summary empty", minLength: { value: 10, message: "minimum length is 10" } })}
                        placeholder="Write something about the movie"
                        className="ps-2 border-[#e5eaf2] border-b outline-none py-1 focus:border-secondaryColor transition-colors duration-300 w-full  min-h-[200px] mt-2"
                    />
                    {errors.summary && (<span className="text-red-500 text-sm">{errors.summary?.message}</span>)}
                </div>
                <div >
                    <button type="submit" className='py-3 px-4 bg-gradient-to-b from-primaryColor to-secondaryColor hover:bg-gradient-to-t transition-all duration-300 shadow-lg'>Add Movie</button>
                </div>
            </form>
        </>
    );
};

export default MovieForm;