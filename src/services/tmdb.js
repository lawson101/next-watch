const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const options = {
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        accept: "application/json",
    },
};
const movieResponse = (await getGenres("movie"))?.genres;
const tvResponse = (await getGenres("tv"))?.genres;

export async function fetchTMDB(path, params = {}) {
    const query = new URLSearchParams(params);
    try {
        const response = await fetch(`${BASE_URL}${path}?${query}`, options);
        if (!response.ok) {
            throw new Error(
                `TMDB request failed: ${response.status} ${response.statusText}`,
            );
        }
        return await response.json();
    } catch (error) {
        console.error("TMDB Error: " + error);
        return;
    }
}

export async function getTrailer(id, media_type) {
    try {
        const response = await fetch(
            `${BASE_URL}/${media_type}/${id}/videos`,
            options,
        );
        if (!response.ok) {
            throw new Error(
                `TMDB request failed: ${response.status} ${response.statusText}`,
            );
        }

        const data = await response.json();
        return data.results.find(
            (video) => video.site === "YouTube" && video.type === "Trailer",
        );
    } catch (error) {
        console.error(error);
    }
}

async function getGenres(media_type) {
    try {
        const response = await fetch(
            `${BASE_URL}/genre/${media_type}/list`,
            options,
        );
        if (!response.ok) {
            throw new Error(
                `TMDB request failed: ${response.status} ${response.statusText}`,
            );
        }
        return await response.json();
    } catch (error) {
        console.error("TMDB Error: ", error);
    }
}

export function filterMedia(media_list) {
    const exclude = [
        "desire",
        "heartstopper forever",
        "leviticus",
        "obsession",
        "off campus",
        "soulm8te",
        "wwe summerslam 2026: saturday",
        "wwe summerslam 2026: sunday",
        "the shards",
        "my life with the walter boys",
        "au bonheur des dames",
        "a winter sun wakes the wind in spring hills' dream",
    ];
    return media_list.filter(
        (media) => !exclude.includes(media.title.toLowerCase()),
    );
}

function findGenres(genre_ids, media_type) {
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
        image_url: `https://image.tmdb.org/t/p/original${media.backdrop_path}`,
        poster_url: `https://image.tmdb.org/t/p/w342${media.poster_path}`,
        media_type: media.media_type,
        genres: findGenres(media.genre_ids, media.media_type),
        genre_ids: media.genre_ids,
        isFavorite: false,
        isWatchList: false,
        release_date: media.release_date || media.first_air_date,
        rating: media.vote_average.toFixed(1),
        overview: media.overview,
    }));
}

// I have a function for extracting data from a response but there is a problem...
// 1. The data to be displayed for movies and for TV Shows are different.
// 2. The response needed from a category is an array while the one needed for a specific media fetch is an object

export function getMovieDetails() {}

export function getTvDetails(response) {
    return {
        id: response.id,
        name: response.name,
        image_url: `https://image.tmdb.org/t/p/original${response.backdrop_path}`,
        poster_url: `https://image.tmdb.org/t/p/w342${response.poster_path}`,
        overview: response.overview,
        genres: response.genres.map((genre) => genre.name),
        rating: response.vote_average,
        first_air_date: response.first_air_date,
        seasons_no: response.number_of_seasons,
        episodes_no: response.number_of_episodes,
        status: response.status,
        created_by: response.created_by.map((idx) => idx.name),
        cast: response.credits.cast.reduce((obj, currentVal) => {
            return obj[currentVal.name] = currentVal.character;
        }, {}),

    };
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
