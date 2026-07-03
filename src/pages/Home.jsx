import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getTrendingDay } from "../services/tmdb";
import { getMovieData } from "../services/tmdb";

const Home = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [trendingDay, setTrendingDay] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            try {
                const response = await getTrendingDay();
                setTrendingDay(getMovieData(response.results));
                setHasLoaded(true);
            } catch (error) {
                console.error(error);
            }
        }

        loadMovies();
    }, []);

    return (
        <div className="bg-background text-text min-h-screen">
            {hasLoaded ? (
                <div className="grid grid-cols-[repeat(auto-fit,230px)] justify-center gap-10 px-2 py-16">
                    {trendingDay
                        .sort((x, y) => y.rating - x.rating)
                        .filter((movie) => movie.rating > 1)
                        .map((movie, index) => {
                            if (index > 9) return;
                            return <MovieCard key={movie.id} movie={movie} />;
                        })}
                </div>
            ) : (
                <div>Gimmee a sec...</div>
            )}
        </div>
    );
};

export default Home;
