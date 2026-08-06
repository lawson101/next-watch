import { useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Form from "./Form.jsx";

const Footer = () => {
    const location = useLocation();
    return (
        <footer className="bg-background py-8 px-4 text-text mt-7">
            <div className="container text-center mx-auto md:px-16 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Brand Section */}
                <div>
                    <h3 className="text-2xl text-text-secondary font-bold font-montserrat">
                        n/w
                    </h3>
                    <p className="mt-4 text-[0.9rem] text-text-gray">
                        "Search for movies, explore details, and get linked to
                        where you can watch or download it".
                    </p>
                </div>

                {/* Quick Navigation Links */}
                <div className="font-bold">
                    <h4 className="text-lg mb-4 font-bold">Quick Navigation</h4>
                    <ul className="space-y-3 w-fit mx-auto text-text-gray">
                        <li>
                            <Link
                                to="/movie"
                                className={`${location.pathname === "/movie" ? "text-text-secondary" : "hover:text-text-secondary"} transition duration-300`}
                            >
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/tv"
                                className={`${location.pathname === "/tv" ? "text-text-secondary" : "hover:text-text-secondary"} transition duration-300`}
                            >
                                TV Shows
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/trending"
                                className={`${location.pathname === "/trending" ? "text-text-secondary" : "hover:text-text-secondary"} transition duration-300`}
                            >
                                Trending
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Links & Contact Form */}
                <div className="mb-4 md:col-span-2 lg:col-span-1">
                    <h4 className="text-lg font-bold mb-4">
                        Wanna keep in touch?
                    </h4>
                    <div className="flex gap-5 justify-center text-text-gray">
                        <a
                            href="https://github.com/lawson101"
                            target="_blank"
                            className="hover:text-text-secondary transition duration-300"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/lawson-ishikaku-314758370/"
                            target="_blank"
                            className="hover:text-text-secondary transition duration-300"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://twitter.com/_lawson101"
                            target="_blank"
                            className="hover:text-text-secondary transition duration-300"
                        >
                            <FaXTwitter size={24} />
                        </a>
                    </div>

                    <Form />
                </div>
            </div>
            <div className="mt-8 text-center text-[0.85rem]  md:text-sm">
                <p className="mb-2">
                    This product uses the{" "}
                    <span className="font-bold">TMDB API</span> but is not
                    endorsed or certified by TMDB.
                </p>
                <p>© 2026 next-watch. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
