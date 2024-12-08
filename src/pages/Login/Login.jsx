import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { handleEmailLogin, setLoading, handleGoogleSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const onSubmit = async data => {
        try {
            const userCredential = await handleEmailLogin(data.email, data.password);
            const user = userCredential.user;
            reset();
            navigate(from, { replace: true });
        } catch (error) {
            const errorMessage = error.message;
            Swal.fire({
                title: "There is an error",
                text: `${errorMessage}`,
                icon: "error"
            });
        } finally {
            setLoading(false);
        }
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                Swal.fire({
                    title: "There is an error",
                    text: `${errorMessage}`,
                    icon: "error"
                });
            })
    }

    return (
        <>
            <Helmet> <title>Cine Sphere - User Login</title> </Helmet>

            <section className="container mx-auto px-5 ">
                <h2 className="text-secondaryColor text-center"><span className="text-textColor dark:text-white">User </span><span className="underline underline-offset-8">Login</span></h2>
                <div className="min-h-80 flex items-center justify-center">
                    <div className="w-[500px]">
                        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-6">
                                <div className="flex flex-col gap-[5px] w-full">
                                    <label>
                                        <span
                                            className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 dark:text-primaryColor">
                                            Email
                                        </span>
                                    </label>
                                    <input type="email" {...register("email", {
                                        required: "Can't leave email empty"
                                    })} placeholder="Write your email" className="ps-2 border-[#e5eaf2] border-b outline-none  py-1 focus:border-secondaryColor transition-colors duration-300"
                                    />
                                    {errors.email && (<span className="text-red-500 text-sm">{errors.email?.message}</span>)}
                                </div>

                                <div className="flex flex-col gap-[5px] w-full">
                                    <label >
                                        <span
                                            className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 dark:text-primaryColor">
                                            Password
                                        </span>
                                    </label>
                                    <input type="password" {...register("password", { required: "Can't leave password empty" })} placeholder="Write your password" className="ps-2 border-[#e5eaf2] border-b outline-none py-1 focus:border-secondaryColor transition-colors duration-300"
                                    />
                                    {errors.password && (<span className="text-red-500 text-sm">{errors.password?.message}</span>)}
                                </div>
                                <div className="text-right">
                                    <a href="#" className="dark:text-primaryColor">Forget Password</a>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <button type="submit" className='py-3 px-4 bg-gradient-to-b from-primaryColor to-secondaryColor hover:bg-gradient-to-t transition-all duration-300 shadow-lg'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex items-center flex-col space-y-5">

                    <button onClick={googleSignIn}
                        className="bg-[#3B9DF8] text-white rounded py-[5px] pl-2 pr-4 flex items-center gap-3  hover:bg-blue-500 transition-all duration-200">
                        <div className="p-2 rounded-full bg-white">
                            <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                                alt="google logo"
                                className="w-[23px]" />
                        </div>
                        Sign in with Google
                    </button>

                    <p className="dark:text-white">Don't have an account? <span className="text-secondaryColor underline underline-offset-4"> <Link to={'/registration'}>Register here</Link></span></p>
                </div>
            </section>
        </>
    );
};

export default Login;