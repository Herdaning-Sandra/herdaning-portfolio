import { ArrowLeft, Play, Image as ImageIcon } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function ExperienceMedia({ media, title, isLight = false }) {
    let mediaItems = [];

    try {
        mediaItems = media ? JSON.parse(media) : [];
    } catch (error) {
        mediaItems = [];
    }

    const videos = mediaItems.filter((item) => item.type === "video");
    const images = mediaItems.filter((item) => item.type === "image");

    return (
        <main
            className={`min-h-screen overflow-hidden px-6 py-10 transition-colors duration-500 ${
                isLight
                    ? "bg-slate-100 text-slate-950"
                    : "bg-[#020617] text-white"
            }`}
        >
            <div className="fixed inset-0 -z-10">
                <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
                <div className="absolute right-10 top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />
                <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-6xl">
                <Link
                    href="/#experience"
                    className={`mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-xl transition ${
                        isLight
                            ? "border-slate-200 bg-white/80 text-cyan-600 hover:text-purple-600"
                            : "border-cyan-400/20 bg-slate-950/70 text-cyan-300 hover:text-purple-300"
                    }`}
                >
                    <ArrowLeft size={16} />
                    Back to Experience
                </Link>

                <div
                    className={`rounded-[2rem] border p-5 shadow-2xl backdrop-blur-xl md:p-8 ${
                        isLight
                            ? "border-slate-200 bg-white/85 shadow-slate-200/70"
                            : "border-cyan-400/20 bg-slate-950/60 shadow-cyan-500/10"
                    }`}
                >
                    <div className="mb-8 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            Experience Media
                        </p>

                        <h1
                            className={`mt-3 text-3xl font-bold md:text-4xl ${
                                isLight ? "text-slate-900" : "text-white"
                            }`}
                        >
                            {title}
                        </h1>

                        <p
                            className={`mx-auto mt-3 max-w-2xl text-sm leading-relaxed ${
                                isLight ? "text-slate-600" : "text-slate-400"
                            }`}
                        >
                            Documentation and media preview related to this
                            experience.
                        </p>
                    </div>

                    {mediaItems.length === 0 && (
                        <div
                            className={`rounded-2xl border p-8 text-center ${
                                isLight
                                    ? "border-slate-200 bg-slate-50 text-slate-600"
                                    : "border-white/10 bg-slate-950/60 text-slate-400"
                            }`}
                        >
                            No media available.
                        </div>
                    )}

                    {videos.length > 0 && (
                        <div className="space-y-8">
                            {videos.map((item, index) => (
                                <div key={`${item.src}-${index}`}>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                                            <Play size={18} />
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-cyan-400">
                                                Video Documentation
                                            </p>
                                            <h2
                                                className={`text-lg font-bold ${
                                                    isLight
                                                        ? "text-slate-900"
                                                        : "text-white"
                                                }`}
                                            >
                                                {item.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl">
                                        <video
                                            src={item.src}
                                            className="aspect-video w-full object-contain"
                                            controls
                                            autoPlay={index === 0}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {images.length > 0 && (
                        <div className={videos.length > 0 ? "mt-10" : ""}>
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/10 text-purple-300">
                                    <ImageIcon size={18} />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-purple-400">
                                        Photo Documentation
                                    </p>
                                    <h2
                                        className={`text-lg font-bold ${
                                            isLight
                                                ? "text-slate-900"
                                                : "text-white"
                                        }`}
                                    >
                                        Gallery
                                    </h2>
                                </div>
                            </div>

                            <div
                                className={`grid gap-5 ${
                                    images.length === 1
                                        ? "grid-cols-1"
                                        : "md:grid-cols-2"
                                }`}
                            >
                                {images.map((item, index) => (
                                    <a
                                        key={`${item.src}-${index}`}
                                        href={item.src}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group overflow-hidden rounded-2xl border shadow-xl transition hover:-translate-y-1 ${
                                            isLight
                                                ? "border-slate-200 bg-white shadow-slate-200/70"
                                                : "border-white/10 bg-slate-950/60 shadow-cyan-500/5"
                                        }`}
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                                                images.length === 1
                                                    ? "max-h-[560px]"
                                                    : "h-72"
                                            }`}
                                        />

                                        <div className="p-4">
                                            <p
                                                className={`text-sm font-semibold ${
                                                    isLight
                                                        ? "text-slate-800"
                                                        : "text-white"
                                                }`}
                                            >
                                                {item.title}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}