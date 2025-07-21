import Portfirst from "./components/Portfirst"
import Portsecond from "./components/Portsecond"

function App() {
  return (
    <>
      <Portfirst />
      <Portsecond />
      <div className="flex flex-wrap h-screen w-screen bg-green-400"></div>
      <div className="flex flex-wrap h-screen w-screen bg-blue-400"></div>
      <div className="flex flex-wrap h-screen w-screen bg-pink-400"></div>
    </>
  )
}

export default App
