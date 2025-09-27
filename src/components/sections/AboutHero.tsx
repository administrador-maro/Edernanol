import imagen from "../../assets/elegirnos.png";
import logogris from "../../assets/logogris3.png"

const AboutHero = () => {
  return (
    <section className="shadow-4xl py-18 bg-gradient-to-l from-[#065077] to-[#2F9DB8] flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-16">

        {/* Imagen con borde circular */}
        <div className="flex-shrink-0">
          <div className="relative w-[30rem] h-[30rem] flex items-center justify-center">
            {/* Imagen de fondo circular más grande */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <img
                src={logogris}
                alt="Decoración fondo"
                className="w-[34rem] h-[34rem] object-cover rounded-full opacity-80 aspect-square"
              />
            </div>

            {/* Círculo con degradado */}
            <div className="absolute inset-0 rounded-full p-[32px] bg-gradient-to-r from-[#2F9DB8] to-[#2F9DB8] z-10">
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>

            {/* Imagen principal */}
            <div className="relative z-20">
              <img
                src={imagen}
                alt="Equipo de trabajo"
                className="w-[22rem] h-[22rem] object-cover rounded-full shadow-xl aspect-square"
              />
            </div>
          </div>
        </div>


        {/* Texto */}
        <div className="text-center md:text-left max-w-2xl space-y-4 text-white">
          <p className="text-4xl font-extralight">Acerca de</p>
          <h2 className="text-2xl font-extrabold md:text-8xl bg-clip-text text-transparent bg-white pb-4">
            Edernanol
          </h2>
          <p className="text-xl font-extralight leading-relaxed">
            Expertos en el desarrollo de soluciones marítimas, brindando
            seguridad, eficiencia y tecnología de vanguardia para cada proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
