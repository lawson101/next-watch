//!FIX: APP CRASHES WHENEVER GENRE DOESN'T FETCH

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const options = {
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        accept: "application/json",
    },
};
const movieResponse = await getMovieGenres().then((data) => data?.genres);
const tvResponse = await getTvGenres().then((data) => data?.genres);

async function fetchTMDB(path) {
    try {
        const response = await fetch(`${BASE_URL}${path}`, options);
        if (!response.ok) {
            throw new Error("Failed to fetch movies");
        }
        return await response.json();
    } catch (error) {
        console.error("TMDB Error: " + error);
        return;
    }
}

async function getMovieGenres() {
    try {
        const response = await fetch(`${BASE_URL}/genre/movie/list`, options);
        if (!response.ok) {
            throw new Error("Failed to fetch genre");
        }
        return await response.json();
    } catch (error) {
        console.error("TMDB Error: ", error);
    }
}

async function getTvGenres() {
    try {
        const response = await fetch(`${BASE_URL}/genre/tv/list`, options);
        if (!response.ok) {
            throw new Error("Failed to fetch genre");
        }
        return await response.json();
    } catch (error) {
        console.error("TMDB Error: ", error);
    }
}

function getGenres(genre_ids, media_type) {
    return media_type === "movie"
        ? genre_ids.map(
              (id) => movieResponse.find((movie) => movie.id === id)?.name,
          )
        : genre_ids.map(
              (id) => tvResponse.find((movie) => movie.id === id)?.name,
          );
}

export function getMovieData(response) {
    return response.map((movie) => ({
        id: movie.id,
        title: movie.title || movie.name,
        image_url: `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`,
        poster_url: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
        media_type: movie.media_type,
        genres: getGenres(movie.genre_ids, movie.media_type),
        isFavorite: false,
        isWatchList: false,
        release_date: movie.release_date || movie.first_air_date,
        rating: movie.vote_average.toFixed(1),
        overview: movie.overview,
    }));
}

// Trending by Day and Week
export function getTrendingDay() {
    return fetchTMDB("/trending/all/day");
}

export function getTrendingWeek() {
    return fetchTMDB("/trending/all/week");
}

// Trending Movies by Day and Week
export function getTrendingMovieDay() {
    return fetchTMDB("//trending/movie/day");
}
export function getTrendingMovieWeek() {
    return fetchTMDB("//trending/movie/week");
}

// Trending TV Shows by Day and Week
export function getTrendingTvDay() {
    return fetchTMDB("//trending/movie/day");
}
export function getTrendingTvWeek() {
    return fetchTMDB("//trending/movie/week");
}

// Popular movies
export async function getPopularMovies() {
    return fetchTMDB("/movie/popular");
}

// Top Rated movies
export function getTopRatedMovies() {
    return fetchTMDB("/movie/top_rated");
}

// Now Playing movies
export function getNowPlayingMovies() {
    return fetchTMDB("/movie/now_playing");
}

// Upcoming movies
export function getUpcomingMovies() {
    return fetchTMDB("/movie/upcoming");
}

// Popular TV Shows
export function getPopularShows() {
    return fetchTMDB("/tv/popular");
}

// Top Rated TV Shows
export function getTopRatedShows() {
    return fetchTMDB("/tv/top_rated");
}

// Airing Today TV Shows
export function getAiringTodayShows() {
    return fetchTMDB("/tv/airing_today");
}

// On the Air TV Shows
export function getOnAirShows() {
    return fetchTMDB("/tv/on_the_air");
}
