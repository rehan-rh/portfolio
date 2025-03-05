import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?technology,developer')",
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
            <span className="animate-textColorChange">
              A Full Stack Developer
            </span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-lg mx-auto md:mx-0">
            Building modern, scalable, and user-friendly web applications.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://github.com/rehan-rh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition duration-300 text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/pinjari-rehan-hussain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition duration-300 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Section - Full Stack GIF */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center items-center">
          <div className="w-80 h-80 rounded-xl overflow-hidden shadow-lg">
            <DotLottieReact
              src="https://lottie.host/6cea878b-f539-4aa9-819a-0a9ad2c7bd55/2RV4FXEfKm.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
