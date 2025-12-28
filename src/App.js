import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

import About from "./sections/About";
import Internships from "./sections/Internships";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Internships />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
