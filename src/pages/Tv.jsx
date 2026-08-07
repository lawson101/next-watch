import { useEffect, useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import {
    getPopularShows,
    getTopRatedShows,
    getAiringTodayShows,
    getOnAirShows,
    getMediaData,
    filterMedia,
} from "../services/tmdb.js";
import { displayCards } from "../components/MediaCard.jsx";
import MediaCarousel from "../components/MediaCarousel.jsx";

const Tv = () => {
    const [popularShows, setPopularShows] = useState([]);
    const [topRatedShows, setTopRatedShows] = useState([]);
    const [airingTodayShows, setAiringTodayShows] = useState([]);
    const [onAirShows, setOnAirShows] = useState([]);

    useEffect(() => {
        async function loadMedia() {
            await Promise.all([
                getPopularShows(),
                getTopRatedShows(),
                getAiringTodayShows(),
                getOnAirShows(),
            ]).then(([result1, result2, result3, result4]) => {
                setPopularShows(filterMedia(getMediaData(result1?.results)));
                setTopRatedShows(filterMedia(getMediaData(result2?.results)));
                setAiringTodayShows(
                    filterMedia(getMediaData(result3?.results)),
                );
                console.log(result3?.results);
                setOnAirShows(filterMedia(getMediaData(result4?.results)));
            });
        }
        loadMedia();
    }, []);

    return (
        <div className="min-h-screen text-text max-[475px]:px-4 px-7 md:px-8 py-8 space-y-8 md:space-y-10">
            <div>
                <Link to="popular/" className="flex items-center group text-text-secondary mb-5">
                    <h3 className="font-bold md:text-xl">Popular Shows</h3>
                    <LuChevronRight className="text-xl md:text-2xl group-hover:text-text-gray transition duration-300" />
                </Link>
                <MediaCarousel>{displayCards(popularShows, 8)}</MediaCarousel>
            </div>
            <div>
                <Link to="top_rated/" className="flex items-center group text-text-secondary mb-5">
                    <h3 className="font-bold md:text-xl">Top Rated Shows</h3>
                    <LuChevronRight className="text-xl md:text-2xl group-hover:text-text-gray transition duration-300" />
                </Link>
                <MediaCarousel>{displayCards(topRatedShows, 8)}</MediaCarousel>
            </div>
            <div>
                <Link to="airing_today/" className="flex items-center group text-text-secondary mb-5">
                    <h3 className="font-bold md:text-xl">Airing Today Shows</h3>
                    <LuChevronRight className="text-xl md:text-2xl group-hover:text-text-gray transition duration-300" />
                </Link>
                <MediaCarousel>{displayCards(airingTodayShows, 8)}</MediaCarousel>
            </div>
            <div>
                <Link to="on_air/" className="flex items-center group text-text-secondary mb-5">
                    <h3 className="font-bold md:text-xl">On the Air Shows</h3>
                    <LuChevronRight className="text-xl md:text-2xl group-hover:text-text-gray transition duration-300" />
                </Link>
                <MediaCarousel>{displayCards(onAirShows, 8)}</MediaCarousel>
            </div>
        </div>
    );
};

export default Tv;
