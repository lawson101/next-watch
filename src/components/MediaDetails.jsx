import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTMDB, getMediaDetails } from "../services/tmdb";

const MediaDetails = () => {
    const { mediaType, id } = useParams();
    const [media, setMedia] = useState(null);
    const [loading, setLoading] = useState(true);

    useMemo(() => {
        async function loadMedia() {
            try {
                const endpoint =
                    mediaType === "movie"
                        ? `/movie/${id}?append_to_response=credits,videos`
                        : `/tv/${id}?append_to_response=credits,videos`;

                const data = await fetchTMDB(endpoint);
                setMedia(getMediaDetails(data));
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        loadMedia();
    }, [mediaType, id]);

    return (
        <div
            style={{ "--image": `url('${media?.image_url}')` }}
            className="text-text min-h-screen md:px-10 md:py-10 px-4 py-3 bg-cover bg-center w-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.9),rgba(0,0,0,1)),var(--image)]"
        >
            {!loading ? (
                <div></div>
            ) : (
                <div className="py-10 md:py-5 px-4 text-text-gray">
                    Give it a sec...
                </div>
            )}
        </div>
    );
};

export default MediaDetails;
