import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?technology,developer')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 md:px-16 gap-x-12">
        
        {/* Left Section - Animated Text */}
        <div className="text-center md:text-left md:w-1/2 mt-2">
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
        <div className="md:w-1/2 flex justify-center md:justify-end items-center">
          <div className="w-[450px] h-[450px] rounded-xl overflow-hidden shadow-lg mb-3">
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
