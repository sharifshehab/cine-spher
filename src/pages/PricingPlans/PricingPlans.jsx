// icons
import { Helmet } from "react-helmet-async";
import { MdDone } from "react-icons/md";


const PricingPlans = () => {
    return (
        <>
            <Helmet> <title>Cine Sphere - Pricing Plans</title> </Helmet>

            <section className="container mx-auto px-5">
                <h2 className="text-secondaryColor text-center mb-16 text-5xl"><span className="text-textColor dark:text-white">Get Our Exiting </span> <span className="underline underline-offset-8">Plans</span></h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    <div className="border border-[#e5eaf2] shadow-lg">
                        <div className="w-full flex items-center justify-center flex-col p-6">
                            <h2 className="text-2xl font-semibold dark:text-white">Standard</h2>
                            <p className="text-[#424242] text-[1rem] dark:text-white">Ideal for growing movie enthusiasts</p>

                            <div className="flex mt-6 gap-1">
                                <h2 className="text-primaryColor text-6xl font-bold ">49.50</h2>
                                <span className="text-[1.2rem] font-[500]">$</span>
                            </div>
                            <p className="text-[#424242] text-[0.9rem] dark:text-white">per month</p>

                            <button className="px-12 py-2 bg-textColor rounded text-white my-6 dark:bg-secondaryColor">
                                Join Now
                            </button>
                        </div>

                        <h3 className="text-[1.2rem] font-[600] text-[#424242] mt-3 px-6 dark:text-white">
                            What you will get?
                        </h3>
                        <div className="flex gap-3 flex-col py-4 px-6">
                            <p className="flex items-center gap-2 text-[#424242] text-[1rem] dark:text-white">
                                <MdDone className="text-primaryColor text-2xl" />Stream on 5 devices
                            </p>
                            <p className="flex items-center gap-2 text-[#424242] text-[1rem] dark:text-white">
                                <MdDone className="text-primaryColor text-2xl" />50GB of cloud storage for your favorite movies
                            </p>
                            <p className="flex items-center gap-2 text-[#424242] text-[1rem] dark:text-white">
                                <MdDone className="text-primaryColor text-2xl" />Priority Email Support
                            </p>
                        </div>
                        <div className="w-full h-[10px] bg-primaryColor"></div>
                    </div>{/* single */}

                    <div className="border border-[#e5eaf2] shadow-lg">
                        <div className="w-full flex items-center justify-center flex-col p-6">
                            <h2 className="text-2xl font-semibold dark:text-white">Premium</h2>
                            <p className="text-[#424242] text-[1rem] dark:text-white">For movie lovers who want the best experience</p>

                            <div className="flex mt-6 gap-1">
                                <h2 className="text-primaryColor text-6xl font-bold ">99.99</h2>
                                <span className="text-[1.2rem] font-[500]">$</span>
                            </div>
                            <p className="text-[#424242] text-[0.9rem] dark:text-white">per month</p>

                            <button className="px-12 py-2 bg-textColor rounded text-white my-6 dark:bg-secondaryColor">
                                Join Now
                            </button>
                        </div>

                        <h3 className="text-[1.2rem] font-[600] text-[#424242] mt-3 px-6 dark:text-white">
                            What you will get?
                        </h3>
                        <div className="flex gap-3 flex-col py-4 px-6">
                            <p className="flex items-center gap-2 text-[#424242] text-[1rem] dark:text-white">
                                <MdDone className="text-primaryColor text-2xl" />Stream on 15 devices
                            </p>
                            <p className="flex items-center gap-2 text-[#424242] text-[1rem] dark:text-white">
                                <MdDone className="text-primaryColor text-2xl" />100GB of cloud storage for your favorite movies
                            </p>
                            <p className="flex items-center gap-2 text-[#424242] text-[1rem] dark:text-white">
                                <MdDone className="text-primaryColor text-2xl" />24/7 Live Chat Support
                            </p>
                        </div>
                        <div className="w-full h-[10px] bg-primaryColor"></div>
                    </div>{/* single */}

                    <div className="border border-[#e5eaf2] shadow-lg">
                        <div className="w-full flex items-center justify-center flex-col p-6">
                            <h2 className="text-2xl font-semibold dark:text-white">Elite</h2>
                            <p className="text-[#424242] text-[1rem] dark:text-white">For the ultimate movie streaming experience</p>

                            <div className="flex mt-6 gap-1">
                                <h2 className="text-primaryColor text-6xl font-bold ">149.99</h2>
                                <span className="text-[1.2rem] font-[500]">$</span>
                            </div>
                            <p className="text-[#424242] text-[0.9rem] dark:text-white">per month</p>

                            <button className="px-12 py-2 bg-textColor rounded text-white my-6 dark:bg-secondaryColor">
                                Join Now
                            </button>
                        </div>

                        <h3 className="text-[1.2rem] font-[600] text-[#424242] mt-3 px-6 dark:text-white">
                            What you will get?
                        </h3>
                        <div className="flex gap-3 flex-col py-4 px-6">
                            <p className="flex items-center gap-2 text-[#424242] text-[1rem] dark:text-white">
                                <MdDone className="text-primaryColor text-2xl" />Stream on unlimited devices
                            </p>
                            <p className="flex items-center gap-2 text-[#424242] text-[1rem] dark:text-white">
                                <MdDone className="text-primaryColor text-2xl" />200GB of cloud storage for your collection
                            </p>
                            <p className="flex items-center gap-2 text-[#424242] text-[1rem] dark:text-white">
                                <MdDone className="text-primaryColor text-2xl" />Ad-free streaming experience
                            </p>
                        </div>
                        <div className="w-full h-[10px] bg-primaryColor"></div>
                    </div>{/* single */}

                </div>
            </section>
        </>
    );
};

export default PricingPlans;