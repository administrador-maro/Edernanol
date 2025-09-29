import About from "../components/sections/About"
import Clients from "../components/sections/Clients"
import Hero from "../components/sections/Hero"
import Services from "../components/sections/Services"
import Testimonials2 from "../components/sections/Testimonials2"
import WhatsButton from "../components/ui/WhatsApp"

const HomePage = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Services />
      <About />
      <Clients />
      <Testimonials2 />
      <WhatsButton phone="+524422854563" message="Hola, me gustaría más información." />
    </div>
  )
}

export default HomePage
