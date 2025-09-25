import Hero from "./components/sections/Hero"
import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Services from "./components/sections/Services"
import Footer from "./components/layout/Footer"

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  )
}

export default App
