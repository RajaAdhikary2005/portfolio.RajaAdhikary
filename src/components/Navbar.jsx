import React, { useState, useEffect } from 'react';

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" }
];

const Navbar = () => {
    const [active, setActive] = useState("Home");

    
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { name: "Home", id: "home" },
                { name: "Education", id: "education" },
                { name: "Projects", id: "projects" },
                { name: "Skills", id: "skills" }
            ];
            let found = "Home";
            for (let i = 0; i < sections.length; i++) {
                const el = document.getElementById(sections[i].id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom > 120) {
                        found = sections[i].name;
                        break;
                    }
                }
            }
            setActive(found);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    
    const handleNavClick = (e, href, name) => {
        e.preventDefault();
        setActive(name);
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 60,
                behavior: "smooth"
            });
        }
    };

    
    const handleContactClick = (e) => {
        e.preventDefault();
        const el = document.getElementById("contact");
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 60,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <div className="fixed w-full px-4 h-16 z-30 top-4">
                <nav className="bg-gradient-to-r from-[#23293a]/95 via-[#3730a3]/95 to-[#6366f1]/95 max-w-2xl mx-auto rounded-full border border-indigo-700/40 shadow-[0_12px_32px_0_rgba(60,0,120,0.35)] shadow-indigo-900/70 backdrop-blur-xl">
                    <div className="flex h-16 items-center justify-between px-3 sm:px-6">
                        <div className="flex space-x-2 sm:space-x-4">
                            {navLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={e => handleNavClick(e, link.href, link.name)}
                                    className={`rounded-full px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200
                                        ${active === link.name
                                            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-semibold shadow-lg scale-105"
                                            : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="hidden sm:inline-block text-indigo-200 font-bold text-base tracking-wide drop-shadow-lg">Mriganka</span>
                            <a
                                href="#contact"
                                onClick={handleContactClick}
                                className="focus:outline-none"
                                tabIndex={0}
                                aria-label="Contact"
                            >
                                <img
                                    src="/photo.jpg"
                                    alt="Profile"
                                    className="h-8 w-8 rounded-full border-2 border-indigo-500 shadow-lg bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-indigo-600/30 hover:scale-110 transition-all duration-200"
                                />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default Navbar;