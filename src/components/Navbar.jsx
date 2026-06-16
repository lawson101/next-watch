import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-surface">
            <div className="font-garet text-text text-[0.9rem] max-w-7xl mx-auto px-4 md:px-8 py-3">
                <div className="flex items-center justify-between gap-10">
                    {/* Brand and Search bar */}
                    <div className="flex items-center max-w-2xl items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
                        <div className="font-bold font-montserrat text-[1.1rem]">
                            <Link to="/">next-watch</Link>
                        </div>
                        <div className="flex-1">
                            <form className="flex items-center border border-border rounded-xl px-4 py-1 bg-background">
                                <input
                                    type="text"
                                    id="search"
                                    placeholder="Find your next watch..."
                                    className="w-full py-2 border-none focus:outline-none"
                                />
                                <button type="submit">
                                    <FaSearch className="text-lg" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center gap-10 min-w-fit">
                        <div className="flex gap-10">
                            <div className="flex relative group">
                                <Link to="/movies">Movies</Link>

                                <span className="absolute left-0 top-6.5 h-[2px] w-0 bg-text-secondary rounded-xl transition-all duration-300 group-hover:w-full" />
                            </div>
                            <div className="relative group">
                                <Link to="/tv">TV Shows</Link>

                                <span className="absolute left-0 top-6.5 h-[2px] w-0 bg-text-secondary rounded-xl transition-all duration-300 group-hover:w-full" />
                            </div>
                            <div className="relative group">
                                <Link to="/trending">Trending</Link>

                                <span className="absolute left-0 top-6.5 h-[2px] w-0 bg-text-secondary rounded-xl transition-all duration-300 group-hover:w-full" />
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <Link
                                to="/signin"
                                className="px-6 py-2.5 bg-background border border-border rounded-xl transition duration-300 hover:border-gray-500"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>

                    {/* Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-2xl text-text"
                        >
                            <FaBars />
                        </button>
                    </div>
                </div>

                {/* Dropdown */}
                {isOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-5 bg-background border border-border rounded-xl p-4">
                        <Link to="/movies" onClick={() => setIsOpen(false)}>
                            Movies
                        </Link>

                        <Link to="/tv" onClick={() => setIsOpen(false)}>
                            TV Shows
                        </Link>

                        <Link to="/trending" onClick={() => setIsOpen(false)}>
                            Trending
                        </Link>

                        <Link
                            to="/signin"
                            onClick={() => setIsOpen(false)}
                            className="text-center px-4 py-2 bg-button hover:bg-button-hover rounded-xl transition"
                        >
                            Sign In
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
