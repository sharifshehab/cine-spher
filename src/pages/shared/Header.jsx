import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";


import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";


const Header = () => {
    const { user, handleLogOut, loading } = useAuth();
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    const menuItems =
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'text-secondaryColor focus:bg-transparent' : 'hover:text-primaryColor hover:bg-transparent dark:text-white'} to={'/'} end>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-secondaryColor focus:bg-transparent' : 'hover:text-primaryColor hover:bg-transparent dark:text-white'} to={'/all-movies'}>All Movies</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-secondaryColor focus:bg-transparent' : 'hover:text-primaryColor hover:bg-transparent dark:text-white'} to={'/add-movie'}>Add Movie</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-secondaryColor focus:bg-transparent' : 'hover:text-primaryColor hover:bg-transparent dark:text-white'} to={'/favorite-movies'}>My Favorites</NavLink></li>

            <li><a>Extra Route</a></li>
        </>

    return (
        <header className="bg-[#f5f5f5] dark:bg-gray-900">

            <div className="navbar py-4 container mx-auto px-5">
                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <HiMiniBars3BottomLeft  size={25}/>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>

                    <a className="text-3xl dark:text-white">Cine <span className="text-secondaryColor underline">Sphere</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base px-1">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end space-x-2">

                    {user?.uid ? (<div className="relative group">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {loading ? <span className="loading loading-spinner loading-md text-warning"></span> : <img
                                    alt={user?.displayName}
                                    src={user?.photoURL} />}
                            </div>
                        </div>

                        <div
                            className="px-6 py-3 bg-white rounded-sm boxShadow w-40 absolute top-16 z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300 space-y-3">
                            <div className="underline underline-offset-4 decoration-primaryColor decoration-4"><span>{user?.displayName}</span></div>
                            <button onClick={() => handleLogOut()} className="hover:text-secondaryColor duration-200">Logout</button>
                        </div>
                    </div>) :
                        (<div className="items-center flex">
                        <Link to={'/login'}>
                            <button
                                className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-primaryColor hover:underline transition-all duration-300">Sign
                                in
                            </button>
                        </Link>
                            <span className="text-gray-500">/</span>
                        <Link to={'/registration'}>
                            <button
                                className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-primaryColor hover:underline transition-all duration-300">Register
                            </button>
                        </Link>
                    </div> )
                    }

                    <span className="dark:text-primaryColor">|</span>

                    {/* toggle DarkMode  */}
                    <button onClick={() => darkModeHandler()}>
                        {
                            dark ? <IoMoonOutline size={28} className="text-primaryColor" /> : <IoSunnyOutline size={28}/>
                        }
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;