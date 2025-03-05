import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="mailto:rehanhussain0842@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition">
            <FaEnvelope /> rehanhussain0842@gmail.com
          </a>
          <a href="tel:+917075123308" className="flex items-center gap-2 hover:text-blue-400 transition">
            <FaPhone /> +91 7075123308
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/rehan-rh" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/pinjari-rehan-hussain" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Rehan Hussain Pinjari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
