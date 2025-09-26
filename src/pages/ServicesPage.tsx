import ServicesHero from "../components/sections/ServicesHero"
import ServiceSection from "../components/sections/ServiceSection"
import ServiceSection2 from "../components/sections/ServiceSection2"
import ServiceSection3 from "../components/sections/ServiceSection3"
import BenefitsSection from "../components/sections/BenefitsSection"

const ServicesPage = () => {
  return (
    <div className="mt-20">
        <ServicesHero />
        <ServiceSection />
        <ServiceSection2 />
        <ServiceSection3 />
        <BenefitsSection />
    </div>
  )
}

export default ServicesPage
