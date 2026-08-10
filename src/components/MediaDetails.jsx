import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTMDB, getMediaData } from "../services/tmdb";

const MediaDetails = () => {
    const { mediaType, id } = useParams();
    const [media, setMedia] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMedia() {
            try {
                const endpoint =
                    mediaType === "movie"
                        ? `/movie/${id}?append_to_response=credits,videos`
                        : `/tv/${id}?append_to_response=credits,videos`;

                const data = await fetchTMDB(endpoint);
                setMedia(data);
                console.log(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        loadMedia();
    }, [mediaType, id]);

    return (
        <div className="text-text min-h-screen px-5 py-10">
            {!loading ? (
                <div>
                    <img src={media?.poster_url} alt={media?.title} className="w-100 h-100" />
                    <h1>{media?.title || media?.name}</h1>

                    <p>{media?.overview}</p>
                </div>
            ) : (
                <div>loading...</div>
            )}
        </div>
    );
};

export default MediaDetails;
