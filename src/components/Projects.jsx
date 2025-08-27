import React, { useState } from "react";

const projects = [
    {
        img: "/projectimg/portfolio.png",
        title: "Portfolio Website",
        desc: "A responsive portfolio website built with React and Tailwind CSS.",
        tech: ["REACT", "TAILWIND"],
        link: "https://raja-adhikary-portfolio.vercel.app"
    },
    {
        img: "/projectimg/Keyboard.png",
        title: "Keyboard Tester",
        desc: "A simple web-based keyboard tester to check if your keys are working properly.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        link: "https://raja-key-board-tester.vercel.app/"
    },
    {
        img: "/projectimg/youtube.png",
        title: "Youtube Clone",
        desc: "A basic YouTube clone project for streaming and browsing videos with a familiar interface.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        link: "https://youtube-clone-raja2005.vercel.app/"
    },
    {
        img: "/projectimg/StockPrice.png", 
        title: "Stock Price Checker",
        desc: "A web application to track stock prices in real-time.",
        tech: ["REACT", "TAILWIND", "API"],
        link: "https://raja-stock-price-checker.vercel.app/"
    },
    {
        img: "/projectimg/bridal.png",
        title: "Bridal-Parlour-Tutorial",
        desc: "A simple and elegant bridal parlour tutorial website built using HTML, CSS, and JavaScript. This project demonstrates how to design a professional and responsive website layout for beauty and bridal services",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        link: "https://bridal-parlour-tutoria-raja.vercel.app/"
    },
    {
        img: "/projectimg/Rock-Paper-Scissor.png",
        title: "Rock-Paper-Scissors Game",
        desc: "A simple Rock Paper Scissors game to play against the computer for fun.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        link: "https://rock-paper-scissors-raja.vercel.app/"
    },
    {   img: "/projectimg/amazon.png",
        title: "Amazon Clone",
        desc: "A basic amazon clone.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        link: "https://amazon-clone-raja.vercel.app/"
    }
];

const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(4);

    const showMoreProjects = () => {
        setVisibleCount((prev) => prev + 4);
    };

    return (
        <div id="projects" className="min-h-screen w-screen flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-[#181c2b] via-[#23293a] to-[#3730a3] py-16 px-4">
            <div className="relative bg-gradient-to-br from-[#23293a]/90 via-[#1f2937]/90 to-[#3730a3]/90 w-full sm:w-5/6 max-w-7xl mx-auto rounded-[32px] border border-indigo-700/30 shadow-[0_12px_48px_0_rgba(60,0,120,0.35)] shadow-indigo-900/70 backdrop-blur-xl overflow-hidden py-12 px-4 sm:px-12 transition-all duration-500">
                
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="animate-pulse w-2/3 h-2/3 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-indigo-600/20 rounded-full blur-2xl mx-auto mt-16"></div>
                </div>
                <div className="relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-extrabold italic mb-12 text-white text-center drop-shadow-2xl animate-fade-in">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.slice(0, visibleCount).map((project, idx) => (
                            <div
                                key={project.title + idx}
                                className="bg-gradient-to-br from-[#23293a]/80 via-[#3730a3]/80 to-[#6366f1]/70 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/40 border border-indigo-700/20 backdrop-blur-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in"
                                style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
                            >
                                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-indigo-100 mb-4">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 rounded-full text-sm text-white shadow">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-200"
                                        >
                                            View Project →
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleCount < projects.length && (
                        <div className="flex justify-center mt-10">
                            <button
                                onClick={showMoreProjects}
                                className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-bold shadow-lg hover:scale-105 transition-all duration-200"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </div>
                <style>
                    {`
                    .animate-fade-in {
                        animation: fadeIn 1s ease-out both;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(30px);}
                        to { opacity: 1; transform: translateY(0);}
                    }
                    `}
                </style>
            </div>
        </div>
    )
}

export default Projects