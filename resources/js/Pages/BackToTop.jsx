import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress =
                docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            setScrollProgress(progress);
            setIsVisible(scrollTop > 350);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="fixed right-3 top-0 bottom-32 z-40 hidden w-[3px] overflow-hidden rounded-full bg-white/10 md:block">
                <div
                    className="origin-top rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_14px_rgba(34,211,238,0.9)] transition-transform duration-100"
                    style={{
                        height: "100%",
                        transform: `scaleY(${scrollProgress / 100})`,
                    }}
                />
            </div>

            {isVisible && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="fixed bottom-28 right-7 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400 to-purple-600 text-white shadow-2xl shadow-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-purple-500/40"
                >
                    <span className="absolute inset-0 rounded-full bg-white/15 blur-sm" />
                    <ChevronUp size={23} className="relative z-10" />
                </button>
            )}
        </>
    );
}