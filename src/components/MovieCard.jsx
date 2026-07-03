import { FaBookmark } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie }) => {
    return (
        <div className="relative h-70 group border border-text-gray text-text rounded-2xl hover:scale-105 transition duration-300">
            <img
                src={movie.poster_url}
                className="w-full h-full rounded-2xl border border-text-gray transition duration-300 cursor-pointer"
                alt={movie.title}
            />
            
            <div className="lg:opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto absolute top-5 right-5 bg-surface/80 p-3 rounded-xl transition duration-300">
                <FaBookmark className="mb-3 hover:text-text-gray transiton duration-300"/>
                <FaStar className="hover:text-text-gray transiton duration-300 text-lg"/>
            </div>

            <div className="absolute bottom-3 left-3 font-semibold text-sm flex items-center gap-2 bg-surface/80 px-3 py-1 rounded-xl">
                <FaStar className="text-text-secondary "/>
                <div>{movie.rating}</div>
            </div>
        </div>
    );
};

export default MovieCard;
