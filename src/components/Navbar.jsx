import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="h-10">
            <div className="flex justify-around">
                <div>
                    <Link to="/">
                        next-watch/
                    </Link>
                </div>

                <div>
                    <Link to="/library">Movie Library</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
