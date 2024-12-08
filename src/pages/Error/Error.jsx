import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="boxShadow px-10 w-full min-h-screen flex items-center flex-col justify-center rounded-xl">
            <img src="https://i.ibb.co/nP1Cngw/Error-Server-1.png" alt="illustration"
                className="w-full lg:w-[500px]" />
            <h1 className="text-primaryColor text-3xl sm:text-[2.5rem] font-extrabold mt-3 w-full lg:w-[55%] text-center">Thunder
                404 </h1>
            <Link to={'/'}>
                <button
                    className="py-3 px-6 sm:px-8 rounded-full bg-[#fff] border border-[#1C3177] mt-4 flex items-center gap-[10px]">
                    <FaArrowLeftLong /> Back to home
                </button>
            </Link>
         
        </div>
    );
};

export default Error;