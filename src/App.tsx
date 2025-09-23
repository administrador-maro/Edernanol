import Hero from "./components/sections/Hero"
import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Services from "./components/sections/Services"
Services


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
    </div>
  )
}

export default App
