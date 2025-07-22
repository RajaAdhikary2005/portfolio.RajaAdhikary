const Contact = () => {
    return (
        <div className="min-h-screen w-screen bg-gray-900 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold italic mb-12 text-white text-center">
                    Get In Touch
                </h2>
                <div className="bg-gray-800 rounded-xl p-8">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-white mb-2">Name</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-2">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-2">Message</label>
                            <textarea 
                                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                        </div>
                        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact