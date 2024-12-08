import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaBehance } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="footer bg-[#f5f5f5] text-base-content p-10 dark:bg-gray-900 dark:border-t-2 border-primaryColor">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between space-y-7">
                    <aside>
                        <a className="text-3xl dark:text-white">Cine <span className="text-secondaryColor underline">Sphere</span></a>
                        <p className="mt-3 dark:text-white">
                            Cine Sphere.
                            <br />
                            Providing high-quality entertainment from reliable source
                        </p>
                    </aside>
                    {/* logo */}
                    <nav className="flex flex-col space-y-3 dark:text-white">
                        <h6 className="footer-title  ">About</h6>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">About us</a>
                    </nav>
                    {/* links */}
                    <nav className="flex flex-col space-y-3 dark:text-white">
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">FAQ's</a>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Refund</a>
                    </nav>
                    {/* links */}
                    <form>
                        <h6 className="footer-title dark:text-white">Newsletter</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text dark:text-white">Enter your email address</span>
                            </label>
                            <div className="join">
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
                       Copyright © 2024 
                        <br />
                        All right reserved by Cine Sphere.
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
   
                        {/* social media */}
                        <a href="https://www.facebook.com/svshuvo.4.0">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/sharifshehab">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="https://www.behance.net/onwebdesk">
                            <FaBehance size={20} />
                        </a>
                        <a href="https://www.pinterest.com/onlywebdesk">
                            <FaPinterestP size={20} />
                        </a>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;