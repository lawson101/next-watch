import { Link } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-background text-text grid grid-cols-1 lg:grid-cols-2 lg:gap-40 gap-10 p-12 lg:px-22 font-bold">
            <div className="space-y-8">
                <div className="space-y-3">
                    <div className="font-bold text-3xl">Ready to Sign Up?</div>
                    <p className="text-text-gray">Took you long enough.</p>
                </div>

                <div>
                    <form className="mt-4 space-y-4 text-sm w-full">
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                                id="username"
                                type="username"
                                name="username"
                                placeholder="johniscool"
                                className="block w-full p-3 rounded-xl border border-border bg-surface mt-4 focus:outline-none focus:ring focus:ring-text-secondary transition duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="johndoe@example.com"
                                className="block w-full p-3 rounded-xl border border-border bg-surface mt-4 focus:outline-none focus:ring focus:ring-text-secondary transition duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <div className="w-full flex items-center gap-5 px-3 mt-4 rounded-xl border-2 border-border bg-surface focus-within:border-text-secondary transition duration-300">
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

                        <div className="flex items-center gap-3 my-5">
                            <input type="checkbox" name="terms" id="terms" required/>
                            <p>
                                I have read and agree to the
                                <Link className="text-text-gray hover:text-text-secondary transition duration-300"> Terms & Conditions </Link>
                                and <Link className="text-text-gray hover:text-text-secondary transition duration-300">Privacy Policy</Link>.
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="w-full border border-border text-text py-2.5 rounded-lg bg-background hover:text-text-secondary transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-surface"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="text-[1rem]">
                    Already have an account?
                    <Link
                        to="/signin"
                        className="text-text-gray hover:text-text-secondary transition duration-300"
                    >
                        {" "}
                        Sign In!
                    </Link>
                </div>
            </div>
            <div>
                <div className="text-xl mb-7">Get access to...</div>

                <ul className="space-y-5">
                    <li className="space-y-3">
                        <div className="flex items-center gap-3 text-lg">
                            <div className="h-[25px] w-[3px] bg-text-secondary rounded-xl"></div>
                            <div>Watchlist</div>
                        </div>
                        <p className="text-text-gray text-[0.9rem] md:text-[1rem]">
                            Save movies you'd like to watch later.
                        </p>
                    </li>
                    <li className="space-y-3">
                        <div className="flex items-center gap-3 text-lg">
                            <div className="h-[25px] w-[3px] bg-text-secondary rounded-xl"></div>
                            <div>Favorites</div>
                        </div>
                        <p className="text-text-gray text-[0.9rem] md:text-[1rem]">
                            Keep the movies that really caught your attention.
                        </p>
                    </li>
                    <li className="space-y-3">
                        <div className="flex items-center gap-3 text-lg">
                            <div className="h-[25px] w-[3px] bg-text-secondary rounded-xl"></div>
                            <div>Cross-Device Sync</div>
                        </div>
                        <p className="text-text-gray text-[0.9rem] md:text-[1rem]">
                            Access personal data across devices with ease.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SignUp;
