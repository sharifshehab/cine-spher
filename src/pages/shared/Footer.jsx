import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaBehance } from "react-icons/fa6";
import { Link, Links } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer bg-textColor text-base-content p-10 dark:bg-gray-900 dark:border-t-2 border-primaryColor">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between space-y-7">
                    <aside>
                        <a className="text-3xl text-white dark:text-white">Cine <span className="text-secondaryColor underline">Sphere</span></a>
                        <p className="mt-3 text-white dark:text-white">
                            Cine Sphere.
                            <br />
                            Providing high-quality entertainment from reliable source
                        </p>
                    </aside>
                    {/* logo */}
                    <nav className="flex flex-col space-y-3 text-white dark:text-white">
                        <h6 className="text-primaryColor text-lg underline underline-offset-8 decoration-2 decoration-white">Services</h6>
                        <Link to={'/all-movies'} className="link link-hover">All Movies</Link>
                        <Link to={'/plans'} className="link link-hover">Pricing Plans</Link>
                        
                        {/* TODO */}
                        <a className="link link-hover">Contact</a>
                    </nav>
                    {/* links */}
                    <nav className="flex flex-col space-y-3 text-white dark:text-white">
                        <h6 className="text-primaryColor text-lg underline underline-offset-8 decoration-2 decoration-white">Legal</h6>
                        <Link to={'/faq'} className="link link-hover">FAQ's</Link>
                        <Link to={'/privacy-policy'} className="link link-hover">Privacy Policy</Link>
                        <Link to={'/refund'} className="link link-hover">Refund</Link>
                    </nav>
                    {/* links */}
                    <form>
                        <h6 className="text-primaryColor text-lg underline underline-offset-8 decoration-2 decoration-white dark:text-white">Newsletter</h6>
                        <fieldset className="form-control w-80">
                            <label className="label pl-0">
                                <span className="label-text text-white dark:text-white">Enter your email address</span>
                            </label>
                            <div className="join rounded-none">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn  bg-secondaryColor border-secondaryColor join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                    {/* newsletter */}
                </div>
            </footer>

            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-2">
                <aside className="grid-flow-col items-center">
                    <p className="">
                       Copyright © {new Date().getFullYear()} 
                        <br />
                        All right reserved by Cine Sphere.
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
   
                        {/* social media */}
                        <a href="https://www.facebook.com/svshuvo.4.0" target="_blank">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/sharifshehab" target="_blank">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="https://www.behance.net/onwebdesk" target="_blank">
                            <FaBehance size={20} />
                        </a>
                        <a href="https://www.pinterest.com/onlywebdesk" target="_blank">
                            <FaPinterestP size={20} />
                        </a>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;