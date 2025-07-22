import Home from "./components/Home"
import Portsecond from "./components/Portsecond"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <Navbar />
      <Portsecond />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App