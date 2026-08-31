import { Link } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-background text-text grid grid-cols-1 lg:grid-cols-2 px-7 py-10 md:px-20 md:py-10 gap-15 md:gap-20 lg:gap-30">
            <div className="flex flex-col gap-8 md:gap-10">
                <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold">
                        Ready to Sign Up?
                    </div>
                    <p className="text-sm md:text-base text-text-gray">Took you long enough.</p>
                </div>

                <form className="space-y-5 text-sm w-full">
                    <div>
                        <label className="md:text-[0.95rem] font-bold" htmlFor="username">
                            Username:
                        </label>
                        <input
                            id="username"
                            type="username"
                            name="username"
                            placeholder="johniscool"
                            className="block w-full p-3 md:p-3 rounded-2xl border-[2px] border-border/50 bg-surface mt-3 focus:outline-none focus:border-[2px] focus:border-text-secondary transition duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="md:text-[0.95rem] font-bold" htmlFor="email">
                            Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="johndoe@example.com"
                            className="block w-full p-3 md:p-3 rounded-2xl border-[2px] border-border/50 bg-surface mt-3 focus:outline-none focus:border-[2px] focus:border-text-secondary transition duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="md:text-[0.95rem] font-bold" htmlFor="password">
                            Password:
                        </label>
                        <div className="w-full flex items-center gap-5 px-3 mt-4 rounded-2xl border-[2px] border-border/50 bg-surface focus-within:border-text-secondary transition duration-300">
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
                                className="text-lg md:text-xl"
                            >
                                {showPassword ? <FiEye /> : <FiEyeOff />}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 my-4">
                        <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            required
                        />
                        <p className="text-[0.8rem] md:text-sm">
                            I have read and agree to the
                            <Link className="font-bold text-text-gray hover:text-text-secondary transition duration-300">
                                {" "}
                                Terms & Conditions{" "}
                            </Link>
                            and{" "}
                            <Link className="font-bold text-text-gray hover:text-text-secondary transition duration-300">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full border border-border text-text py-2.5 rounded-2xl bg-background hover:text-text-secondary transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-surface"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-[1rem]">
                    Already have an account?
                    <Link
                        to="/signin"
                        className="text-text-gray font-bold hover:text-text-secondary transition duration-300"
                    >
                        {" "}
                        Sign In!
                    </Link>
                </div>
            </div>
            <div>
                <div className="text-[1.1rem] md:text-[1.15rem] text-text-secondary mb-5">
                    Get access to...
                </div>

                <ul className="space-y-6">
                    <li className="space-y-2">
                        <div className="flex items-center gap-3 text-[1rem] md:text-[1.1rem]">
                            <div className="h-[25px] w-[3px] bg-text-secondary rounded-2xl"></div>
                            <div className="font-bold">Watchlist</div>
                        </div>
                        <p className="text-text-gray text-[0.9rem] md:text-[1rem] font-light">
                            Save movies you'd like to watch later.
                        </p>
                    </li>
                    <li className="space-y-2">
                        <div className="flex items-center gap-3 text-[1rem] md:text-[1.1rem]">
                            <div className="h-[25px] w-[3px] bg-text-secondary rounded-2xl"></div>
                            <div className="font-bold">Favorites</div>
                        </div>
                        <p className="text-text-gray text-[0.9rem] md:text-[1rem] font-light">
                            Keep the movies that really caught your attention.
                        </p>
                    </li>
                    <li className="space-y-2">
                        <div className="flex items-center gap-3 text-[1rem] md:text-[1.1rem]">
                            <div className="h-[25px] w-[3px] bg-text-secondary rounded-2xl"></div>
                            <div className="font-bold">Cross-Device Sync</div>
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

export default SignUp;
