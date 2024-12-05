import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Header = () => {

    const menuItems =
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'text-secondaryColor focus:bg-transparent' : 'hover:text-primaryColor hover:bg-transparent'} to={'/'} end>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-secondaryColor focus:bg-transparent' : 'hover:text-primaryColor hover:bg-transparent'} to={'/all-movies'}>All Movies</NavLink></li>

            <li><a>Add Movie</a></li>
            <li><a>My Favorites</a></li>
            <li><a>Extra Route</a></li>
            <li><a>Login</a></li>
            <li><a>Register</a></li>
        </>

    return (
        <header className="bg-[#f5f5f5]">
            <div className="navbar py-4 container mx-auto">
                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <HiMiniBars3BottomLeft  size={25}/>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>

                    <a className="text-3xl">Cine <span className="text-secondaryColor underline">Sphere</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base px-1">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end">

                    <div className="relative group">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full ">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="absolute right-0 hidden bg-base-100 rounded-box z-10 mt-3 w-52 p-4 space-y-1 shadow group-hover:block">
                            <li><a>Name</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;