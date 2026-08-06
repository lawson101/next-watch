import { useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Form from "./Form.jsx";

const Footer = () => {
    const location = useLocation();
    return (
        <footer className="bg-background py-8 px-4 text-text mt-5">
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
                    <h4 className="uppercase mb-4 font-bold text-text-secondary text-sm">
                        Quick Navigation
                    </h4>
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
                    <h4 className="uppercase mb-4 font-bold text-text-secondary text-sm">
                        Wanna keep in touch?
                    </h4>
                    <div className="flex gap-5 justify-center text-text-gray">
                        {[
                            {
                                icon: <FaGithub size={18} />,
                                url: "https://github.com/lawson101",
                            },
                            {
                                icon: <FaLinkedin size={18} />,
                                url: "https://www.linkedin.com/in/lawson-ishikaku-314758370/",
                            },
                            {
                                icon: <FaXTwitter size={18} />,
                                url: "https://twitter.com/_lawson101",
                            },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex p-2 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-text-gray transition-all duration-300 hover:-translate-y-1 hover:border-text-secondary hover:bg-text-secondary/10 hover:text-white"
                            >
                                {social.icon}
                            </a>
                        ))}
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
