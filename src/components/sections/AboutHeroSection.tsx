import puertoImg from "../../assets/50_años_de_experiencia.png";
import CustomIcon from "../ui/CustomIcon";

const AboutHeroSection = () => {
  return (
     <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          {/* Título con icono */}
          <h2 className="text-2xl md:text-3xl font-bold text-black flex items-center gap-2 mb-6">
            <CustomIcon size={150} color1="#065077" color2="#2FA9C9" />
            50 años de experiencia en transporte marítimo, logística integral y operación portuaria
          </h2>

          {/* Párrafos */}
          <p className="text-black leading-relaxed mb-4 text-lg">
            En Edernanol diseñamos y operamos soluciones marítimas y logísticas para optimizar la cadena de suministro. Somos especialistas
             en transporte marítimo, mantenimiento industrial y servicios portuarios, brindando un servicio confiable, eficiente y seguro.
          </p>

          <p className="text-black leading-relaxed mb-4 text-lg">
            Nuestras operaciones están orientadas a garantizar continuidad en cada eslabón de 
            la logística: desde el arribo de embarcaciones hasta la descarga, almacenamiento y distribución terrestre.
            Aplicamos altos estándares operativos y normativos que nos permiten 
            reducir tiempos, optimizar costos y asegurar un flujo constante y seguro de mercancías.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={puertoImg}
            alt="Puerto y operaciones logísticas"
            className="shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
