import edernanol from "../../assets/logogris.png"

const AboutHero = () => {
  return (
     <section className="py-24 bg-white flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Imagen con borde circular */}
        <div className="flex-shrink-0">
          <div className="relative w-[28rem] h-[28rem] flex items-center justify-center">
            {/* Círculo azul más grande */}
            <div className="absolute inset-0 rounded-full border-[30px] border-[#1E88E5]"></div>
            {/* Imagen más pequeña para generar espacio */}
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
              alt="Equipo de trabajo"
              className="w-[20rem] h-[20rem] object-cover rounded-full"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="text-center md:text-left max-w-2xl">
          <h3 className="text-2xl font-light text-gray-600">Acerca de</h3>
          <h2 className="text-5xl font-extrabold text-[#1E88E5] mb-6">Edernanol</h2>
          <p className="text-gray-700 text-2xl leading-relaxed">
            Expertos en el desarrollo de soluciones marítimas, brindando
            seguridad, eficiencia y tecnología de vanguardia para cada proyecto.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
