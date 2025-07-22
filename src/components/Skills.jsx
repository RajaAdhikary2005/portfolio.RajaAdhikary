const Skills = () => {
    const skills = [
        { name: "MongoDB", icon: "devicon-mongodb-plain", proficiency: 75 },
        { name: "Express", icon: "devicon-express-original", proficiency: 80 },
        { name: "React", icon: "devicon-react-original", proficiency: 85 },
        { name: "Node.js", icon: "devicon-nodejs-plain", proficiency: 80 },
        { name: "JavaScript", icon: "devicon-javascript-plain", proficiency: 90 },
        { name: "TypeScript", icon: "devicon-typescript-plain", proficiency: 75 },
        { name: "HTML5", icon: "devicon-html5-plain", proficiency: 95 },
        { name: "CSS3", icon: "devicon-css3-plain", proficiency: 90 },
        { name: "TailwindCSS", icon: "devicon-tailwindcss-plain", proficiency: 85 },
        { name: "Git", icon: "devicon-git-plain", proficiency: 85 },
        { name: "C", icon: "devicon-c-plain", proficiency: 70 },
        { name: "Java", icon: "devicon-java-plain", proficiency: 75 },
        { name: "PHP", icon: "devicon-php-plain", proficiency: 70 },
        { name: "MySQL", icon: "devicon-mysql-plain", proficiency: 80 },
        { name: "Firebase", icon: "devicon-firebase-plain", proficiency: 75 },
        { name: "Redux", icon: "devicon-redux-original", proficiency: 80 }
    ];

    return (
        <div className="min-h-screen w-screen bg-gray-900 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold italic mb-12 text-white text-center">
                    Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="w-24 h-24 bg-gray-800 rounded-xl flex items-center justify-center mb-4 
                                          transform transition-all duration-300 group-hover:scale-110">
                                <i className={`${skill.icon} text-4xl text-blue-500`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div 
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                                    style={{width: `${skill.proficiency}%`}}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;