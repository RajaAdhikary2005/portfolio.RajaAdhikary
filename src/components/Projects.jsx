const Projects = () => {
    return (
        <div className="min-h-screen w-screen bg-gray-900 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold italic mb-12 text-white text-center">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project Card 1 */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                        <img src="/project1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Portfolio Website</h3>
                            <p className="text-gray-300 mb-4">A responsive portfolio website built with React and Tailwind CSS.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">React</span>
                                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">Tailwind</span>
                            </div>
                            <a href="#" className="text-blue-400 hover:text-blue-300">View Project →</a>
                        </div>
                    </div>

                    {/* Add more project cards here */}
                </div>
            </div>
        </div>
    )
}

export default Projects