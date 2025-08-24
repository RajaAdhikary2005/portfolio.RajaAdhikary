import React from "react";

const Home = () => {
  const handleViewWork = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-x-hidden bg-gradient-to-br from-[#181c2b] via-[#23293a] to-[#3730a3]"
    >
      {/* Background glow layer (visual only) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-pulse w-1/2 h-1/2 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-indigo-600/20 rounded-full blur-2xl mx-auto mt-10"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4">
        {/* Main panel/card – wide, no fixed height */}
        <div className="mx-auto w-full max-w-7xl rounded-[40px] border border-indigo-700/30 shadow-[0_12px_48px_0_rgba(60,0,120,0.35)] shadow-indigo-900/70 backdrop-blur-xl bg-gradient-to-br from-[#23293a]/90 via-[#1f2937]/90 to-[#3730a3]/90 p-6 sm:p-10">
          {/* Two-column responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* LEFT: Image */}
            <div className="w-full">
              <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-indigo-800/60 border-4 border-indigo-500/40 transition-transform duration-300 hover:scale-105 bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-indigo-600/40 animate-float">
                <img
                  src="/photo.jpg"
                  alt="Profile"
                  className="w-full h-[420px] md:h-[520px] lg:h-[600px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT: Text and CTA */}
            <div className="w-full flex flex-col justify-center items-start px-2 sm:px-6 lg:px-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl animate-fade-in">
                Hi, I'm Raja Adhikary
              </h1>

              <p className="text-lg md:text-2xl italic font-semibold text-indigo-100 mb-3 leading-tight drop-shadow animate-fade-in delay-100">
                Frontend Developer & Gamer, blending creativity with code.
              </p>

              <p className="text-base md:text-lg font-medium text-indigo-200 mb-8 drop-shadow animate-fade-in delay-200">
                Building modern web experiences — and winning battles after hours.
              </p>

              <a
                href="#projects"
                onClick={handleViewWork}
                className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white text-base md:text-lg font-semibold shadow-2xl transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
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
      `}</style>
    </section>
  );
};

export default Home;

