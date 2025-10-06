import React from "react";
import CustomIcon from "../ui/CustomIcon";
import mision from "../../assets/mision_y_vision.png";

const MissionVision: React.FC = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagen a la izquierda (oculta en móviles) */}
        <div className="hidden md:block">
          <img
            src={mision}
            alt="Equipo Edernanol"
            className="w-full h-auto object-cover shadow-md"
          />
        </div>

        {/* Contenido a la derecha */}
        <div className="space-y-8">
          {/* Misión */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black flex items-center gap-2 mb-6">
              <CustomIcon size={70} color1="#065077" color2="#2FA9C9" />
              Misión
            </h2>
            <p className="text-black leading-relaxed mb-4 text-lg text-justify">
              Ofrecer soluciones marítimas y logísticas confiables, seguras y
              eficientes que optimicen la cadena de suministro de nuestros
              clientes, contribuyendo a su crecimiento y competitividad.
            </p>
          </div>

          {/* Visión */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black flex items-center gap-2 mb-6">
              <CustomIcon size={70} color1="#065077" color2="#2FA9C9" />
              Visión
            </h2>
            <p className="text-black leading-relaxed mb-4 text-lg text-justify">
              Consolidar nuestros procesos de operación y posicionamiento en
              terminales portuarias y centros de servicio logístico en beneficio
              de nuestros clientes, colaboradores y accionistas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

