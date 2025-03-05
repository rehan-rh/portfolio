import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,developer')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen text-white px-6 md:px-16">
        {/* Left Section - Animated Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fadeInUp">
            Hi, I'm <span className="text-blue-400">Rehan</span>
            <br />
            <span className="animate-textColorChange">A Full Stack Developer</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-lg mx-auto md:mx-0">
            Building modern, scalable, and user-friendly web applications.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition duration-300 text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition duration-300 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition duration-300 text-2xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Right Section - Profile */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center items-center">
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg animate-zoomIn">
            <img
              src="https://source.unsplash.com/400x400/?person,developer"
              alt="Rehan's Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
