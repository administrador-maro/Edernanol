import imagen from "../../assets/elegirnos.png";
import logoTexto from "../../assets/logo_texto.png"


const AboutHero = () => {
  return (
    <section className="shadow-4xl py-18 bg-gradient-to-l from-[#065077] to-[#2F9DB8] flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-16">

        {/* Imagen con borde circular */}
        <div className="relative flex items-center justify-center w-[530px] h-[530px]">
          {/* Imagen de fondo */}
          

          {/* Círculo azul */}
          <div className="absolute w-[470px] h-[470px] bg-[#065077] rounded-full"></div>

          {/* Círculo blanco */}
          <div className="absolute w-[410px] h-[410px] bg-white rounded-full"></div>

          {/* Imagen pequeña encima */}
          <img
            src={imagen}
            alt="Imagen pequeña"
            className="relative w-[350px] h-[350px] object-cover rounded-full"
          />
        </div>



        {/* Texto */}
        <div className="text-center md:text-left max-w-2xl space-y-4 text-white">
          <p className="text-4xl font-extralight">Acerca de</p>
           {/* Logo de texto en lugar del H2 */}
          <img
            src={logoTexto}
            alt="Edernanol"
            className="mx-auto md:mx-0 w-[300px] md:w-[420px] object-contain"
          />
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
