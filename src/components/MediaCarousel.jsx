import { useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const MediaCarousel = ({ children }) => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = () => {
        const el = scrollRef.current;
        if (!el) return;

        setCanScrollLeft(el.scrollLeft > 0);

        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    };

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -scrollRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: scrollRef.current.clientWidth
        });
    };

    useEffect(() => {
        updateScrollButtons();

        const el = scrollRef.current;
        if (!el) return;

        el.addEventListener("scroll", updateScrollButtons);
        window.addEventListener("resize", updateScrollButtons);

        return () => {
            el.removeEventListener("scroll", updateScrollButtons);
            window.removeEventListener("resize", updateScrollButtons);
        };
    }, [children]);

    return (
        <div className="relative min-h-50">
            {canScrollLeft && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background rounded-full p-3 md:p-2 border border-text/20 transition"
                >
                    <LuChevronLeft className="text-2xl md:text-3xl" />
                </button>
            )}

            <div
                ref={scrollRef}
                className="grid grid-flow-col auto-cols-[180px] md:auto-cols-[210px] gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
            >
                {children}
            </div>

            {canScrollRight && (
                <button
                    onClick={scrollRight}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background rounded-full p-3 md:p-2 border border-text/20 transition"
                >
                    <LuChevronRight className="text-2xl md:text-3xl" />
                </button>
            )}
        </div>
    );
};

export default MediaCarousel;
