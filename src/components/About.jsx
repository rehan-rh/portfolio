import { motion } from "framer-motion";
import Profile from "../assets/rehan_profile.png";

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
          <div className="flex justify-center md:justify-start">
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-blue-300 shadow-lg flex items-center justify-center">
              <img
                src={Profile} 
                alt="Rehan Hussain Pinjari"
                className="w-full h-full object-cover object-center scale-110"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-400 mb-4">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm <span className="text-blue-300 font-semibold">Rehan Hussain Pinjari</span>, a 
              <span className="text-blue-300 font-semibold"> Full-Stack MERN Developer</span> with a passion for 
              building scalable and interactive web applications. 
              Currently, I'm interning at <span className="text-blue-300 font-semibold">Scale Orange</span>,
              where I work on real-world projects that enhance user experience and system performance.
            </p>
            <p className="mt-4 text-gray-300">
              I'm pursuing a <span className="text-blue-300 font-semibold">B.Tech in Computer Science</span> at RGUKT and 
              enjoy research-driven learning, problem-solving, and software development. 
              My expertise includes <span className="text-blue-300 font-semibold">React.js, Node.js, MongoDB, Java, and JavaScript</span>.
            </p>
            <p className="mt-4 text-gray-300">
              I love collaborating with teams, building innovative solutions, and continuously improving my skills.
              Let's connect and create something amazing together!
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
