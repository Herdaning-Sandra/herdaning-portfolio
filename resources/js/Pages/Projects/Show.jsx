import { usePage, Link } from "@inertiajs/react";
import { projects } from "./data";
import {
    SiLaravel,
    SiPhp,
    SiJavascript,
    SiMysql,
    SiFigma,
    SiGithub,
} from "react-icons/si";

import { TbArrowsExchange } from "react-icons/tb";

import { FaPenNib, FaSitemap, FaMobileAlt } from "react-icons/fa";
import { CalendarDays, Briefcase, User, CircleDot } from "lucide-react";
import { motion } from "framer-motion";

export default function Show() {
    const { slug } = usePage().props;

    const project = projects.find((item) => item.slug === slug);

    const techIcons = {
        Laravel: <SiLaravel />,
        PHP: <SiPhp />,
        JavaScript: <SiJavascript />,
        MySQL: <SiMysql />,
        GitHub: <SiGithub />,
        AJAX: <TbArrowsExchange />,

        Figma: <SiFigma />,
        "Design Thinking": <FaPenNib />,
        Wireframing: <FaSitemap />,
        Prototyping: <FaMobileAlt />,
    };

    if (!project) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#020617] text-white">
                Project not found
            </div>
        );
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

                <div className="absolute right-[-200px] top-[400px] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px]" />

                <div className="absolute left-1/2 top-[1000px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.08),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_50%)]" />
            <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
                <Link href="/" className="mb-8 inline-block text-cyan-400">
                    ← Back to Portfolio
                </Link>

                <img
                    src={project.image}
                    alt={project.title}
                    className="mb-10 w-full rounded-3xl"
                />

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* LEFT */}
                    <div>
                        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                            {project.title}
                        </h1>

                        <p className="mt-5 text-lg text-slate-400">
                            {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {project.tech.map((tech) => (
                                <motion.div
                                    key={tech}
                                    whileHover={{
                                        y: -3,
                                        scale: 1.05,
                                    }}
                                    className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/15 hover:shadow-lg hover:shadow-cyan-500/10"
                                >
                                    <span className="text-lg">
                                        {techIcons[tech]}
                                    </span>

                                    <span>{tech}</span>
                                </motion.div>
                            ))}
                        </div>

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105"
                            >
                                Live Demo ↗
                            </a>
                        )}
                    </div>

                    <div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <motion.div
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                }}
                                transition={{ duration: 0.2 }}
                                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
                            >
                                <Briefcase
                                    size={28}
                                    className="mb-3 text-cyan-400"
                                />

                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                    Project Type
                                </p>

                                <p className="mt-2 text-lg font-semibold text-white">
                                    {project.type}
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                }}
                                transition={{ duration: 0.2 }}
                                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
                            >
                                <User
                                    size={28}
                                    className="mb-3 text-cyan-400"
                                />

                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                    Role
                                </p>

                                <p className="mt-2 text-lg font-semibold text-white">
                                    {project.role}
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                }}
                                transition={{ duration: 0.2 }}
                                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
                            >
                                <CalendarDays
                                    size={28}
                                    className="mb-3 text-cyan-400"
                                />

                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                    Duration
                                </p>

                                <p className="mt-2 text-lg font-semibold text-white">
                                    {project.duration}
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                }}
                                transition={{ duration: 0.2 }}
                                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
                            >
                                <CircleDot
                                    size={28}
                                    className="mb-3 text-emerald-400"
                                />

                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                    Status
                                </p>

                                <p className="mt-2 text-lg font-semibold text-emerald-400">
                                    {project.status}
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            whileHover={{
                                y: -5,
                                scale: 1.02,
                            }}
                            transition={{ duration: 0.2 }}
                            className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                            <h3 className="mb-3 text-lg font-semibold text-white">
                                Project Overview
                            </h3>

                            <p className="leading-relaxed text-slate-400">
                                {project.overview}
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -5 }}
                        className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
                    >
                        <h2 className="mb-4 text-2xl md:text-3xl font-bold">
                            The Problem
                        </h2>

                        <p className="leading-relaxed text-slate-400">
                            {project.problem}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                        }}
                        whileHover={{ y: -5 }}
                        className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
                    >
                        <h2 className="mb-4 text-2xl md:text-3xl font-bold">
                            My Solution
                        </h2>

                        <p className="leading-relaxed text-slate-400">
                            {project.solution}
                        </p>
                    </motion.div>
                </div>

                <section className="mt-10">
                    <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
                        <h2 className="mb-6 text-2xl md:text-3xl font-bold">
                            Key Features
                        </h2>

                        <div className="grid gap-4 md:grid-cols-2">
                            {project.features.map((feature) => (
                                <motion.div
                                    key={feature}
                                    whileHover={{
                                        y: -4,
                                        scale: 1.02,
                                    }}
                                    className="rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10"
                                >
                                    <span className="text-cyan-400">✓</span>

                                    <span className="ml-3">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {project.contributions && (
                    <section className="mt-10">
                        <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
                            <h2 className="mb-6 text-2xl md:text-3xl font-bold">
                                My Contributions
                            </h2>

                            <div className="grid gap-4 md:grid-cols-2">
                                {project.contributions.map((item) => (
                                    <motion.div
                                        key={item}
                                        whileHover={{
                                            y: -4,
                                            scale: 1.02,
                                        }}
                                        className="rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                                    >
                                        <span className="text-cyan-400">✓</span>

                                        <span className="ml-3">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {project.impact && (
                    <section className="mt-10">
                        <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
                            <h2 className="mb-4 text-2xl md:text-3xl font-bold">
                                Project Impact
                            </h2>

                            <p className="leading-relaxed text-slate-400">
                                {project.impact}
                            </p>
                        </div>
                    </section>
                )}

                <section className="mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold">Gallery</h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {project.gallery.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -5,
                                }}
                                className={`overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition-all duration-300 hover:border-cyan-400/30 ${item.size === "large" ? "md:col-span-2" : ""}`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full transition duration-300 hover:scale-105"
                                />

                                <div className="border-t border-white/10 bg-slate-950 px-4 py-3 text-center">
                                    <p className="text-sm font-medium text-slate-300">
                                        {item.title}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mt-16">
                    <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
                        <h2 className="mb-6 text-2xl md:text-3xl font-bold">
                            What I Learned
                        </h2>

                        <div className="grid gap-4 md:grid-cols-2">
                            {project.learnings.map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{
                                        y: -4,
                                        scale: 1.02,
                                    }}
                                    className="
                    rounded-xl
                    border
                    border-purple-400/10
                    bg-purple-500/5
                    p-4
                    transition-all
                    duration-300
                    hover:border-purple-400/40
                    hover:bg-purple-500/10
                    hover:shadow-lg
                    hover:shadow-purple-500/10
                "
                                >
                                    <span className="text-purple-400">✦</span>

                                    <span className="ml-3">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
