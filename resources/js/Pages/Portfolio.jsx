import { useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    Code2,
    Moon,
    Sun,
    MessageCircle,
    ArrowRight,
    UserRound,
    MapPin,
    GraduationCap,
    Heart,
    Palette,
    ChevronLeft,
    ChevronRight,
    Mail,
    Phone,
    ExternalLink,
    Globe,
    Briefcase,
    CheckCircle2,
} from "lucide-react";
import {
    SiJavascript,
    SiLaravel,
    SiReact,
    SiPhp,
    SiMysql,
    SiHtml5,
    SiCss,
    SiFigma,
    SiGithub,
} from "react-icons/si";
import BackToTop from "./BackToTop";
import { Download } from "lucide-react";
import { projects } from "@/Pages/Projects/data";
import { Head } from "@inertiajs/react";

export default function Portfolio() {
    const [isLight, setIsLight] = useState(false);

    return (
        <>
            <Head title="Herdaning-Portfolio" />
            <main
                className={`min-h-screen overflow-hidden transition-colors duration-500 ${
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

                <Navbar isLight={isLight} setIsLight={setIsLight} />
                <Hero isLight={isLight} />
                <About isLight={isLight} />
                <Skills isLight={isLight} />
                <Projects isLight={isLight} />
                <Experience isLight={isLight} />
                <Certificates isLight={isLight} />
                <Contact isLight={isLight} />
                <Footer isLight={isLight} />
                <BackToTop isLight={isLight} />
            </main>
        </>
    );
}

function Navbar({ isLight, setIsLight }) {
    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-500 ${
                isLight
                    ? "border-slate-200 bg-white/80"
                    : "border-white/10 bg-slate-950/80"
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <a href="#" className="text-xl font-bold">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Portofolio
                    </span>
                </a>

                <div
                    className={`hidden gap-8 text-sm font-medium md:flex ${
                        isLight ? "text-slate-600" : "text-slate-300"
                    }`}
                >
                    <a
                        href="#home"
                        className={isLight ? "text-cyan-500" : "text-cyan-400"}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className={
                            isLight
                                ? "hover:text-cyan-500"
                                : "hover:text-cyan-400"
                        }
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className={
                            isLight
                                ? "hover:text-cyan-500"
                                : "hover:text-cyan-400"
                        }
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className={
                            isLight
                                ? "hover:text-cyan-500"
                                : "hover:text-cyan-400"
                        }
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className={
                            isLight
                                ? "hover:text-cyan-500"
                                : "hover:text-cyan-400"
                        }
                    >
                        Contact
                    </a>
                </div>

                <button
                    onClick={() => setIsLight(!isLight)}
                    className={`rounded-full border p-3 shadow-lg transition-all duration-300 ${
                        isLight
                            ? "border-slate-300 bg-slate-100 text-orange-500 shadow-orange-500/10"
                            : "border-white/10 bg-white/5 text-cyan-300 shadow-cyan-500/10"
                    }`}
                >
                    {isLight ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </nav>
        </header>
    );
}

function Hero({ isLight }) {
    return (
        <section
            id="home"
            className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-2"
        >
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div
                    className={`mb-6 mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm ${
                        isLight
                            ? "border-emerald-300 bg-emerald-100 text-emerald-600"
                            : "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                    }`}
                >
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Available for Remote & Freelance
                </div>

                <h1 className="text-[2rem] font-black leading-tight sm:text-4xl md:text-5xl">
                    <span className="whitespace-nowrap">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Herdaning Sandra
                        </span>
                    </span>
                </h1>

                <h2
                    className={`mt-5 text-xl font-semibold sm:text-2xl md:text-3xl ${
                        isLight ? "text-cyan-500" : "text-cyan-300"
                    }`}
                >
                    Web Developer | Frontend Development & UI/UX Design
                </h2>

                <p
                    className={`mt-6 max-w-xl text-justify text-base leading-relaxed md:text-lg hyphens-auto ${
                        isLight ? "text-slate-600" : "text-slate-400"
                    }`}
                >
                    Web Developer with internship experience building modern web
                    applications using Laravel and React. Focused on creating
                    responsive interfaces and meaningful user experiences.
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {["Laravel", "React", "Inertia", "MySQL", "Figma"].map(
                        (tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-cyan-400/20 bg-white/5 px-3 py-1 text-xs sm:text-sm text-slate-300 backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ),
                    )}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
                    >
                        See My Projects
                        <ArrowRight size={18} />
                    </a>

                    <a
                        href="https://wa.me/628985032477?text=Hello%20Sandra,%20I%20am%20interested%20in%20connecting%20with%20you%20after%20viewing%20your%20portfolio."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-semibold transition ${
                            isLight
                                ? "border-slate-300 bg-white text-slate-700 shadow-md shadow-slate-200 hover:border-cyan-400 hover:text-cyan-500"
                                : "border-white/15 bg-white/5 text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
                        }`}
                    >
                        Contact Me
                        <MessageCircle size={18} />
                    </a>

                    <a
                        href="/Herdaning-Sandra-CV.pdf"
                        download
                        className={`inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-semibold transition ${
                            isLight
                                ? "border-slate-300 bg-white text-slate-700 shadow-md shadow-slate-200 hover:border-cyan-400 hover:text-cyan-500"
                                : "border-white/15 bg-white/5 text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
                        }`}
                    >
                        <Download size={18} />
                        Download CV
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div className="relative mx-auto w-full max-w-[540px] rounded-[1.8rem] border border-cyan-400/30 bg-white/5 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
                    <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-br from-cyan-400/10 to-purple-600/10" />

                    <div className="relative flex min-h-[350px] sm:min-h-[430px] items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950">
                        <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-500/25 to-purple-600/35 blur-sm" />

                        <span className="absolute left-6 top-6 h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                        <span className="absolute right-10 bottom-16 h-2 w-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />

                        <div className="absolute left-4 top-4 z-20 rounded-2xl border border-white/10 bg-slate-900/80 p-3 shadow-lg backdrop-blur-xl sm:left-6 sm:top-6 sm:p-4">
                            <Code2 className="text-cyan-300" size={22} />
                        </div>

                        <div className="absolute right-3 top-3 z-20 w-[120px] sm:w-[145px] rounded-2xl border border-purple-400/20 bg-slate-950/85 px-3 py-2 sm:px-4 sm:py-3 text-left shadow-xl shadow-purple-500/20 backdrop-blur-xl">
                            <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-300">
                                Student
                            </p>

                            <h3 className="mt-1 text-xs sm:text-sm font-bold leading-snug text-white">
                                Informatics
                            </h3>

                            <p className="mt-1 text-[10px] sm:text-xs leading-relaxed text-slate-400">
                                Web • UI • Database
                            </p>
                        </div>

                        <div className="absolute right-4 top-[95px] sm:right-8 sm:top-[132px] z-20 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-slate-950/85 px-3 py-2 text-[10px] sm:text-xs font-medium text-emerald-300 shadow-lg shadow-emerald-500/20 backdrop-blur-xl">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            Open to Work
                        </div>

                        <img
                            src="/images/sandra.png"
                            alt="Herdaning Sandra Kumalasari"
                            className="absolute bottom-0 left-1/2 z-10 h-[280px] sm:h-[340px] md:h-[385px] w-auto -translate-x-[42%] object-contain drop-shadow-2xl"
                        />

                        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-7 z-20 rounded-2xl border border-cyan-400/20 bg-slate-950/85 px-3 py-2 sm:px-4 sm:py-3 text-left shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
                            <h3 className="text-sm sm:text-base font-bold text-white">
                                Web Developer
                            </h3>

                            <p className="mt-1 text-[10px] sm:text-xs text-slate-400">
                                JavaScript • Laravel • React
                            </p>

                            <div className="mt-3 flex items-center gap-2">
                                <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
                                    <SiJavascript size={16} />
                                </span>

                                <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                                    <SiLaravel size={16} />
                                </span>

                                <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                                    <SiReact size={16} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function NeonSectionBackground({ isLight }) {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
                className={`absolute -left-32 top-0 h-[360px] w-[360px] rounded-full blur-[110px] ${
                    isLight ? "bg-cyan-300/30" : "bg-cyan-500/20"
                }`}
            />

            <div
                className={`absolute -right-20 top-28 h-[420px] w-[420px] rounded-full blur-[130px] ${
                    isLight ? "bg-purple-300/30" : "bg-purple-600/20"
                }`}
            />

            <div
                className={`absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full blur-[140px] ${
                    isLight ? "bg-blue-300/20" : "bg-blue-600/10"
                }`}
            />

            <div
                className={`absolute inset-0 ${
                    isLight ? "opacity-[0.08]" : "opacity-[0.075]"
                }`}
                style={{
                    backgroundImage: isLight
                        ? "linear-gradient(to right, rgba(15,23,42,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.22) 1px, transparent 1px)"
                        : "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
                    backgroundSize: "38px 38px",
                }}
            />

            <div className="absolute left-[18%] top-24 h-px w-40 bg-gradient-to-r from-cyan-400/80 to-transparent" />
            <div className="absolute right-[12%] top-36 h-px w-44 bg-gradient-to-r from-purple-400/80 to-transparent" />
            <div className="absolute bottom-24 left-[55%] h-px w-72 bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-transparent" />

            <div className="absolute right-[16%] top-16 grid grid-cols-5 gap-3">
                {Array.from({ length: 20 }).map((_, index) => (
                    <span
                        key={index}
                        className={`h-1 w-1 rounded-full ${
                            isLight ? "bg-purple-500/50" : "bg-purple-300/60"
                        }`}
                    />
                ))}
            </div>

            <div className="absolute right-[8%] bottom-24 grid grid-cols-4 gap-3">
                {Array.from({ length: 16 }).map((_, index) => (
                    <span
                        key={index}
                        className={`h-1 w-1 rounded-full ${
                            isLight ? "bg-cyan-500/50" : "bg-cyan-300/60"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

function About({ isLight }) {
    const info = [
        {
            icon: UserRound,
            label: "Name",
            value: "Herdaning Sandra Kumalasari",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Salatiga, Central Java",
        },
        {
            icon: GraduationCap,
            label: "Education",
            value: "Informatics Engineering",
        },
        {
            icon: Heart,
            label: "Interest",
            value: "Web, Frontend & UI/UX",
        },
    ];

    return (
        <section id="about" className="relative overflow-hidden py-16 md:py-20">
            <NeonSectionBackground isLight={isLight} />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <div className="mb-8">
                        <div className="flex items-center gap-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                                About Me
                            </p>
                            <span className="hidden h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent md:block" />
                        </div>

                        <h2
                            className={`mt-3 text-2xl font-bold md:text-4xl ${
                                isLight ? "text-slate-900" : "text-white"
                            }`}
                        >
                            Get to know me better
                        </h2>
                    </div>

                    <div
                        className={`rounded-3xl border p-5 shadow-2xl backdrop-blur-xl sm:p-6 md:p-10 ${
                            isLight
                                ? "border-slate-200 bg-white/85 shadow-slate-200/70"
                                : "border-cyan-400/25 bg-slate-950/50 shadow-cyan-500/10"
                        }`}
                    >
                        <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr] items-start">
                            <div className="flex gap-5">
                                <div
                                    className={`hidden h-20 w-20 shrink-0 items-center justify-center rounded-2xl border md:flex ${
                                        isLight
                                            ? "border-cyan-200 bg-gradient-to-br from-cyan-100 to-purple-100 text-cyan-500"
                                            : "border-purple-400/40 bg-gradient-to-br from-cyan-400/15 to-purple-500/20 text-cyan-300 shadow-lg shadow-purple-500/20"
                                    }`}
                                >
                                    <UserRound size={36} />
                                </div>

                                <div>
                                    <p
                                        className={`mt-1 text-justify text-sm leading-relaxed sm:text-base md:text-lg ${
                                            isLight
                                                ? "text-slate-600"
                                                : "text-slate-300"
                                        }`}
                                    >
                                        I am an Informatics Engineering student
                                        with experience in web application
                                        development, especially using Laravel,
                                        PHP, JavaScript, AJAX, JSON, and MySQL.
                                        I have worked on company websites,
                                        internal admin systems, database
                                        integration, and email-based contact
                                        forms.
                                    </p>

                                    <p
                                        className={`mt-6 text-justify text-base leading-relaxed md:text-lg ${
                                            isLight
                                                ? "text-slate-600"
                                                : "text-slate-300"
                                        }`}
                                    >
                                        I am interested in Web Development,
                                        Frontend Development, and UI/UX Design.
                                        I enjoy creating responsive, functional,
                                        and user-friendly digital products while
                                        continuously improving my technical and
                                        design skills.
                                    </p>
                                </div>
                            </div>

                            <div
                                className={`rounded-2xl border p-4 sm:p-5 ${
                                    isLight
                                        ? "border-slate-200 bg-slate-50"
                                        : "border-white/10 bg-slate-950/45"
                                }`}
                            >
                                <div className="space-y-4">
                                    {info.map(
                                        ({ icon: Icon, label, value }) => (
                                            <div
                                                key={label}
                                                className={`flex flex-col items-start justify-between gap-2 border-b pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:gap-6 ${
                                                    isLight
                                                        ? "border-slate-200"
                                                        : "border-white/10"
                                                }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`${
                                                            isLight
                                                                ? "text-cyan-500"
                                                                : "text-cyan-300"
                                                        }`}
                                                    >
                                                        <Icon size={18} />
                                                    </div>

                                                    <p
                                                        className={`text-sm ${
                                                            isLight
                                                                ? "text-slate-500"
                                                                : "text-slate-400"
                                                        }`}
                                                    >
                                                        {label}
                                                    </p>
                                                </div>

                                                <p
                                                    className={`text-left sm:text-right text-sm font-semibold break-words ${
                                                        isLight
                                                            ? "text-slate-800"
                                                            : "text-slate-100"
                                                    }`}
                                                >
                                                    {value}
                                                </p>
                                            </div>
                                        ),
                                    )}
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "Laravel",
                                        "JavaScript",
                                        "MySQL",
                                        "Figma",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className={`rounded-full border px-3 py-1 text-[11px] sm:text-xs font-semibold ${
                                                isLight
                                                    ? "border-cyan-200 bg-cyan-50 text-cyan-600"
                                                    : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                                            }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Skills({ isLight }) {
    const skillsRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const updateScrollProgress = () => {
        if (!skillsRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = skillsRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (maxScroll <= 0) {
            setScrollProgress(0);
            return;
        }

        setScrollProgress((scrollLeft / maxScroll) * 100);
    };

    const scrollSkills = (direction) => {
        if (!skillsRef.current) return;

        skillsRef.current.scrollBy({
            left: direction === "left" ? -320 : 320,
            behavior: "smooth",
        });

        setTimeout(updateScrollProgress, 350);
    };

    const skills = [
        {
            name: "HTML",
            desc: "Markup Language",
            icon: SiHtml5,
            color: "text-orange-400",
            bg: "bg-orange-500/10",
        },
        {
            name: "CSS",
            desc: "Styling Language",
            icon: SiCss,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
        },
        {
            name: "JavaScript",
            desc: "Programming Language",
            icon: SiJavascript,
            color: "text-yellow-400",
            bg: "bg-yellow-500/10",
        },
        {
            name: "PHP",
            desc: "Backend Language",
            icon: SiPhp,
            color: "text-indigo-400",
            bg: "bg-indigo-500/10",
        },
        {
            name: "Laravel",
            desc: "PHP Framework",
            icon: SiLaravel,
            color: "text-red-400",
            bg: "bg-red-500/10",
        },
        {
            name: "React",
            desc: "Frontend Library",
            icon: SiReact,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
        },
        {
            name: "MySQL",
            desc: "Database",
            icon: SiMysql,
            color: "text-sky-400",
            bg: "bg-sky-500/10",
        },
        {
            name: "AJAX & JSON",
            desc: "Data Integration",
            icon: Code2,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
        },
        {
            name: "GitHub",
            desc: "Version Control",
            icon: SiGithub,
            color: isLight ? "text-slate-700" : "text-slate-200",
            bg: isLight ? "bg-slate-200" : "bg-white/10",
        },
        {
            name: "Figma",
            desc: "UI/UX Design Tool",
            icon: SiFigma,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
        },
        {
            name: "UI/UX Design",
            desc: "Interface Design",
            icon: Palette,
            color: "text-pink-400",
            bg: "bg-pink-500/10",
        },
    ];

    return (
        <section id="skills" className="relative overflow-hidden pb-10 pt-14">
            <NeonSectionBackground isLight={isLight} />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div
                    className={`rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl md:p-10 ${
                        isLight
                            ? "border-slate-200 bg-white/85 shadow-slate-200/70"
                            : "border-cyan-400/20 bg-slate-950/50 shadow-cyan-500/10"
                    }`}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="mb-10">
                            <div className="flex items-center gap-4">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                                    Skills
                                </p>
                                <span className="hidden h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent md:block" />
                            </div>

                            <h2
                                className={`mt-3 text-3xl font-bold md:text-4xl ${
                                    isLight ? "text-slate-900" : "text-white"
                                }`}
                            >
                                Technologies & Tools
                            </h2>

                            <p
                                className={`mt-4 max-w-2xl text-base leading-relaxed ${
                                    isLight
                                        ? "text-slate-600"
                                        : "text-slate-300"
                                }`}
                            >
                                A collection of technologies and tools that I
                                use in web development, frontend development,
                                database management, and UI/UX design.
                            </p>
                        </div>

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => scrollSkills("left")}
                                className={`absolute -left-14 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border shadow-xl backdrop-blur-xl transition hover:scale-110 md:flex ${
                                    isLight
                                        ? "border-slate-200 bg-white/90 text-cyan-500 shadow-slate-200 hover:border-cyan-300"
                                        : "border-cyan-400/20 bg-slate-950/80 text-cyan-300 shadow-cyan-500/20 hover:border-cyan-400"
                                }`}
                            >
                                <ChevronLeft size={22} />
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollSkills("right")}
                                className={`absolute -right-14 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border shadow-xl backdrop-blur-xl transition hover:scale-110 md:flex ${
                                    isLight
                                        ? "border-slate-200 bg-white/90 text-cyan-500 shadow-slate-200 hover:border-cyan-300"
                                        : "border-cyan-400/20 bg-slate-950/80 text-cyan-300 shadow-cyan-500/20 hover:border-cyan-400"
                                }`}
                            >
                                <ChevronRight size={22} />
                            </button>

                            <div
                                ref={skillsRef}
                                onScroll={updateScrollProgress}
                                className="flex gap-6 overflow-x-auto scroll-smooth pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                            >
                                {skills.map((skill, index) => {
                                    const Icon = skill.icon;

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.04,
                                            }}
                                            viewport={{ once: true }}
                                            whileHover={{ y: -8 }}
                                            className={`group flex min-w-[240px] flex-col items-center justify-center rounded-2xl border p-7 text-center shadow-xl backdrop-blur-xl transition-all duration-300 ${
                                                isLight
                                                    ? "border-slate-200 bg-white/80 shadow-slate-200/70 hover:border-cyan-300"
                                                    : "border-white/10 bg-slate-950/45 shadow-cyan-500/5 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
                                            }`}
                                        >
                                            <div
                                                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${skill.bg} ${skill.color}`}
                                            >
                                                <Icon size={36} />
                                            </div>

                                            <h3
                                                className={`text-xl font-bold ${
                                                    isLight
                                                        ? "text-slate-900"
                                                        : "text-white"
                                                }`}
                                            >
                                                {skill.name}
                                            </h3>

                                            <p
                                                className={`mt-2 text-sm ${
                                                    isLight
                                                        ? "text-slate-500"
                                                        : "text-slate-400"
                                                }`}
                                            >
                                                {skill.desc}
                                            </p>

                                            <div className="mt-6 flex justify-center gap-1.5">
                                                {[1, 2, 3, 4, 5].map((dot) => (
                                                    <span
                                                        key={dot}
                                                        className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                                                    />
                                                ))}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div
                                className={`mx-auto mt-1 h-1 w-96 max-w-full overflow-hidden rounded-full ${
                                    isLight ? "bg-slate-200" : "bg-white/10"
                                }`}
                            >
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300"
                                    style={{
                                        width: `${Math.max(scrollProgress, 18)}%`,
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Projects({ isLight }) {
    return (
        <section id="projects" className="relative overflow-hidden pb-10 pt-4">
            <NeonSectionBackground isLight={isLight} />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="relative mb-12">
                        <div className="text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                                Projects
                            </p>

                            <h2
                                className={`mt-3 text-3xl font-bold md:text-4xl ${
                                    isLight ? "text-slate-900" : "text-white"
                                }`}
                            >
                                Selected Works
                            </h2>

                            <p
                                className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${
                                    isLight
                                        ? "text-slate-600"
                                        : "text-slate-300"
                                }`}
                            >
                                Some projects I have worked on, including web
                                development, admin systems, company websites,
                                and UI/UX design projects.
                            </p>
                        </div>

                        <a
                            href="#"
                            className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition ${
                                isLight
                                    ? "text-cyan-600 hover:text-purple-600"
                                    : "text-cyan-300 hover:text-purple-300"
                            }`}
                        >
                            View All My Project
                            <ArrowRight
                                size={16}
                                className="transition group-hover:translate-x-1"
                            />
                        </a>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className={`group overflow-hidden rounded-3xl border shadow-xl backdrop-blur-xl transition-all duration-300 ${
                                    isLight
                                        ? "border-slate-200 bg-white/85 shadow-slate-200/70 hover:border-cyan-300"
                                        : "border-white/10 bg-slate-950/55 shadow-cyan-500/5 hover:border-cyan-400/40 hover:bg-slate-950/75"
                                }`}
                            >
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div
                                        className={`absolute inset-0 ${
                                            isLight
                                                ? "bg-gradient-to-t from-white/95 via-white/10 to-transparent"
                                                : "bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent"
                                        }`}
                                    />

                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/90 to-transparent" />

                                    <div className="absolute left-4 top-4 rounded-full border border-cyan-400/20 bg-slate-950/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-xl">
                                        {project.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3
                                        className={`text-xl font-bold ${
                                            isLight
                                                ? "text-slate-900"
                                                : "text-white"
                                        }`}
                                    >
                                        {project.title}
                                    </h3>

                                    <p
                                        className={`mt-3 text-sm leading-relaxed ${
                                            isLight
                                                ? "text-slate-600"
                                                : "text-slate-400"
                                        }`}
                                    >
                                        {project.desc}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.tech.map((item) => (
                                            <span
                                                key={item}
                                                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                                                    isLight
                                                        ? "border-cyan-200 bg-cyan-50 text-cyan-600"
                                                        : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                                                }`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition ${
                                            isLight
                                                ? "text-cyan-600 hover:text-purple-600"
                                                : "text-cyan-300 hover:text-purple-300"
                                        }`}
                                    >
                                        View Project
                                        <ArrowRight
                                            size={16}
                                            className="transition group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Experience({ isLight }) {
    const [showMore, setShowMore] = useState(false);

    const mainExperiences = [
        {
            type: "Internship",
            title: "Web Developer",
            place: "softwarekantor",
            period: "Jan 2026 – Apr 2026",
            location: "Semarang, Central Java, Indonesia",
            desc: "Worked on web development tasks involving frontend and backend features, database management, data integration, and email-based communication systems.",
            skills: [
                "Laravel",
                "PHP",
                "JavaScript",
                "AJAX",
                "JSON",
                "GitHub",
                "SMTP",
            ],
        },
        {
            type: "Campus Program",
            title: "KBM UI/UX Mastery 2025",
            place: "Universitas Kristen Satya Wacana",
            period: "Apr 2025 – Aug 2025",
            location: "Salatiga, Central Java, Indonesia",
            desc: "Gained hands-on experience in the end-to-end UI/UX design process, including user flow, wireframing, prototyping, and mobile app interface design using Figma.",
            skills: ["Figma", "UI/UX Design", "Wireframing", "Prototype", "UX"],
        },
    ];

    const moreExperiences = [
        {
            type: "Volunteer",
            title: "Volunteer Participant in Harakarsa Youth Bootcamp 2025",
            place: "HARAKARSA",
            period: "Apr 2025 – May 2025",
            location: "Remote",
            desc: "Created environmental awareness content, participated in social campaigns, and produced educational media related to SDGs, climate change, and public awareness.",
            skills: [
                "Team Collaboration",
                "Social Media Campaign",
                "Public Awareness",
                "Content Creation",
            ],
            media: [
                {
                    type: "video",
                    src: "/media/harakarsa-video.mp4",
                    title: "Harakarsa Campaign Video",
                },
            ],
        },
        {
            type: "Organization",
            title: "Creative Designer",
            place: "NabTalks",
            period: "Feb 2024 – Aug 2024",
            location: "Remote",
            desc: "Contributed to creative content development for events, graphic design, social media, and marketing strategies to improve audience engagement.",
            skills: [
                "Design",
                "Teamwork",
                "Leadership",
                "Project Management",
                "Communication",
            ],
        },
        {
            type: "Committee",
            title: "Secretary - Executive Committee",
            place: "BD Fest Mobile Legends Tournament",
            period: "Mar 2024 – Jul 2024",
            location: "Universitas Kristen Satya Wacana",
            desc: "Handled meeting minutes, documentation, event planning, participant communication, and committee coordination for a digital business event.",
            skills: [
                "Documentation",
                "Event Planning",
                "Communication",
                "Team Collaboration",
            ],
            media: [
                {
                    type: "image",
                    src: "/media/secretary-1.jpeg",
                    title: "Secretary Documentation 1",
                },
                {
                    type: "image",
                    src: "/media/secretary-2.jpg",
                    title: "Secretary Documentation 2",
                },
            ],
        },
        {
            type: "Campus Program",
            title: "KBM Tech Community - Web Development",
            place: "Universitas Kristen Satya Wacana",
            period: "Mar 2024 – Jul 2024",
            location: "Salatiga, Central Java, Indonesia",
            desc: "Learned and practiced web development fundamentals using HTML, CSS, JavaScript, PHP, XAMPP, and Laravel through structured sessions and final project development.",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "Laravel",
                "Problem Solving",
            ],
        },
        {
            type: "Campus Organization",
            title: "Magang Senat Mahasiswa Fakultas",
            place: "Universitas Kristen Satya Wacana",
            period: "Aug 2023 – Oct 2023",
            location: "Salatiga, Central Java, Indonesia",
            desc: "Learned about organizational policies, created proposals, designed work programs, and collaborated with team members to support student engagement.",
            skills: [
                "Proposal Writing",
                "Team Collaboration",
                "Analytical Skills",
                "Communication",
            ],
            media: [
                {
                    type: "image",
                    src: "/media/magang-senat.jpg",
                    title: "Magang Senat Documentation",
                },
            ],
        },
        {
            type: "Campus Activity",
            title: "Orientation Facilitator",
            place: "Universitas Kristen Satya Wacana",
            period: "Aug 2023 – Sep 2023",
            location: "Salatiga, Central Java, Indonesia",
            desc: "Guided new students during orientation by delivering information, facilitating group activities, and helping create a welcoming campus environment.",
            skills: [
                "Leadership",
                "Public Speaking",
                "Teamwork",
                "Problem Solving",
            ],
            media: [
                {
                    type: "video",
                    src: "/media/orientation-video.mp4",
                    title: "Orientation Facilitator Video",
                },
                {
                    type: "image",
                    src: "/media/orientation-1.jpeg",
                    title: "Orientation Documentation 1",
                },
                {
                    type: "image",
                    src: "/media/orientation-2.jpeg",
                    title: "Orientation Documentation 2",
                },
                {
                    type: "image",
                    src: "/media/orientation-3.jpeg",
                    title: "Orientation Documentation 3",
                },
            ],
        },
    ];

    const displayedExperiences = showMore
        ? [...mainExperiences, ...moreExperiences]
        : mainExperiences;

    const handleToggleExperience = () => {
        const section = document.getElementById("experience");

        if (showMore) {
            setShowMore(false);

            setTimeout(() => {
                if (section) {
                    window.scrollTo({
                        top: section.offsetTop - 120,
                        behavior: "smooth",
                    });
                }
            }, 300);
        } else {
            setShowMore(true);

            setTimeout(() => {
                if (section) {
                    window.scrollTo({
                        top: section.offsetTop - 120,
                        behavior: "smooth",
                    });
                }
            }, 100);
        }
    };

    return (
        <section id="experience" className="relative overflow-hidden py-20">
            <NeonSectionBackground isLight={isLight} />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="mb-14 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            Experience
                        </p>

                        <h2
                            className={`mt-3 text-3xl font-bold md:text-4xl ${
                                isLight ? "text-slate-900" : "text-white"
                            }`}
                        >
                            Experience & Activities
                        </h2>

                        <p
                            className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${
                                isLight ? "text-slate-600" : "text-slate-300"
                            }`}
                        >
                            Professional, campus, and organizational experiences
                            that shaped my skills in web development, UI/UX
                            design, teamwork, and communication.
                        </p>
                    </div>

                    <div className="relative mx-auto max-w-4xl">
                        <div
                            className={`absolute left-4 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2 ${
                                isLight ? "bg-slate-300" : "bg-cyan-400/20"
                            }`}
                        />

                        <div className="space-y-8">
                            {displayedExperiences.map((item, index) => {
                                const isRight = index % 2 !== 0;

                                return (
                                    <motion.div
                                        key={`${item.title}-${index}`}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.05,
                                        }}
                                        viewport={{ once: true }}
                                        className={`relative flex ${
                                            isRight
                                                ? "md:justify-end"
                                                : "md:justify-start"
                                        }`}
                                    >
                                        <div
                                            className={`absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 md:left-1/2 ${
                                                isLight
                                                    ? "border-white bg-cyan-500 shadow-lg shadow-cyan-500/30"
                                                    : "border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/40"
                                            }`}
                                        />

                                        <div
                                            className={`ml-10 w-full rounded-3xl border p-6 shadow-xl backdrop-blur-xl transition-all duration-300 md:ml-0 md:w-[46%] ${
                                                isLight
                                                    ? "border-slate-200 bg-white/85 shadow-slate-200/70 hover:border-cyan-300"
                                                    : "border-white/10 bg-slate-950/55 shadow-cyan-500/5 hover:border-cyan-400/40 hover:bg-slate-950/75"
                                            }`}
                                        >
                                            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                                <span
                                                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                                                        isLight
                                                            ? "border-cyan-200 bg-cyan-50 text-cyan-600"
                                                            : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                                                    }`}
                                                >
                                                    {item.type}
                                                </span>

                                                <span
                                                    className={`text-xs font-medium ${
                                                        isLight
                                                            ? "text-slate-500"
                                                            : "text-slate-400"
                                                    }`}
                                                >
                                                    {item.period}
                                                </span>
                                            </div>

                                            <h3
                                                className={`text-xl font-bold ${
                                                    isLight
                                                        ? "text-slate-900"
                                                        : "text-white"
                                                }`}
                                            >
                                                {item.title}
                                            </h3>

                                            <p
                                                className={`mt-1 text-sm font-semibold ${
                                                    isLight
                                                        ? "text-cyan-600"
                                                        : "text-cyan-300"
                                                }`}
                                            >
                                                {item.place}
                                            </p>

                                            <p
                                                className={`mt-1 text-xs ${
                                                    isLight
                                                        ? "text-slate-500"
                                                        : "text-slate-500"
                                                }`}
                                            >
                                                {item.location}
                                            </p>

                                            <p
                                                className={`mt-4 text-sm leading-relaxed ${
                                                    isLight
                                                        ? "text-slate-600"
                                                        : "text-slate-400"
                                                }`}
                                            >
                                                {item.desc}
                                            </p>

                                            {item.media && (
                                                <a
                                                    href={`/experience/media?title=${encodeURIComponent(
                                                        item.title,
                                                    )}&media=${encodeURIComponent(
                                                        JSON.stringify(
                                                            item.media,
                                                        ),
                                                    )}`}
                                                    className={`mt-3 inline-flex items-center gap-2 text-xs font-semibold transition ${
                                                        isLight
                                                            ? "text-cyan-600 hover:text-purple-600"
                                                            : "text-cyan-400 hover:text-purple-400"
                                                    }`}
                                                >
                                                    View Media
                                                    <ArrowRight size={12} />
                                                </a>
                                            )}

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {item.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className={`rounded-full border px-3 py-1 text-xs font-medium ${
                                                            isLight
                                                                ? "border-purple-200 bg-purple-50 text-purple-600"
                                                                : "border-purple-400/20 bg-purple-400/10 text-purple-300"
                                                        }`}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="mt-10 flex justify-center">
                            <button
                                type="button"
                                onClick={handleToggleExperience}
                                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold shadow-xl backdrop-blur-xl transition hover:scale-105 ${
                                    isLight
                                        ? "border-slate-200 bg-white/90 text-purple-600 shadow-slate-200 hover:border-cyan-300 hover:text-cyan-600"
                                        : "border-purple-400/20 bg-slate-950/70 text-purple-300 shadow-purple-500/10 hover:border-cyan-400/40 hover:text-cyan-300"
                                }`}
                            >
                                {showMore
                                    ? "Show Less Experience"
                                    : "View More Experience"}
                                <ArrowRight
                                    size={16}
                                    className={`transition ${
                                        showMore ? "-rotate-90" : "rotate-0"
                                    }`}
                                />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Certificates({ isLight }) {
    const [showAllCertificates, setShowAllCertificates] = useState(false);
    const certificates = [
        {
            title: "Oracle Database Design and Programming with SQL",
            issuer: "Oracle Academy",
            period: "2024",
            image: "/images/certificates/oracle-database.jpg",
            category: "Database",
        },
        {
            title: "Tech Community Certificate",
            issuer: "Universitas Kristen Satya Wacana",
            period: "2024",
            image: "/images/certificates/tech-community-certificate.jpg",
            category: "Web Development",
        },
        {
            title: "MySkill UX Writing",
            issuer: "MySkill",
            period: "2025",
            image: "/images/certificates/MySkill-UX-Writing.jpg",
            category: "UI/UX Design",
        },
        {
            title: "Secretary Executive Committee Certificate",
            issuer: "BD Fest Mobile Legends Tournament",
            period: "2024",
            image: "/images/certificates/secretary-certificate.jpg",
            category: "Committee",
        },
        {
            title: "Creative Designer Certificate",
            issuer: "NabTalks",
            period: "2024",
            image: "/images/certificates/nabtalk-certificate.jpg",
            category: "Creative Design",
        },
        {
            title: "Harakarsa Certificate of Participation",
            issuer: "HARAKARSA",
            period: "2025",
            image: "/images/certificates/harakarsa-certificate.jpg",
            category: "Volunteer",
        },
        {
            title: "Magang Senat Mahasiswa Fakultas",
            issuer: "Universitas Kristen Satya Wacana",
            period: "2023",
            image: "/images/certificates/magang-senat-certificate.jpg",
            category: "Organization",
        },
        {
            title: "Orientation Facilitator Certificate",
            issuer: "Universitas Kristen Satya Wacana",
            period: "2023",
            image: "/images/certificates/orientation-certificate.jpg",
            category: "Campus Activity",
        },
    ];

    const featuredCertificates = certificates.slice(0, 4);
    const hiddenCertificates = certificates.slice(4);

    const CertificateCard = ({ certificate, index }) => (
        <motion.a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`group overflow-hidden rounded-3xl border transition-all duration-300 ${
                isLight
                    ? "border-slate-200 bg-white hover:border-cyan-300"
                    : "border-white/10 bg-slate-950/50 hover:border-cyan-400/40"
            }`}
        >
            <div className="relative overflow-hidden">
                <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full border border-cyan-400/20 bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cyan-300">
                    {certificate.category}
                </div>
            </div>

            <div className="p-5">
                <h3
                    className={`line-clamp-2 font-bold ${
                        isLight ? "text-slate-900" : "text-white"
                    }`}
                >
                    {certificate.title}
                </h3>

                <p
                    className={`mt-2 text-sm ${
                        isLight ? "text-cyan-600" : "text-cyan-300"
                    }`}
                >
                    {certificate.issuer}
                </p>

                <p
                    className={`mt-1 text-xs ${
                        isLight ? "text-slate-500" : "text-slate-400"
                    }`}
                >
                    {certificate.period}
                </p>
            </div>
        </motion.a>
    );

    return (
        <section id="certificates" className="relative overflow-hidden py-20">
            <NeonSectionBackground isLight={isLight} />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-12 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            Certificates
                        </p>

                        <h2
                            className={`mt-3 text-3xl font-bold md:text-4xl ${
                                isLight ? "text-slate-900" : "text-white"
                            }`}
                        >
                            Courses & Achievements
                        </h2>

                        <p
                            className={`mx-auto mt-4 max-w-2xl ${
                                isLight ? "text-slate-600" : "text-slate-300"
                            }`}
                        >
                            Certifications, achievements, organizations, and
                            learning experiences that support my growth in web
                            development and UI/UX design.
                        </p>
                    </div>

                    {/* Featured Certificates */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {featuredCertificates.map((certificate, index) => (
                            <CertificateCard
                                key={certificate.title}
                                certificate={certificate}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* View More Button */}
                    <div className="mt-8 text-center">
                        <button
                            onClick={() =>
                                setShowAllCertificates(!showAllCertificates)
                            }
                            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
                        >
                            {showAllCertificates
                                ? "Show Less"
                                : "View More Certificates"}
                        </button>
                    </div>

                    {/* Hidden Certificates */}
                    {showAllCertificates && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                height: 0,
                            }}
                            animate={{
                                opacity: 1,
                                height: "auto",
                            }}
                            transition={{
                                duration: 0.4,
                            }}
                            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                        >
                            {hiddenCertificates.map((certificate, index) => (
                                <CertificateCard
                                    key={certificate.title}
                                    certificate={certificate}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

function Contact({ isLight }) {
    const contacts = [
        {
            title: "Email",
            value: "herdasandra4@gmail.com",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=herdasandra4@gmail.com",
            icon: Mail,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
        },
        {
            title: "WhatsApp",
            value: "+62 898-5032-477",
            href: "https://wa.me/628985032477",
            icon: Phone,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
        },
        {
            title: "LinkedIn",
            value: "Sandra Kumalasari",
            href: "https://www.linkedin.com/in/herdaning-sandra-kumalasari-1a43552ab/",
            image: "/images/icons/linkedin.png",
            bg: "bg-blue-500/10",
        },
        {
            title: "Behance",
            value: "herdasandra",
            href: "https://www.behance.net/herdasandra",
            image: "/images/icons/behance.png",
            bg: "bg-purple-500/10",
        },
    ];

    return (
        <section id="contact" className="relative overflow-hidden py-20">
            <NeonSectionBackground isLight={isLight} />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`rounded-[2rem] border p-8 md:p-12 ${
                        isLight
                            ? "border-slate-200 bg-white/85"
                            : "border-cyan-400/20 bg-slate-950/50"
                    }`}
                >
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            Contact
                        </p>

                        <h2
                            className={`mt-3 text-3xl font-bold md:text-4xl ${
                                isLight ? "text-slate-900" : "text-white"
                            }`}
                        >
                            Let's Work Together
                        </h2>

                        <p
                            className={`mx-auto mt-4 max-w-2xl ${
                                isLight ? "text-slate-600" : "text-slate-300"
                            }`}
                        >
                            I'm open to internship opportunities, freelance
                            projects, collaborations, and discussions related to
                            web development and UI/UX design.
                        </p>

                        {/* STATUS */}
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            Currently Available
                        </div>
                    </div>

                    {/* CONTACT CARD */}
                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {contacts.map((contact, index) => {
                            const Icon = contact.icon;

                            return (
                                <motion.a
                                    key={contact.title}
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -6,
                                    }}
                                    className={`group rounded-3xl border p-6 transition-all duration-300 ${
                                        isLight
                                            ? "border-slate-200 bg-white/80"
                                            : "border-white/10 bg-slate-950/55 hover:border-cyan-400/40"
                                    }`}
                                >
                                    <div
                                        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${contact.bg}`}
                                    >
                                        {contact.image ? (
                                            <img
                                                src={contact.image}
                                                alt={contact.title}
                                                className="h-8 w-8"
                                            />
                                        ) : (
                                            <Icon
                                                size={28}
                                                className={contact.color}
                                            />
                                        )}
                                    </div>

                                    <h3
                                        className={`text-lg font-bold ${
                                            isLight
                                                ? "text-slate-900"
                                                : "text-white"
                                        }`}
                                    >
                                        {contact.title}
                                    </h3>

                                    <p
                                        className={`mt-2 text-sm ${
                                            isLight
                                                ? "text-slate-600"
                                                : "text-slate-400"
                                        }`}
                                    >
                                        {contact.value}
                                    </p>

                                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-300">
                                        Open
                                        <ExternalLink size={15} />
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* AVAILABLE SECTION */}
                    <div
                        className={`mt-10 rounded-3xl border p-6 ${
                            isLight
                                ? "border-slate-200 bg-slate-50"
                                : "border-cyan-400/20 bg-cyan-500/5"
                        }`}
                    >
                        <h3 className="mb-4 text-lg font-bold text-white">
                            Available For
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                                Internship Opportunity
                            </span>

                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                                Freelance Project
                            </span>

                            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                                Laravel Development
                            </span>

                            <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm text-pink-300">
                                UI/UX Collaboration
                            </span>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm text-slate-500">
                        Feel free to reach out for collaboration, internship
                        opportunities, or project discussions.
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Footer({ isLight }) {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            title: "Email",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=herdasandra4@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Sandra,%0D%0A%0D%0AI%20am%20interested%20in%20connecting%20with%20you%20after%20viewing%20your%20portfolio.%0D%0A%0D%0AThank%20you.",
            icon: Mail,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
        },
        {
            title: "WhatsApp",
            href: "https://wa.me/628985032477?text=Hello%20Sandra,%20I%20am%20interested%20in%20connecting%20with%20you%20after%20viewing%20your%20portfolio.",
            icon: MessageCircle,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
        },
        {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/herdaning-sandra-kumalasari-1a43552ab/",
            image: "/images/icons/linkedin.png",
            bg: "bg-blue-500/10",
        },
        {
            title: "Behance",
            href: "https://www.behance.net/herdasandra",
            image: "/images/icons/behance.png",
            bg: "bg-purple-500/10",
        },
    ];

    return (
        <footer
            className={`relative overflow-hidden border-t py-8 ${
                isLight
                    ? "border-slate-200 bg-white/70"
                    : "border-white/10 bg-slate-950/70"
            }`}
        >
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-[80px]" />
                <div className="absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-purple-500/10 blur-[80px]" />
            </div>

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
                <div className="text-center md:text-left">
                    <a href="#home" className="text-xl font-bold">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Portofolio
                        </span>
                    </a>

                    <p
                        className={`mt-2 text-sm ${
                            isLight ? "text-slate-500" : "text-slate-400"
                        }`}
                    >
                        © {currentYear} Herdaning Sandra Kumalasari. All rights
                        reserved.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {socialLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={item.title}
                                className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition hover:-translate-y-1 ${
                                    isLight
                                        ? "border-slate-200 bg-white shadow-md shadow-slate-200 hover:border-cyan-300"
                                        : "border-white/10 bg-slate-950/70 hover:border-cyan-400/40"
                                } ${item.bg}`}
                            >
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-6 w-6 object-contain"
                                    />
                                ) : (
                                    <Icon size={21} className={item.color} />
                                )}
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
