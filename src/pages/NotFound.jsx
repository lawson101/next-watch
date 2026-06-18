import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 text-center max-w-lg w-full shadow-lg">
                <LuSearch className="mx-auto text-7xl text-text-secondary" />

                <h1 className="mt-6 text-3xl font-bold text-text">
                    Page Not Found
                </h1>

                <p className="mt-3 text-text-secondary">
                    We couldn't find the page you're looking for. It may have
                    been moved, deleted, or the URL may be incorrect.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-background border border-border text-text font-medium rounded-lg hover:bg-button-hover transition-colors duration-300"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;