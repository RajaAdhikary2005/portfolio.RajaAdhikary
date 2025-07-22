import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="fixed w-full px-4 h-16 z-30 top-4">
                <nav className="bg-gradient-to-r from-[#23293a]/95 via-[#3730a3]/95 to-[#6366f1]/95 max-w-2xl mx-auto rounded-full border border-indigo-700/40 shadow-[0_12px_32px_0_rgba(60,0,120,0.35)] shadow-indigo-900/70 backdrop-blur-xl">
                    <div className="flex h-16 items-center justify-between px-3 sm:px-6">
                        <div className="flex space-x-2 sm:space-x-4">
                            <a href="#" className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 px-2 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg hover:scale-105 hover:bg-indigo-700 transition-all duration-200">Home</a>
                            <a href="#" className="rounded-full px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-indigo-100 hover:bg-indigo-700 hover:text-white transition-all duration-200">About</a>
                            <a href="#" className="rounded-full px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-indigo-100 hover:bg-indigo-700 hover:text-white transition-all duration-200">Projects</a>
                            <a href="#" className="rounded-full px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-indigo-100 hover:bg-indigo-700 hover:text-white transition-all duration-200">Skills</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="hidden sm:inline-block text-indigo-200 font-bold text-base tracking-wide drop-shadow-lg">Mriganka</span>
                            <img src="/photo.jpg" alt="Profile" className="h-8 w-8 rounded-full border-2 border-indigo-500 shadow-lg bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-indigo-600/30" />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )   
};

export default Navbar;