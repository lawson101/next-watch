import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useState, useEffect } from "react";
import { LuTv } from "react-icons/lu";
import { FaFilm } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";

const Navbar = () => {
    const { user } = useAuth();
    const location = useLocation();
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [movieOpen, setMovieOpen] = useState(false);
    const [tvOpen, setTvOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    useEffect(() => {
        if (!hamburgerOpen) {
            setMovieOpen(false);
            setTvOpen(false);
        }
    }, [hamburgerOpen]);

    return (
        <nav className="bg-surface">
            <div className="relative text-text font-semibold max-w-7xl mx-auto px-6 py-2">
                <div className="flex items-center gap-7 text-sm">
                    {/* Brand and Search bar */}
                    <div
                        onClick={() => setHamburgerOpen(false)}
                        className="flex items-center gap-7 flex-1 min-w-0"
                    >
                        <div className="font-bold font-montserrat text-lg text-text-secondary transition duration-300">
                            <Link to="/">n/w</Link>
                        </div>
                        <div className="flex-1">
                            <form className="flex items-center gap-5 border border-border rounded-2xl px-4 bg-background focus-within:border-text-secondary transition duration-300">
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
                        <div className="flex gap-7">
                            <div
                                onMouseOver={() => setMovieOpen(true)}
                                onMouseOut={() => setMovieOpen(false)}
                                className="relative flex items-center gap-3 transition duration-300"
                            >
                                <FaFilm className="text-text-secondary" />
                                <Link
                                    to="/movie"
                                    className={`${location.pathname === "/movie" ? "text-text-secondary" : "hover:text-text-secondary"} transition duration-300`}
                                >
                                    Movies
                                </Link>

                                <div
                                    className={`absolute top-10 left-1/2 -translate-x-1/2 z-1000 w-33 rounded-xl border border-border bg-surface p-5 transition-all duration-300
                                    ${
                                        movieOpen
                                            ? "opacity-100 translate-y-0 visible"
                                            : "opacity-0 -translate-y-2 invisible"
                                    }`}
                                >
                                    <ul className="space-y-3 text-text-gray">
                                        <li className="hover:text-text-secondary transition cursor-pointer">
                                            <Link>Popular</Link>
                                        </li>

                                        <li className="hover:text-text-secondary transition cursor-pointer">
                                            <Link>Top Rated</Link>
                                        </li>

                                        <li className="hover:text-text-secondary transition cursor-pointer">
                                            <Link>Now Playing</Link>
                                        </li>

                                        <li className="hover:text-text-secondary transition cursor-pointer">
                                            <Link>Upcoming</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                onMouseOver={() => setTvOpen(true)}
                                onMouseOut={() => setTvOpen(false)}
                                className="relative flex items-center gap-3 transition duration-300"
                            >
                                <LuTv className="text-text-secondary" />
                                <Link
                                    to="/tv"
                                    className={`${location.pathname === "/tv" ? "text-text-secondary" : "hover:text-text-secondary"} transition duration-300`}
                                >
                                    TV Shows
                                </Link>

                                <div
                                    className={`absolute top-10 left-1/2 -translate-x-1/2 z-1000 w-33 rounded-xl border border-border bg-surface p-5 transition-all duration-300
                                    ${
                                        tvOpen
                                            ? "opacity-100 translate-y-0 visible"
                                            : "opacity-0 -translate-y-2 invisible"
                                    }`}
                                >
                                    <ul className="space-y-3 text-text-gray">
                                        <li className="hover:text-text-secondary transition cursor-pointer">
                                            <Link>Popular</Link>
                                        </li>

                                        <li className="hover:text-text-secondary transition cursor-pointer">
                                            <Link>Top Rated</Link>
                                        </li>

                                        <li className="hover:text-text-secondary transition cursor-pointer">
                                            <Link>Airing Today</Link>
                                        </li>

                                        <li className="hover:text-text-secondary transition cursor-pointer">
                                            <Link>On the Air</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaClapperboard className="text-text-secondary" />
                                <Link
                                    to="/trending"
                                    className={`${location.pathname === "/trending" ? "text-text-secondary" : "hover:text-text-secondary"} transition duration-300`}
                                >
                                    Trending
                                </Link>
                            </div>
                        </div>
                        <div className="h-[20px] w-[2px] bg-text-secondary rounded-xl"></div>
                        {user ? (
                            <div
                                onMouseOver={() => setProfileOpen(true)}
                                onMouseOut={() => setProfileOpen(false)}
                                className="relative"
                            >
                                <Link
                                    to="/profile"
                                    className="bg-background hover:text-text-secondary px-4 py-2 rounded-2xl transition duration-300"
                                >
                                    {user.username}
                                </Link>

                                <div
                                    className={`absolute top-10 left-1/2 -translate-x-1/2 z-1000 w-35 rounded-xl border border-border bg-surface p-5 transition-all duration-300 space-y-4
                                    ${
                                        profileOpen
                                            ? "opacity-100 translate-y-0 visible"
                                            : "opacity-0 -translate-y-2 invisible"
                                    }`}
                                >
                                    <div>
                                        <ul className="space-y-3 text-text-gray">
                                            <li className="flex items-center gap-3 cursor-pointer">
                                                <IoHeart className="text-text-secondary text-[1rem]" />
                                                <Link
                                                    className={`${location.pathname === "/favorites" ? "text-text-secondary" : "hover:text-text-secondary"} transition duration-300`}
                                                    to="/favorites"
                                                >
                                                    Favorites
                                                </Link>
                                            </li>

                                            <li className="flex items-center gap-3 cursor-pointer">
                                                <FaBookmark className="text-text-secondary text-sm" />
                                                <Link
                                                    className={`${location.pathname === "/watchlist" ? "text-text-secondary" : "hover:text-text-secondary"} transition duration-300`}
                                                    to="/watchlist"
                                                >
                                                    Watchlist
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="h-[2px] w-full bg-text-secondary rounded-xl mb-5"></div>

                                    <div>
                                        <Link
                                            to="/"
                                            className="bg-background hover:text-text-secondary px-4 py-2 rounded-2xl transition duration-300 cursor-pointer"
                                        >
                                            Sign Out
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <Link
                                    to="/signin"
                                    className="bg-background hover:text-text-secondary px-4 py-2 rounded-2xl transition duration-300 cursor-pointer"
                                >
                                    Sign In
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setHamburgerOpen(!hamburgerOpen)}
                            className="text-2xl my-2 text-text-secondary"
                        >
                            {hamburgerOpen ? (
                                <FaBars className="transform rotate-135 transition duration-300" />
                            ) : (
                                <FaBars className="transition duration-300" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Dropdown */}
                <div
                    className={`absolute md:hidden mt-3 right-0 w-fit p-4 z-1000 bg-surface rounded-xl transition duration-300"
                    ${
                        hamburgerOpen
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-10 -translate-y-2 invisible"
                    }`}
                >
                    <div className="flex flex-col gap-5 bg-background border border-text-gray py-4 px-6 rounded-xl text-sm">
                        <div>
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <FaFilm className="text-text-secondary" />
                                    <Link
                                        to="/movie"
                                        onClick={() => setHamburgerOpen(false)}
                                        className={`transition duration-300 ${location.pathname === "/movie" && "text-text-secondary"}`}
                                    >
                                        Movies
                                    </Link>
                                </div>
                                <FaChevronDown
                                    onClick={() => setMovieOpen(!movieOpen)}
                                    className={`${movieOpen ? "transform rotate-75 text-text-gray" : "text-text-secondary"} transition duration-300`}
                                />
                            </div>
                            <div
                                className={`${!movieOpen && "hidden"} pt-4 transition duration-300`}
                            >
                                <ul className="space-y-3 text-text-gray">
                                    <li
                                        onClick={() =>
                                            setHamburgerOpen(!hamburgerOpen)
                                        }
                                    >
                                        <Link>Popular</Link>
                                    </li>

                                    <li
                                        onClick={() =>
                                            setHamburgerOpen(!hamburgerOpen)
                                        }
                                    >
                                        <Link>Top Rated</Link>
                                    </li>

                                    <li
                                        onClick={() =>
                                            setHamburgerOpen(!hamburgerOpen)
                                        }
                                    >
                                        <Link>Now Playing</Link>
                                    </li>

                                    <li
                                        onClick={() =>
                                            setHamburgerOpen(!hamburgerOpen)
                                        }
                                    >
                                        <Link>Upcoming</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <LuTv className="text-text-secondary" />
                                    <Link
                                        to="/tv"
                                        onClick={() => setHamburgerOpen(false)}
                                        className={`transition duration-300 ${location.pathname === "/tv" && "text-text-secondary"}`}
                                    >
                                        TV Shows
                                    </Link>
                                </div>
                                <FaChevronDown
                                    onClick={() => setTvOpen(!tvOpen)}
                                    className={`${tvOpen ? "transform rotate-75 text-text-gray" : "text-text-secondary"} transition duration-300`}
                                />
                            </div>
                            <div
                                className={`${!tvOpen && "hidden"} pt-4 transition duration-300`}
                            >
                                <ul className="space-y-3 text-text-gray">
                                    <li
                                        onClick={() =>
                                            setHamburgerOpen(!hamburgerOpen)
                                        }
                                    >
                                        <Link>Popular</Link>
                                    </li>

                                    <li
                                        onClick={() =>
                                            setHamburgerOpen(!hamburgerOpen)
                                        }
                                    >
                                        <Link>Top Rated</Link>
                                    </li>

                                    <li
                                        onClick={() =>
                                            setHamburgerOpen(!hamburgerOpen)
                                        }
                                    >
                                        <Link>Airing Today</Link>
                                    </li>

                                    <li
                                        onClick={() =>
                                            setHamburgerOpen(!hamburgerOpen)
                                        }
                                    >
                                        <Link>On the Air</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3">
                                <FaClapperboard className="text-text-secondary" />
                                <Link
                                    to="/trending"
                                    onClick={() => setHamburgerOpen(false)}
                                    className={`transition duration-300 ${location.pathname === "/trending" && "text-text-secondary"}`}
                                >
                                    Trending
                                </Link>
                            </div>
                        </div>

                        <div className="h-[2px] w-full bg-text-secondary rounded-xl"></div>

                        {user && (
                            <div>
                                <ul className="space-y-4 text-[0.9rem]">
                                    <li
                                        onClick={() => setHamburgerOpen(false)}
                                        className={`flex items-center gap-3 transition duration-300 ${location.pathname === "/favorites" && "text-text-secondary"}`}
                                    >
                                        <IoHeart className="text-text-secondary text-[1rem]" />
                                        <Link to="/favorites">Favorites</Link>
                                    </li>

                                    <li
                                        onClick={() => setHamburgerOpen(false)}
                                        className={`flex items-center gap-3 transition duration-300 ${location.pathname === "/watchlist" && "text-text-secondary"}`}
                                    >
                                        <FaBookmark className="text-text-secondary" />
                                        <Link to="/watchlist">Watchlist</Link>
                                    </li>
                                </ul>
                            </div>
                        )}

                        <div
                            className={`h-[2px] w-full ${!user && "hidden"} bg-text-secondary rounded-xl`}
                        ></div>
                        {user ? (
                            <Link
                                to="/profile"
                                className="text-center px-6 py-2 w-full bg-surface rounded-xl transition duration-300 hover:text-text-secondary"
                            >
                                {user.username}
                            </Link>
                        ) : (
                            <Link
                                to="/signin"
                                onClick={() => setHamburgerOpen(false)}
                                className="text-center px-6 py-2 w-full bg-surface rounded-xl transition duration-300 hover:text-text-secondary"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
