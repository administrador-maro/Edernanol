import About from "../components/sections/About"
import Clients from "../components/sections/Clients"
import Hero from "../components/sections/Hero"
import Services from "../components/sections/Services"
import Testimonials2 from "../components/sections/Testimonials2"

const HomePage = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Services />
      <About />
      <Clients />
      <Testimonials2 />
    </div>
  )
}

export default HomePage
