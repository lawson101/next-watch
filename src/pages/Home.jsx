import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    getTrendingDay,
    getTrendingWeek,
    getPopularMovies,
    getTopRatedMovies,
    getPopularShows,
    getTopRatedShows,
    getMediaData,
    filterMedia,
} from "../services/tmdb.js";
import { displayCards } from "../components/MediaCard.jsx";
import MediaCarousel from "../components/MediaCarousel.jsx";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { LuTv } from "react-icons/lu";
import { FaFilm } from "react-icons/fa";

const Home = () => {
    const [trendingDay, setTrendingDay] = useState([]);
    const [trendingWeek, setTrendingWeek] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [popularShows, setPopularShows] = useState([]);
    const [topRatedShows, setTopRatedShows] = useState([]);
    const [popularFilter, setPopularFilter] = useState("movie");
    const [topFilter, setTopFilter] = useState("movie");
    const [temp, setTemp] = useState({});
    const [index, setIndex] = useState(0);
    const increment = () => setIndex((prev) => prev + 1);
    const decrement = () => setIndex((prev) => prev - 1);

    useMemo(() => {
        async function loadMedia() {
            try {
                await Promise.all([
                    getTrendingDay(),
                    getTrendingWeek(),
                    getPopularMovies(),
                    getTopRatedMovies(),
                    getPopularShows(),
                    getTopRatedShows(),
                ]).then(
                    ([
                        result1,
                        result2,
                        result3,
                        result4,
                        result5,
                        result6,
                    ]) => {
                        setTrendingDay(
                            filterMedia(getMediaData(result1?.results)).filter(
                                (media) => media.rating > 5,
                            ),
                        );
                        setTrendingWeek(
                            filterMedia(getMediaData(result2?.results)),
                        );
                        setPopularMovies(
                            filterMedia(getMediaData(result3?.results)).map(
                                (media) => ({
                                    ...media,
                                    media_type: "movie",
                                }),
                            ),
                        );
                        setTopRatedMovies(
                            filterMedia(getMediaData(result4?.results)).map(
                                (media) => ({
                                    ...media,
                                    media_type: "movie",
                                }),
                            ),
                        );
                        setPopularShows(
                            filterMedia(getMediaData(result5?.results)).map(
                                (media) => ({
                                    ...media,
                                    media_type: "tv",
                                }),
                            ),
                        );
                        setTopRatedShows(
                            filterMedia(getMediaData(result6?.results)).map(
                                (media) => ({
                                    ...media,
                                    media_type: "tv",
                                }),
                            ),
                        );
                    },
                );
            } catch (error) {
                console.error(error);
            }
        }
        loadMedia();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (index < trendingDay.length - 1) {
                increment();
            } else setIndex(0);
        }, 15000);

        return () => clearTimeout(timer);
    }, [trendingDay, index, increment]);

    useEffect(() => {
        setTemp(trendingDay[index]);
    }, [trendingDay, index]);

    return (
        <div className="bg-background text-text min-h-screen max-[475px]:px-4 px-7 md:px-8 py-5 space-y-10 md:space-y-15">
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1 rounded-2xl">
                    <div className="w-full h-full relative group overflow-hidden rounded-2xl shadow-[3px_2px_10px_0px_rgba(255,255,255,0.15)] shadow-text-gray/10">
                        <img
                            src={temp?.image_url}
                            alt={temp?.title}
                            className="w-full h-full min-h-75 md:min-h-100 lg:min-h-130 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                        <div className="hidden md:flex absolute top-5 right-5 flex gap-3 z-10">
                            <button
                                disabled={index === 0}
                                onClick={decrement}
                                className={`p-2 rounded-full backdrop-blur-md transition duration-300 ${
                                    index === 0
                                        ? "text-white/30 cursor-not-allowed bg-black/20"
                                        : "text-white bg-black/40 hover:bg-black/60 border-1 border-text/10"
                                }`}
                            >
                                <LuChevronLeft className="h-5 w-5 md:h-7 md:w-7" />
                            </button>

                            <button
                                disabled={index === trendingDay.length - 1}
                                onClick={increment}
                                className={`p-2 rounded-full backdrop-blur-md transition duration-300 ${
                                    index === trendingDay.length - 1
                                        ? "text-white/30 cursor-not-allowed bg-black/20"
                                        : "text-white bg-black/40 hover:bg-black/60 border-1 border-text/10"
                                }`}
                            >
                                <LuChevronRight className="h-5 w-5 md:h-7 md:w-7" />
                            </button>
                        </div>

                        <div className="absolute bottom-0 max-[475px]:pl-3 max-[475px]:pb-2 pl-7 pb-4 md:pl-10 md:pb-7 flex items-end max-[475px]:gap-3 gap-6">
                            <div className="relative">
                                <Link>
                                    <img
                                        src={temp?.poster_url}
                                        alt={temp?.title}
                                        className="max-[475px]:min-w-28 max-[475px]:h-37 min-w-30 h-40 md:min-w-45 md:min-h-55 lg:w-48 lg:min-h-63 rounded-2xl border border-white/10"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-2xl"></div>
                                </Link>

                                {temp?.rating && (
                                    <div className="absolute right-3 bottom-3 md:right-5 md:bottom-5 flex items-center gap-2 bg-black/60 px-2 py-1 rounded-xl font-bold">
                                        <FaStar className="text-text-secondary text-sm md:text-base" />
                                        <span className="text-[0.7rem] md:text-[0.9rem]">
                                            {temp?.rating}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="space-y-2 md:space-y-3 flex-1 pb-2 pr-1">
                                <h2 className="text-[1rem] md:text-2xl font-bold text-white line-clamp-1">
                                    <Link>{temp?.title}</Link>
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {temp?.genres?.map((genre, index) => {
                                        return (
                                            <span
                                                key={temp?.genre_ids[index]}
                                                className={`${index > 1 && "hidden sm:inline-block"} bg-text-gray/10 backdrop-blur-md text-[9px] md:text-[12px] uppercase font-bold px-2 py-1 rounded-md text-gray-200 border border-white/5`}
                                            >
                                                {genre}
                                            </span>
                                        );
                                    })}
                                </div>

                                <p className="max-[475px]:max-w-[90%] max-w-[85%] text-[12px] md:text-[15px] leading-relaxed text-gray-300 line-clamp-2 md:line-clamp-3">
                                    {temp?.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-text/[0.05] rounded-2xl w-full lg:w-[25%] py-5 px-3">
                    <div className="flex items-center justify-between px-2 font-bold mb-3">
                        <Link
                            to="/trending"
                            className="flex items-center text-[0.95rem] md:text-[1rem] text-text-secondary"
                        >
                            <span>
                                Trending
                            </span>
                            <LuChevronRight className="text-lg" />
                        </Link>
                        <div className="bg-black/10 backdrop-blur-md text-[10px] md:text-[12px] uppercase px-2 py-1 rounded-[5px] tracking-wider text-text-gray border-1 border-text/10">
                            This Week
                        </div>
                    </div>
                    <div className="flex flex-col md:grid grid-cols-2 lg:flex">
                        {trendingWeek?.map((media, index) => {
                            if (index > 4) return;
                            return (
                                <div
                                    key={media?.id}
                                    className="flex-1 px-3 py-2 hover:bg-text/[0.08] rounded-xl font-bold transition duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <Link>
                                            <img
                                                src={media?.poster_url}
                                                alt={media?.title}
                                                className="min-w-16 h-20 rounded-lg"
                                            ></img>
                                        </Link>
                                        <div className="space-y-2">
                                            <Link className="text-[0.85rem] md:text-sm line-clamp-1">
                                                {media?.title}
                                            </Link>
                                            <div className="flex items-center gap-5">
                                                <div className="flex items-center gap-2">
                                                    <FaStar className="text-text-secondary text-sm" />
                                                    <span className="text-[0.7rem] md:text-[0.75rem]">
                                                        {media.rating}
                                                    </span>
                                                </div>
                                                <div className="bg-black/60 backdrop-blur-md text-[10px] md:text-[12px] uppercase px-2 py-1 rounded-[5px] tracking-wider text-text-secondary border-1 border-text/10">
                                                    {media.release_date.slice(
                                                        0,
                                                        4,
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="space-y-10">
                <div className="min-h-60">
                    <div className="flex mb-4 text-text-secondary group">
                        <Link
                            to={`${popularFilter === "movie" ? "movie" : "tv"}/popular`}
                            className="flex items-center group"
                        >
                            <h3 className="font-bold md:text-xl">
                                Fan Favorites
                            </h3>
                            <LuChevronRight className="text-xl md:text-2xl group-hover:text-text-gray transition duration-300" />
                        </Link>

                        <div className="flex items-center w-fit h-fit ml-auto text-sm border border-surface rounded-3xl">
                            <button
                                onClick={() => {
                                    setPopularFilter("movie");
                                }}
                                className={`${popularFilter === "movie" && "bg-surface/70 text-text-secondary"} flex items-center gap-2 px-4 md:px-6 py-3 rounded-3xl transition duration-300`}
                            >
                                <FaFilm
                                    className={`w-fit md:text-[1rem] md:text-text-secondary  ${popularFilter === "movie" && "text-text-secondary"} transition duration-300`}
                                />
                            </button>
                            <button
                                onClick={() => {
                                    setPopularFilter("tv");
                                }}
                                className={`${popularFilter === "tv" && "bg-surface/70 text-text-secondary"} flex items-center gap-2 px-4 md:px-6 py-3 rounded-3xl transition duration-300`}
                            >
                                <LuTv
                                    className={`md:text-[1rem] md:text-text-secondary ${popularFilter === "tv" && "text-text-secondary"} transition duration-300`}
                                />
                            </button>
                        </div>
                    </div>
                    <MediaCarousel>
                        {displayCards(
                            popularFilter === "movie"
                                ? popularMovies
                                : popularShows,
                            8,
                        )}
                    </MediaCarousel>
                </div>
                <div className="min-h-60">
                    <div className="flex mb-4 text-text-secondary group">
                        <Link
                            to={`${topFilter === "movie" ? "movie" : "tv"}/top_rated`}
                            className="flex items-center group"
                        >
                            <h3 className="font-bold md:text-xl">
                                Our Top Picks
                            </h3>
                            <LuChevronRight className="text-xl md:text-2xl group-hover:text-text-gray transition duration-300" />
                        </Link>

                        <div className="flex items-center w-fit h-fit ml-auto text-sm border border-surface rounded-3xl">
                            <button
                                onClick={() => {
                                    setTopFilter("movie");
                                }}
                                className={`${topFilter === "movie" && "bg-surface/70 text-text-secondary"} flex items-center gap-2 px-4 md:px-6 py-3 rounded-3xl transition duration-300`}
                            >
                                <FaFilm
                                    className={`w-fit md:text-[1rem] md:text-text-secondary  ${topFilter === "movie" && "text-text-secondary"} transition duration-300`}
                                />
                            </button>
                            <button
                                onClick={() => {
                                    setTopFilter("tv");
                                }}
                                className={`${topFilter === "tv" && "bg-surface/70 text-text-secondary"} flex items-center gap-2 px-4 md:px-6 py-3 rounded-3xl transition duration-300`}
                            >
                                <LuTv
                                    className={`md:text-[1rem] md:text-text-secondary ${topFilter === "tv" && "text-text-secondary"} transition duration-300`}
                                />
                            </button>
                        </div>
                    </div>
                    <MediaCarousel>
                        {displayCards(
                            topFilter === "movie"
                                ? topRatedMovies
                                : topRatedShows,
                            8,
                        )}
                    </MediaCarousel>
                </div>
            </div>
        </div>
    );
};

export default Home;
