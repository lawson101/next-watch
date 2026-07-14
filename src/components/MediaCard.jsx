import { BiBookmark } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";

const MediaCard = ({ media }) => {
    return (
        <div className="relative w-full h-46 md:h-60 lg:h-64 group border border-text-gray text-text rounded-2xl hover:scale-105 transition duration-300">
            <img
                src={media.poster_url}
                className="w-full h-full rounded-2xl border border-text-gray transition duration-300 cursor-pointer"
                alt={media.title}
            />

            <div className="absolute bottom-2 left-3 font-semibold text-sm flex items-center gap-2 bg-surface/80 px-3 py-1 rounded-xl">
                <FaStar className="text-text-secondary" />
                <div>{media.rating}</div>
            </div>

            <div className="lg:opacity-0 lg:pointer-events-none hover:pointer-events-auto group-hover:opacity-100 absolute top-5 right-3 flex flex-col gap-3 text-xl bg-surface/80 py-3 px-2.5 rounded-xl transition duration-300">
                <BiBookmark />
                <IoHeartOutline />
            </div>
        </div>
    );
};

export function displayCards(category, num) {
    return category
        .sort((x, y) => y.rating - x.rating)
        .map((media, index) => {
            if (num && index > num + 1) return;
            if (media.rating < 1) media.rating = "N/A";
            return <MediaCard key={media.id} media={media} />;
        });
}
