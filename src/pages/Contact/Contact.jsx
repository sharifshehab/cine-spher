import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
// react icons
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset();
    }
    return (
        <>
            <Helmet> <title>Cine Sphere - Contact us</title> </Helmet>
            <section className="container mx-auto px-5 pb-52">
                <h2 className="text-secondaryColor text-center mb-16 text-5xl"><span className="text-textColor dark:text-white">Contact</span> <span className="underline underline-offset-8">Us</span></h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                    <aside className="w-full bg-textColor flex flex-col justify-between px-10 py-12 dark:bg-secondaryColor">
                        <div>
                            <h1 className="text-4xl font-semibold leading-snug text-primaryColor dark:text-textColor">Contact
                                Information</h1>
                            <p className="mt-1 mb-8 text-white">Say something to start a chat!</p>
                        </div>

                        <div className="flex flex-col gap-5 text-primaryColor dark:text-textColor">
                            <p className="flex items-center gap-[8px]">
                                <MdOutlineCall color="#fff"/>
                                +8801709370961
                            </p>
                            <p className="flex items-center break-all gap-[8px]">
                                <MdOutlineEmail color="#fff" />
                                sharifshehabuzzaman@gmail.com
                            </p>
                            <p className="flex items-center gap-[8px]">
                                <IoLocationOutline color="#fff" />
                                East Alipur, Faridpur, Dhaka
                            </p>
                        </div>
                    </aside>

                    <form className="w-full mt-[50px] space-y-6 dark:" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col sm:flex-row items-center gap-12">
                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label>
                                    <span
                                        className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 dark:text-primaryColor">
                                        Name
                                    </span>
                                </label>
                                <input type="text"  {...register("name", {
                                    required: "Can't leave name empty",
                                })} placeholder="Write your name" className="ps-2 bg-transparent border-primaryColor border-b outline-none  py-1 focus:border-textColor transition-colors duration-300 dark:text-white"
                                />
                                {errors.name && (<span className="text-red-500 text-sm">{errors.name?.message}</span>)}
                            </div>

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label >
                                    <span
                                        className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 dark:text-primaryColor">
                                        Email
                                    </span>
                                </label>
                                <input type="email"   {...register("email", { required: "Can't leave email empty" })} placeholder="Write your email" className="ps-2 bg-transparent border-primaryColor border-b outline-none py-1 focus:border-textColor transition-colors duration-300 dark:text-white"
                                />

                                {errors.email && (<span className="text-red-500 text-sm">{errors.email?.message}</span>)}
                            </div>
                        </div>{/* first-row */}
                        {/* message */}
                        <div className="w-full">
                            <label >
                                <span
                                    className="ps-2 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 dark:text-primaryColor">
                                    Summary
                                </span>
                            </label>
                            <textarea
                                type="text"
                                {...register("message", { required: "Can't leave message empty" })}
                                placeholder="Write your message"
                                className="ps-2 bg-transparent border-primaryColor border-b outline-none py-1 focus:border-textColor transition-colors duration-300 w-full  min-h-[200px] mt-2 dark:text-white"
                            />
                            {errors.message && (<span className="text-red-500 text-sm">{errors.message?.message}</span>)}
                        </div>
                        <div className="text-center">
                            <button type="submit" className='py-3 px-4 bg-gradient-to-b from-primaryColor to-secondaryColor hover:bg-gradient-to-t transition-all duration-300 shadow-md'>Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;