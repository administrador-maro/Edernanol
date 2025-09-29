import ContactCards from "../components/sections/ContactCards"
import ContactForm from "../components/sections/ContactForm"
import ContactIntro from "../components/sections/ContactIntro"


const ContactPage = () => {
  return (
    <section className="bg-gray-50 mx-auto px-6 lg:px-12 py-16 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Columna izquierda (Intro y Cards ocupan 2 columnas) */}
        <div className="lg:col-span-2 flex flex-col space-y-12">
          <ContactIntro />
          <ContactCards />
        </div>

        {/* Columna derecha (Formulario ocupa toda la altura) */}
        <div className="lg:col-span-1">
          <ContactForm />
        </div>
      </div>
    </section>


  )
}

export default ContactPage
