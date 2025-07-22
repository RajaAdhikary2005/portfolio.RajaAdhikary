import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="fixed w-full px-4 h-16 z-10 top-4">
                <nav className="bg-gray-800 max-w-2xl mx-auto rounded-full shadow-lg shadow-gray-800/50">
                    <div className="flex h-16 items-center justify-between px-6">
                        <div className="flex space-x-4">
                            <a href="#" className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors">Home</a>
                            <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">About</a>
                            <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">Projects</a>
                            <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">Skills</a>
                        </div>
                        <img src="/photo.jpg" alt="Profile" className="h-8 w-8 rounded-full border-2 border-gray-600" />
                    </div>
                </nav>
            </div>
        </>
    )   
};

export default Navbar;