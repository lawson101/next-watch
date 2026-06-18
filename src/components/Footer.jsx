import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Form from "./Form.jsx";

const Footer = () => {
    return (
        <footer className="bg-background text-text font-garet py-8">
            <div className="container text-center mx-auto px-4 md:px-16 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Brand Section */}
                <div>
                    <h3 className="text-2xl font-bold font-montserrat">
                        next-watch
                    </h3>
                    <p className="text-text-secondary mt-4 italic">
                        "Discover movies and TV shows and find where to watch
                        them".
                    </p>
                </div>

                {/* Quick Navigation Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">
                        Quick Navigation
                    </h4>
                    <ul className="space-y-3 w-fit mx-auto">
                        <li>
                            <Link
                                to="/movies"
                                className="transition duration-300 hover:text-text-secondary"
                            >
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/tv"
                                className="transition duration-300 hover:text-text-secondary"
                            >
                                TV Shows
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/trending"
                                className="transition duration-300 hover:text-text-secondary"
                            >
                                Trending
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Links & Contact Form */}
                <div className="mb-4 md:col-span-2 lg:col-span-1">
                    <h4 className="text-lg font-semibold mb-4">
                        Wanna stay connected?
                    </h4>
                    <div className="flex gap-5 justify-center">
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
            <div className="mt-8 text-center text-text-secondary text-sm">
                <p className="mb-2">
                    This product uses the <span className="font-bold">TMDB API</span> but is not endorsed or
                    certified by TMDB.
                </p>
                <p>© 2026 next-watch. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
