import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaBehance } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="footer bg-[#f5f5f5] text-base-content p-10">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between space-y-7">
                    <aside>
                        <a className="text-3xl">Cine <span className="text-secondaryColor underline">Sphere</span></a>
                        <p className="mt-3">
                            ACME Industries Ltd.
                            <br />
                            Providing reliable tech since 1992
                        </p>
                    </aside>
                    {/* logo */}
                    <nav className="flex flex-col space-y-3">
                        <h6 className="footer-title text-base text-secondaryColor">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    {/* links */}
                    <nav className="flex flex-col space-y-3">
                        <h6 className="footer-title text-base text-secondaryColor">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    {/* links */}
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
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

            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <p>
                       Copyright © 2024 
                        <br />
                        All right reserved by Cine Sphere.
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
   
                        {/* social media */}
                        <a>
                            <FaFacebookF size={18} />
                        </a>
                        <a>
                            <FaLinkedinIn size={20} />
                        </a>
                        <a>
                            <FaBehance size={20} />
                        </a>
                        <a>
                            <FaPinterestP size={20} />
                        </a>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;