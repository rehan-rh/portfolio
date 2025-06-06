import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
