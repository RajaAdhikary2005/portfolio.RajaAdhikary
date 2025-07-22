import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Portsecond from "./components/Portsecond"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Portsecond />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App