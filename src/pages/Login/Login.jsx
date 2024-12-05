import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset();
    }

    return (
        <section className="container mx-auto px-5 ">
            <h2 className="text-secondaryColor text-center"><span className="text-textColor">User </span><span className="underline underline-offset-8">Login</span></h2>
            <div className="min-h-80 flex items-center justify-center">
                <div className="w-[500px]">
                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-6">
                            <div className="flex flex-col gap-[5px] w-full">
                                <label>
                                    <span
                                        className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Email
                                    </span>
                                </label>
                                <input type="url" {...register("email", {
                                    required: "Can't leave email empty"
                                })} placeholder="Write your email" className="ps-2 border-[#e5eaf2] border-b outline-none  py-1 focus:border-secondaryColor transition-colors duration-300"
                                />
                                {errors.email && (<span className="text-red-500 text-sm">{errors.email?.message}</span>)}
                            </div>

                            <div className="flex flex-col gap-[5px] w-full">
                                <label >
                                    <span
                                        className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Password
                                    </span>
                                </label>
                                <input type="text" {...register("password", { required: "Can't leave password empty" })} placeholder="Write your password" className="ps-2 border-[#e5eaf2] border-b outline-none py-1 focus:border-secondaryColor transition-colors duration-300"
                                />
                                {errors.password && (<span className="text-red-500 text-sm">{errors.password?.message}</span>)}
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <button type="submit" className='py-3 px-4 bg-gradient-to-b from-primaryColor to-secondaryColor hover:bg-gradient-to-t transition-all duration-300 shadow-lg'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-center">
                <p>Don't have an account? <span className="text-secondaryColor underline underline-offset-4">Register here</span></p>
            </div>
        </section>
    );
};

export default Login;