import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <img
            src="https://via.placeholder.com/300" // Replace with your actual image
            alt="Rehan Hussain Pinjari"
            className="w-60 h-60 object-cover rounded-full shadow-lg mx-auto md:mx-0 border-4 border-blue-400"
          />

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-400 mb-4">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm <span className="text-blue-300 font-semibold">Rehan Hussain Pinjari</span>, a 
              <span className="text-blue-300 font-semibold"> Full-Stack MERN Developer</span> passionate about building 
              scalable web applications and interactive user experiences. I thrive on writing clean, efficient code 
              and collaborating with agile teams to develop high-quality products.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md transition-all"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
