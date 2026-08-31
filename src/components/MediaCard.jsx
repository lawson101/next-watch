import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MediaCard = ({ media }) => {
    return (
        <div className="relative group border border-text-gray/20 text-text rounded-2xl transition duration-300">
            <Link
                to={`/${media?.media_type}/${media?.id}`}
                className="block w-full h-56 md:h-66 relative rounded-t-2xl overflow-hidden"
            >
                <img
                    src={media.poster_url}
                    className="w-full h-full rounded-t-2xl transition duration-500 group-hover:scale-105 cursor-pointer"
                    alt={media.title}
                />
                <div className="absolute inset-0 bg-black/10"></div>

                {media.media_type && (
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-[10px] uppercase px-2.5 py-1 rounded-[5px] tracking-wider text-text-secondary border-1 border-text/10">
                        {media.media_type}
                    </div>
                )}
            </Link>

            <div className="relative bg-surface/50 rounded-b-2xl border-t border-text-gray/20 px-4 py-3">
                <div className="truncate text-[0.85rem] md:text-[0.95rem] font-bold">
                    <Link to={`/${media?.media_type}/${media?.id}`}>
                        {media.title}
                    </Link>
                </div>

                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                        <FaStar className="text-text-secondary" />
                        <span className="text-[0.8rem] font-bold mt-[1px]">{media.rating}</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md text-xs uppercase px-2.5 py-1 rounded-[5px] tracking-wider text-text-secondary border-1 border-text/10">
                        {media.release_date.slice(0, 4)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export function displayCards(category, num) {
    return category
        .sort((x, y) => y.rating - x.rating)
        .map((media, index) => {
            if (num && index > num - 1) return;
            if (media.rating < 1) media.rating = "N/A";
            return <MediaCard key={media.id} media={media} />;
        });
}
