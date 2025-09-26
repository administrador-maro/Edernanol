import ValueCard from "../ui/ValueCard";
import { FaShieldAlt, FaClock, FaCheckCircle, FaLightbulb } from "react-icons/fa";

const ValueCardSection = () => {
  return (
    <section className="pb-24 bg-white">
      {/* Encabezado */}
      <div className="text-center max-w-6xl mx-auto px-4 ">
        <h2 className="text-6xl font-extrabold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#0C6D8D] to-[#29C4AC] pb-4 ">
          Nuestros valores
        </h2>
        <p className="text-black text-2xl font-extralight">
          En <span className="text-[#0C6D8D] font-bold">Edernanol </span>
          estamos orientados hacia la excelencia del servicio, brindando
          soluciones marítimas seguras y confiables. ¿Cómo lo logramos?
        </p>
      </div>

      {/* Grid de valores */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <ValueCard
          text="Compromiso con la seguridad marítima"
          color="border-[#0C6D8D] text-[#0C6D8D]"
          line="bg-[#0C6D8D]"
          icon={<FaShieldAlt size={70} />}
        />
        <ValueCard
          number={2}
          text="Eficiencia y puntualidad en cada servicio"
          color="border-[#198383] text-[#198383]"
          line="bg-[#198383]"
          icon={<FaClock size={70} />}
        />
        <ValueCard
          number={3}
          text="Calidad en operaciones y proyectos"
          color="border-[#2F9DB8] text-[#2F9DB8]"
          line="bg-[#2F9DB8]"
          icon={<FaCheckCircle size={70} />}
        />
        <ValueCard
          number={4}
          text="Innovación, reducir costos y mejorar procesos"
          color="border-[#29C4AC] text-[#29C4AC]"
          line="bg-[#29C4AC]"
          icon={<FaLightbulb size={70} />}
        />
      </div>
    </section>
  );
};

export default ValueCardSection;
