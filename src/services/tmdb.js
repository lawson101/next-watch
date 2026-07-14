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
            throw new Error("Failed to fetch media");
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
              (id) => movieResponse.find((media) => media.id === id)?.name,
          )
        : genre_ids.map(
              (id) => tvResponse.find((media) => media.id === id)?.name,
          );
}

export function getMediaData(response) {
    return response.map((media) => ({
        id: media.id,
        title: media.title || media.name,
        image_url: `https://image.tmdb.org/t/p/w342${media.backdrop_path}`,
        poster_url: `https://image.tmdb.org/t/p/w342${media.poster_path}`,
        media_type: media.media_type,
        genres: getGenres(media.genre_ids, media.media_type),
        isFavorite: false,
        isWatchList: false,
        release_date: media.release_date || media.first_air_date,
        rating: media.vote_average.toFixed(1),
        overview: media.overview,
    }));
}

// Trending by Day and Week
export function getTrendingDay() {
    return fetchTMDB("/trending/all/day");
}

export function getTrendingWeek() {
    return fetchTMDB("/trending/all/week");
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
