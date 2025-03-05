import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Contact Me Section */}
        <h2 className="text-4xl font-bold text-blue-400 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-300">Let's build something amazing together! 🚀</p>

        {/* Contact Details */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <a href="mailto:rehanhussain0842@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition">
            <FaEnvelope className="text-xl" /> rehanhussain0842@gmail.com
          </a>
          <a href="tel:+917075123308" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition">
            <FaPhone className="text-xl" /> +91 7075123308
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/rehan-rh" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pinjari-rehan-hussain-191517280/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Rehan Hussain Pinjari. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
