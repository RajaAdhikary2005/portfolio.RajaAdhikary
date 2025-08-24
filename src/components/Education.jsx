import React, { useRef, useEffect, useState } from "react";

const timelineItems = [
    {
        year: "2021",
        title: "Secondary Examination",
        desc: "Passed Secondary Examination from Gopal Nagar MSS  High School with 92.7%. This result marks an important milestone in my academic journey.",
        grad: "grad1"
    },
    {
        year: "2023",
        title: "Higher Secondary Examination",
        desc: "I completed my Higher Secondary from Gopal Nagar MSS  High School with 93.3%. It was a valuable learning phase where I focused on building my skills and knowledge, and I’m now looking forward to exploring new opportunities ahead.",
        grad: "grad2"
    },
    {
        year: "2023-2027",
        title: "Graduation",
        desc: "Currently pursuing my BCA (Bachelor of Computer Applications) at Techno Main Salt Lake, started in 2023 and expected to complete in 2027. Excited to keep learning and building my skills in the tech field.",
        grad: "grad3"
    }
];

const Education = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div id="education" className="flex h-screen w-screen items-center justify-center overflow-x-hidden bg-gradient-to-br from-[#181c2b] via-[#23293a] to-[#3730a3]">
            <div
                ref={sectionRef}
                className="relative bg-gradient-to-br from-[#23293a]/90 via-[#1f2937]/90 to-[#3730a3]/90 w-full sm:w-5/6 max-w-5xl mx-auto rounded-[32px] border border-indigo-700/30 shadow-[0_12px_48px_0_rgba(60,0,120,0.35)] shadow-indigo-900/70 backdrop-blur-xl overflow-hidden h-[800px] sm:h-auto py-10 px-4 sm:px-16 transition-all duration-500"
            >
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="animate-pulse w-2/3 h-2/3 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-indigo-600/20 rounded-full blur-2xl mx-auto mt-16"></div>
                </div>
                <div className="relative z-10">
                    <div className="text-white text-4xl sm:text-5xl font-extrabold italic mb-12 text-center sm:text-left drop-shadow-2xl animate-fade-in">
                        Education
                    </div>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white">
                        {timelineItems.map((item, idx) => (
                            <li
                                key={item.year}
                                className={visible ? "animate-timeline-fade-in" : ""}
                                style={visible ? { animationDelay: `${0.3 + idx * 0.3}s` } : {}}
                            >
                                {idx !== 0 && (
                                    <hr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 h-1 border-0"/>
                                )}
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={`url(#${item.grad})`} className="h-6 w-6 drop-shadow-lg">
                                        <defs>
                                            <linearGradient id={item.grad} x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#6366f1" />
                                                <stop offset="100%" stopColor="#a78bfa" />
                                            </linearGradient>
                                        </defs>
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className={`${idx % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"} mb-10`}>
                                    <time className="font-mono italic text-indigo-300 text-lg drop-shadow">{item.year}</time>
                                    <div className="text-lg font-semibold mb-2 text-indigo-100">{item.title}</div>
                                    <p className="text-indigo-200">{item.desc}</p>
                                </div>
                                <hr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 h-1 border-0"/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <style>
                {`
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                }
                .animate-fade-in {
                    animation: fadeIn 1.2s ease both;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-timeline-fade-in {
                    opacity: 0;
                    animation: timelineFadeIn 1s cubic-bezier(.4,0,.2,1) forwards;
                }
                @keyframes timelineFadeIn {
                    from { opacity: 0; transform: translateY(40px) scale(0.95);}
                    to { opacity: 1; transform: translateY(0) scale(1);}
                }
                `}
            </style>
        </div>
    )
};

export default Education;