import ContactCards from "../components/sections/ContactCards"
import ContactForm from "../components/sections/ContactForm"
import ContactIntro from "../components/sections/ContactIntro"


const ContactPage = () => {
  return (
    <section className="bg-gray-50 mx-auto px-6 lg:px-12 py-16 mt-20">
      <ContactIntro />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactCards />
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactPage
