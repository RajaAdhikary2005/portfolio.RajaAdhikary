import React from "react";


const Home = () => {
    return (
        <div className="flex h-screen w-screen bg-gray-900 justify-center overflow-x-hidden">
            <div className="bg-[#1f2937] w-full sm:w-5/6 max-w-6xl mx-auto mt-24 sm:mt-32 rounded-[40px] shadow-2xl overflow-hidden sm:h-[650px] flex items-center">
                <div className="flex flex-col sm:flex-row w-full h-full">
                    <div className="w-full sm:w-[38%] h-[250px] sm:h-full">
                        <img
                            src="/photo.jpg"
                            className="w-full h-full object-cover"
                            alt="Profile"
                        />
                    </div>
                    <div className="w-full sm:w-[55%] flex flex-col justify-center items-center sm:items-start px-12 py-12 h-full">
                        <h1 className="text-5xl font-extrabold text-white mb-6 text-center sm:text-left">
                            Hi, I'm Mriganka
                        </h1>
                        <p className="text-2xl italic font-semibold text-white mb-4 text-center sm:text-left">
                            Frontend Developer & Gamer, blending creativity with code.
                        </p>
                        <p className="text-lg font-medium text-gray-400 mb-10 text-center sm:text-left">
                            Building modern web experiences — and winning battles after hours.
                        </p>
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-2xl bg-[#6366f1] hover:bg-[#4f46e5] text-white text-lg font-semibold shadow-lg transition-all duration-300"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;