import { Link, useLocation } from "react-router-dom";
import { LuTv } from "react-icons/lu";
import { FaFilm } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-surface">
            <div className="relative text-text font-semibold max-w-7xl mx-auto px-6 py-2">
                <div className="flex items-center justify-between gap-7 text-sm">
                    {/* Brand and Search bar */}
                    <div className="flex items-center gap-7 flex-1 min-w-0">
                        <div className="font-bold font-montserrat text-lg text-text-secondary transition duration-300">
                            <Link to="/">n/w</Link>
                        </div>
                        <div className="flex-1">
                            <form className="flex items-center border border-border rounded-xl px-4 bg-background">
                                <input
                                    type="text"
                                    id="search"
                                    placeholder="Search..."
                                    className="w-full py-2 border-none focus:outline-none"
                                />
                                <button type="submit">
                                    <LuSearch className="text-lg text-text-secondary" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center gap-7">
                        <div className="h-[20px] w-[2px] bg-text-secondary rounded-xl"></div>
                        <div className="flex gap-7">
                            <div
                                className={`flex items-center gap-3 ${location.pathname === "/movie" ? "text-text-secondary" : "hover:text-text-secondary"} transition duration-300`}
                            >
                                <FaFilm className="text-text-secondary" />
                                <Link to="/movie">Movies</Link>
                            </div>
                            <div
                                className={`flex items-center gap-3 ${location.pathname === "/tv" ? "text-text-secondary" : "hover:text-text-secondary"} transition duration-300`}
                            >
                                <LuTv className="text-text-secondary" />
                                <Link to="/tv">TV Shows</Link>
                            </div>
                            <div
                                className={`flex items-center gap-3 ${location.pathname === "/trending" ? "text-text-secondary" : "hover:text-text-secondary"} transition duration-300`}
                            >
                                <Link to="/trending">Trending</Link>
                            </div>
                        </div>
                        <div className="h-[20px] w-[2px] bg-text-secondary rounded-xl"></div>
                        <div className="flex gap-5">
                            <Link
                                to="/signin"
                                className="bg-background hover:text-text-secondary px-4 py-2 rounded-2xl transition duration-300"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>

                    {/* Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-2xl text-text-secondary my-2"
                        >
                            {isOpen ? <FaBars className="transform rotate-135 transition duration-300" /> : <FaBars className="transition duration-300"/>}
                        </button>
                    </div>
                </div>

                {/* Dropdown */}
                {isOpen && (
                    <div className="absolute md:hidden mt-3 right-0 w-fit p-4 bg-surface rounded-xl">
                        <div className="flex flex-col items-center gap-5 bg-background border border-text-gray py-4 px-6 rounded-xl text-sm">
                            <Link
                                to="/movies"
                                onClick={() => setIsOpen(false)}
                                className="transition duration-300 hover:text-text-secondary"
                            >
                                Movies
                            </Link>

                            <Link
                                to="/tv"
                                onClick={() => setIsOpen(false)}
                                className="transition duration-300 hover:text-text-secondary"
                            >
                                TV Shows
                            </Link>

                            <Link
                                to="/trending"
                                onClick={() => setIsOpen(false)}
                                className="transition duration-300 hover:text-text-secondary"
                            >
                                Trending
                            </Link>

                            <div className="h-[2px] w-full bg-text-secondary rounded-xl"></div>

                            <Link
                                to="/signin"
                                onClick={() => setIsOpen(false)}
                                className="text-center px-6 py-2 bg-surface rounded-xl transition duration-300 hover:text-text-secondary"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
