import { useEffect, useMemo, useState } from "react";
import { displayCards } from "../components/MediaCard.jsx";
import {
    getMediaData,
    getTrendingWeek,
    getTrendingDay,
    filterMedia
} from "../services/tmdb.js";
import { LuTv } from "react-icons/lu";
import { FaFilm } from "react-icons/fa";

const Trending = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [allTrending, setAllTrending] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        async function loadMedia() {
            try {
                setAllTrending([]);
                const response = toggle
                    ? await getTrendingWeek()
                    : await getTrendingDay();
                setAllTrending(filterMedia(getMediaData(response.results)));
                setHasLoaded(true);
            } catch (error) {
                console.error(error);
            }
        }
        loadMedia();
    }, [toggle]);

    const trending = useMemo(() => {
        switch (filter) {
            case "movie":
                return allTrending.filter((m) => m.media_type === "movie");
            case "tv":
                return allTrending.filter((m) => m.media_type === "tv");
            case "all":
                return allTrending;
        }
    }, [allTrending, filter]);

    return (
        <div className="bg-background min-h-screen text-text font-bold">
            <div className="mx-auto max-w-7xl py-10 px-5 sm:px-8 lg:px-10">
                <div className="flex items-center">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => {
                                setFilter(filter === "movie" ? "all" : "movie");
                            }}
                            className="w-fit bg-surface/70 flex items-center gap-2 py-3 px-4 md:py-3 md:px-5 rounded-2xl text-sm"
                        >
                            <FaFilm
                                className={`w-fit  md:text-[1rem] md:text-text-secondary  ${filter === "movie" && "text-text-secondary"} transition duration-300`}
                            />
                            <span
                                className={`hidden md:block ${filter === "movie" && "text-text-secondary"} transition duration-300`}
                            >
                                Movies
                            </span>
                        </button>
                        <button
                            onClick={() => {
                                setFilter(filter === "tv" ? "all" : "tv");
                            }}
                            className="bg-surface/70 flex items-center gap-2 py-3 px-4 md:py-3 md:px-5 rounded-2xl text-sm"
                        >
                            <LuTv
                                className={`md:text-[1rem] md:text-text-secondary ${filter === "tv" && "text-text-secondary"} transition duration-300`}
                            />
                            <span
                                className={`hidden md:block ${filter === "tv" && "text-text-secondary"} transition duration-300`}
                            >
                                TV Shows
                            </span>
                        </button>
                    </div>
                    <div className="flex items-center w-fit h-fit ml-auto text-sm border border-surface rounded-2xl">
                        <button
                            onClick={() => setToggle(false)}
                            className={`${!toggle && "bg-surface/70 text-text-secondary"} px-4 md:px-6 py-2 rounded-2xl transition duration-300`}
                        >
                            Day
                        </button>
                        <button
                            onClick={() => setToggle(true)}
                            className={`${toggle && "bg-surface/70 text-text-secondary"} px-4 md:px-6 py-2 rounded-2xl transition duration-300`}
                        >
                            Week
                        </button>
                    </div>
                </div>

                {hasLoaded ? (
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(185px,1fr))] gap-4 md:gap-6 py-10">
                        {displayCards(trending)}
                    </div>
                ) : (
                    <div className="py-10 px-4 text-text-gray">
                        Give it a sec...
                    </div>
                )}
            </div>
        </div>
    );
};

export default Trending;
