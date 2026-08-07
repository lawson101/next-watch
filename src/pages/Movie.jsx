import { useEffect, useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import {
    getPopularMovies,
    getTopRatedMovies,
    getNowPlayingMovies,
    getUpcomingMovies,
    getMediaData,
    filterMedia,
} from "../services/tmdb.js";
import { displayCards } from "../components/MediaCard.jsx";
import MediaCarousel from "../components/MediaCarousel.jsx";

const Movie = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        async function loadMedia() {
            await Promise.all([
                getPopularMovies(),
                getTopRatedMovies(),
                getNowPlayingMovies(),
                getUpcomingMovies(),
            ]).then(([result1, result2, result3, result4]) => {
                setPopularMovies(filterMedia(getMediaData(result1?.results)));
                setTopRatedMovies(filterMedia(getMediaData(result2?.results)));
                setNowPlayingMovies(
                    filterMedia(getMediaData(result3?.results)),
                );
                setUpcomingMovies(filterMedia(getMediaData(result4?.results)));
            });
        }
        loadMedia();
    }, []);

    return (
        <div className="min-h-screen text-text max-[475px]:px-4 px-7 md:px-8 py-8 space-y-8 md:space-y-10">
            <div>
                <Link to="popular/" className="flex items-center group text-text-secondary mb-5">
                    <h3 className="font-bold md:text-xl">Popular Movies</h3>
                    <LuChevronRight className="text-xl md:text-2xl group-hover:text-text-gray transition duration-300" />
                </Link>
                <MediaCarousel>{displayCards(popularMovies, 8)}</MediaCarousel>
            </div>
            <div>
                <Link to="top_rated/" className="flex items-center group text-text-secondary mb-5">
                    <h3 className="font-bold md:text-xl">Top Rated Movies</h3>
                    <LuChevronRight className="text-xl md:text-2xl group-hover:text-text-gray transition duration-300" />
                </Link>
                <MediaCarousel>{displayCards(topRatedMovies, 8)}</MediaCarousel>
            </div>
            <div>
                <Link to="now_playing/" className="flex items-center group text-text-secondary mb-5">
                    <h3 className="font-bold md:text-xl">Now Playing Movies</h3>
                    <LuChevronRight className="text-xl md:text-2xl group-hover:text-text-gray transition duration-300" />
                </Link>
                <MediaCarousel>{displayCards(nowPlayingMovies, 8)}</MediaCarousel>
            </div>
            <div>
                <Link to="upcoming/" className="flex items-center group text-text-secondary mb-5">
                    <h3 className="font-bold md:text-xl">Upcoming Movies</h3>
                    <LuChevronRight className="text-xl md:text-2xl group-hover:text-text-gray transition duration-300" />
                </Link>
                <MediaCarousel>{displayCards(upcomingMovies, 8)}</MediaCarousel>
            </div>
        </div>
    );
};

export default Movie;
