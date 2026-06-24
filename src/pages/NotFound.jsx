import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="text-center max-w-xl">

                <h1 className="text-8xl md:text-9xl font-black text-text-secondary/20 font-montserrat">
                    404
                </h1>

                <h2 className="mt-8 text-3xl md:text-4xl font-bold text-text">
                    Oops! This page does not exist.
                </h2>

                <p className="mt-4 text-text-secondary text-sm md:text-[1rem] leading-relaxed">
                    The page you are looking for may have been removed,
                    renamed, or never existed.
                </p>

                <div className="mt-8 flex justify-center gap-4 font-semibold text-[0.9rem]">
                    <Link
                        to="/"
                        className="
                            px-6 py-3
                            rounded-xl
                            bg-surface
                            text-text-gray
                            border border-border
                            hover:border-text-secondary
                            transition
                        "
                    >
                        Back to Home
                    </Link>

                    <Link
                        to="/movie"
                        className="
                            px-6 py-3
                            rounded-xl
                            bg-text-secondary
                            text-background
                            hover:opacity-80
                            transition
                        "
                    >
                        Browse Movies
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;