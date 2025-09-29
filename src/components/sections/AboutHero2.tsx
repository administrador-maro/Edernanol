import imagen from "../../assets/elegirnos.png";
import overlay from "../../assets/logogris3.png"; // 👈 tu imagen transparente/decorativa

const AboutHero2 = () => {
  return (
    <section className="relative shadow-4xl py-18 bg-gradient-to-l from-[#065077] to-[#2F9DB8] flex items-center justify-center min-h-[700px]">
      {/* Imagen de fondo encima del degradado */}
      <div className="absolute inset-0">
        <img
          src={overlay}
          alt="Overlay decorativo"
          className="w-full h-full object-cover opacity-40" 
        />
      </div>

      {/* Contenido */}
      <div className="relative container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-16">
        {/* Imagen con borde circular */}
        <div className="relative flex items-center justify-center w-[530px] h-[530px]">
          <div className="absolute w-[470px] h-[470px] bg-[#065077] rounded-full"></div>
          <div className="absolute w-[410px] h-[410px] bg-white rounded-full"></div>
          <img
            src={imagen}
            alt="Imagen pequeña"
            className="relative w-[350px] h-[350px] object-cover rounded-full"
          />
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

export default AboutHero2;
