import React, { useEffect, useRef } from "react";

const skills = [
    { name: "HTML", img: "/logos/html-5.png" },
    { name: "CSS", img: "/logos/css-3.png" },
    { name: "TAILWIND", img: "/logos/tailwind.png" },
    { name: "JAVASCRIPT", img: "/logos/javascript.png" },
    { name: "MERN STACK", img: "/logos/MERNSTACK.png" },
    { name: "GITHUB", img: "/logos/git.png" },
    { name: "JAVA", img: "/logos/JAVA.png" },
    { name: "PYTHON", img: "/logos/python.png" },
    { name: "C", img: "/logos/C.png" },
    { name: "MYSQL", img: "/logos/mysql.png" }
];

const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in");
                        const skillCards = entry.target.querySelectorAll(".animate-skill-fade-in");
                        skillCards.forEach((card, idx) => {
                            setTimeout(() => {
                                card.classList.add("skill-visible-modern");
                            }, idx * 100);
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );
        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }
        return () => {
            if (skillsRef.current) observer.unobserve(skillsRef.current);
        };
    }, []);

    return (
        <div id="skills" className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#181c2b] via-[#23293a] to-[#3730a3] px-2 sm:px-4 py-10 sm:py-16">
            <div
                ref={skillsRef}
                className="max-w-7xl w-full mx-auto rounded-3xl shadow-2xl border border-indigo-700/30 px-2 sm:px-6 py-8 sm:py-12 flex flex-col items-center skills-bg opacity-0"
                style={{
                    minHeight: "620px",
                    height: "auto",
                    maxHeight: "720px"
                }}
            >
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white italic mb-8 sm:mb-10 text-center tracking-wide drop-shadow-lg">
                    Skills
                </h2>
                <div className="w-full flex items-center justify-center">
                    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-7 w-full">
                        {skills.map((skill, idx) => (
                            <div
                                key={skill.name}
                                className="rounded-2xl shadow-xl flex flex-col items-center justify-center py-3 sm:py-7 h-28 sm:h-44 bg-gradient-to-br from-[#23293a]/90 via-[#3730a3]/80 to-[#6366f1]/70 border border-indigo-700/20 animate-skill-fade-in opacity-0 hover:scale-105 transition-transform duration-300"
                                style={{
                                    boxShadow: "0 8px 32px 0 rgba(60,0,120,0.18), 0 2px 8px 0 rgba(0,0,0,0.10)"
                                }}
                            >
                                <div className="w-13 h-13 sm:w-20 sm:h-20 mb-2 sm:mb-3 flex items-center justify-center rounded-xl">
                                    <img
                                        src={skill.img}
                                        alt={skill.name}
                                        className="w-13 h-13 sm:w-20 sm:h-20 object-contain transition-transform duration-300 hover:scale-110"
                                        draggable="false"
                                    />
                                </div>
                                <span className="text-white font-semibold text-xs sm:text-sm tracking-wide mt-1 drop-shadow">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>
                {`
                .animate-fade-in {
                    opacity: 1 !important;
                    animation: fadeInModern 1.1s cubic-bezier(.4,0,.2,1) both;
                }
                @keyframes fadeInModern {
                    from { opacity: 0; filter: blur(8px) brightness(0.7);}
                    to { opacity: 1; filter: blur(0) brightness(1);}
                }
                .animate-skill-fade-in {
                    opacity: 0;
                    transform: scale(0.85) rotateY(30deg);
                    filter: blur(8px) brightness(0.7);
                    transition:
                        opacity 0.6s cubic-bezier(.4,0,.2,1),
                        transform 0.6s cubic-bezier(.4,0,.2,1),
                        filter 0.6s cubic-bezier(.4,0,.2,1);
                }
                .skill-visible-modern {
                    opacity: 1 !important;
                    transform: scale(1) rotateY(0) !important;
                    filter: blur(0) brightness(1) !important;
                }
                /* Hide background and border for skills container on mobile */
                @media (max-width: 640px) {
                    .skills-bg {
                        background: transparent !important;
                        border: none !important;
                        box-shadow: none !important;
                    }
                }
                `}
            </style>
        </div>
    );
};

export default Skills;