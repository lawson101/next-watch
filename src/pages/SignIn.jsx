import { Link } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-background text-text grid grid-cols-1 lg:grid-cols-2 lg:gap-40 gap-10 py-12 px-8 md:px-12 lg:px-22 font-bold">
            <div className="space-y-12">
                <div className="space-y-3">
                    <div className="font-bold text-3xl">Welcome Back!</div>
                    <p className="text-text-gray">It's been a while...</p>
                </div>

                <div>
                    <form className="mt-4 space-y-5 text-sm w-full">
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="johndoe@example.com"
                                className="block w-full p-3 rounded-2xl border border-border bg-surface mt-4 focus:outline-none focus:ring focus:ring-text-secondary/50 transition duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <div className="w-full flex items-center gap-5 px-3 mt-4 rounded-2xl border border-border bg-surface focus-within:border-text-secondary/50 transition duration-300">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="********"
                                    className="flex-1 bg-transparent py-3 focus:outline-none"
                                    required
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowPassword(!showPassword);
                                    }}
                                    className="text-xl"
                                >
                                    {showPassword ? <FiEye /> : <FiEyeOff />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full border border-border text-text py-2.5 rounded-2xl bg-background hover:text-text-secondary transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-surface"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="text-[1rem]">
                    Don't have an account?
                    <Link
                        to="/signup"
                        className="text-text-gray hover:text-text-secondary transition duration-300"
                    >
                        {" "}
                        Sign Up!
                    </Link>
                </div>
            </div>
            <div>
                <div className="text-xl mb-7">Get access to...</div>

                <ul className="space-y-5">
                    <li className="space-y-3">
                        <div className="flex items-center gap-3 text-lg">
                            <div className="h-[25px] w-[3px] bg-text-secondary rounded-2xl"></div>
                            <div>Watchlist</div>
                        </div>
                        <p className="text-text-gray text-[0.9rem] md:text-[1rem] font-light">
                            Save movies you'd like to watch later.
                        </p>
                    </li>
                    <li className="space-y-3">
                        <div className="flex items-center gap-3 text-lg">
                            <div className="h-[25px] w-[3px] bg-text-secondary rounded-2xl"></div>
                            <div>Favorites</div>
                        </div>
                        <p className="text-text-gray text-[0.9rem] md:text-[1rem] font-light">
                            Keep the movies that really caught your attention.
                        </p>
                    </li>
                    <li className="space-y-3">
                        <div className="flex items-center gap-3 text-lg">
                            <div className="h-[25px] w-[3px] bg-text-secondary rounded-2xl"></div>
                            <div>Cross-Device Sync</div>
                        </div>
                        <p className="text-text-gray text-[0.9rem] md:text-[1rem] font-light">
                            Access personal data across devices with ease.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SignIn;
