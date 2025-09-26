import imagen from "../../assets/elegirnos.png";
const AboutHero = () => {
  return (
    <section className="py-18 pb-8 bg-white flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-16">
        {/* Imagen con borde circular */}
        <div className="flex-shrink-0">
          <div className="relative w-[30rem] h-[30rem] flex items-center justify-center">
            {/* Círculo azul más grande */}
            <div className="absolute inset-0 rounded-full p-[32px] bg-gradient-to-r from-[#0C6D8D] to-[#29C4AC]">
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>

            {/* Imagen más pequeña para generar espacio */}
            <div className="relative z-10">
              <img
                src={imagen}
                alt="Equipo de trabajo"
                className="w-[22rem] h-[22rem] object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="text-center md:text-left max-w-2xl space-y-4">
          <p className="text-black text-4xl font-extralight">Acerca de</p>
          <h2 className="text-6xl font-extrabold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#0C6D8D] to-[#29C4AC] pb-4  ">
            Edernanol
          </h2>
          <p className="text-black text-2xl font-extralight">
            Expertos en el desarrollo de soluciones marítimas, brindando
            seguridad, eficiencia y tecnología de vanguardia para cada proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
