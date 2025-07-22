import React from "react";

const Home = () => {
    
    const handleViewWork = (e) => {
        e.preventDefault();
        const el = document.getElementById("projects");
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 60,
                behavior: "smooth"
            });
        }
    };

    return (
        <div id="home" className="flex min-h-screen w-screen items-center justify-center overflow-x-hidden bg-gradient-to-br from-[#181c2b] via-[#23293a] to-[#3730a3]">
            <div className="relative bg-gradient-to-br from-[#23293a]/90 via-[#1f2937]/90 to-[#3730a3]/90 w-11/12 sm:w-5/6 max-w-6xl mx-auto rounded-[40px] border border-indigo-700/30 shadow-[0_12px_48px_0_rgba(60,0,120,0.35)] shadow-indigo-900/70 backdrop-blur-xl overflow-hidden h-[500px] sm:h-[650px] flex items-center transition-all duration-500">
                
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="animate-pulse w-2/3 h-2/3 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-indigo-600/20 rounded-full blur-2xl mx-auto mt-16"></div>
                </div>
                <div className="flex flex-col sm:flex-row w-full h-full py-8 sm:py-0 relative z-10">
                    
                    <div className="hidden sm:flex w-[38%] h-full items-center justify-center relative">
                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-transparent pointer-events-none z-0"></div>
                        <div className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl shadow-indigo-800/60 border-4 border-indigo-500/40 transition-transform duration-300 hover:scale-105 bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-indigo-600/40 animate-float relative z-10">
                            <img
                                src="/photo.jpg"
                                className="w-full h-full object-cover"
                                alt="Profile"
                            />
                        </div>
                    </div>
                    
                    <div className="w-full sm:hidden flex justify-center pt-8">
                        <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl shadow-indigo-800/60 border-4 border-indigo-500/40 transition-transform duration-300 hover:scale-105 bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-indigo-600/40 animate-float">
                            <img
                                src="/photo.jpg"
                                className="w-full h-full object-cover"
                                alt="Profile"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-[55%] flex flex-col justify-center items-center sm:items-start px-6 sm:px-12 py-6 sm:py-12">
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 sm:mb-6 text-center sm:text-left drop-shadow-2xl animate-fade-in">
                            Hi, I'm Mriganka
                        </h1>
                        <p className="text-lg sm:text-2xl italic font-semibold text-indigo-100 mb-2 sm:mb-4 text-center sm:text-left leading-tight drop-shadow animate-fade-in delay-100">
                            Frontend Developer & Gamer, blending creativity with code.
                        </p>
                        <p className="text-base sm:text-lg font-medium text-indigo-200 mb-6 sm:mb-10 text-center sm:text-left drop-shadow animate-fade-in delay-200">
                            Building modern web experiences — and winning battles after hours.
                        </p>
                        <a
                            href="#projects"
                            onClick={handleViewWork}
                            className="px-5 sm:px-8 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white text-base sm:text-lg font-semibold shadow-2xl transition-all duration-300 animate-bounce"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            
            <style>
                {`
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                `}
            </style>
        </div>
    )
};

export default Home;