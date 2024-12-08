import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Registration = () => {
    const { handleRegister, setUserNameAndPhoto, handleGoogleSignIn } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        const email = data.email;
        const name = data.name;
        const photo = data.photo;
        const password = data.password;

        handleRegister(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setUserNameAndPhoto(name, photo)
                    .then(() => {
                        Swal.fire({
                            title: "<strong>Registration Successful</strong>",
                            icon: "success",
                            html: `
                                    <b>Your account has been created successfully.</b>
                                    `,
                            showCloseButton: false,
                            showConfirmButton: false,
                            timer: 2000
                        }).then(() => {
                            navigate('/');
                        });
                        reset();
                    }).catch((error) => {
                        Swal.fire({
                            title: "There is an error",
                            text: `${error}`,
                            icon: "error"
                        });
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    title: "There is an error",
                    text: `${errorMessage}`,
                    icon: "error"
                });
            });
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                navigate('/');
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
            <Helmet> <title>Cine Sphere - User Registration</title> </Helmet>
            <section className="container mx-auto px-5">
                <h2 className="text-secondaryColor text-center"><span className="text-textColor dark:text-white">User </span><span className="underline underline-offset-8">Register</span></h2>

                <form className="w-full mt-[50px] space-y-6" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col sm:flex-row items-center gap-12">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
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
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label >
                                <span
                                    className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 dark:text-primaryColor">
                                    Name
                                </span>
                            </label>
                            <input type="text" {...register("name", { required: "Can't leave name empty" })} placeholder="Write your name" className="ps-2 border-[#e5eaf2] border-b outline-none py-1 focus:border-secondaryColor transition-colors duration-300"
                            />
                            {errors.name && (<span className="text-red-500 text-sm">{errors.name?.message}</span>)}
                        </div>
                    </div>{/* first-row */}

                    <div className="flex flex-col sm:flex-row items-center gap-12">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label>
                                <span
                                    className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 dark:text-primaryColor">
                                    Photo
                                </span>
                            </label>
                            <input type="url" {...register("photo", {
                                required: "Can't leave photo empty",
                                pattern: {
                                    value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                                    message: "Enter a valid URL"
                                }
                            })} placeholder="Past photo URL" className="ps-2 border-[#e5eaf2] border-b outline-none  py-1 focus:border-secondaryColor transition-colors duration-300"
                            />
                            {errors.photo && (<span className="text-red-500 text-sm">{errors.photo?.message}</span>)}
                        </div>
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label >
                                <span
                                    className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 dark:text-primaryColor">
                                    Password
                                </span>
                            </label>
                            <input type="password" {...register("password", {
                                required: "Can't leave password empty", pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                    message: "Password must have an uppercase letter, lowercase letter and at least 6 character"
                                }
                            })} placeholder="Write your password" className="ps-2 border-[#e5eaf2] border-b outline-none py-1 focus:border-secondaryColor transition-colors duration-300"
                            />
                            {errors.password && (<span className="text-red-500 text-sm">{errors.password?.message}</span>)}
                        </div>
                    </div>{/* second-row */}

                    <div className="text-center">
                        <button type="submit" className='py-3 px-4 bg-gradient-to-b from-primaryColor to-secondaryColor hover:bg-gradient-to-t transition-all duration-300 shadow-lg'>Register</button>
                    </div>
                </form>

                <div className="flex items-center flex-col space-y-5 mt-7">

                    <button onClick={googleSignIn}
                        className="bg-[#3B9DF8] text-white rounded py-[5px] pl-2 pr-4 flex items-center gap-3  hover:bg-blue-500 transition-all duration-200">
                        <div className="p-2 rounded-full bg-white">
                            <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                                alt="google logo"
                                className="w-[23px]" />
                        </div>
                        Sign in with Google
                    </button>

                    <p className="dark:text-white">Already have an account? <span className="text-secondaryColor underline underline-offset-4"> <Link to={'/login'}>Login here</Link></span></p>
                </div>
            </section>
        </>
    );
};

export default Registration;