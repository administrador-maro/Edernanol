import { FaShieldAlt, FaClock, FaGlobe } from "react-icons/fa";
import ServiceCard from "../ui/ServiceCard";

const BenefitsSection = () => {
  return (
    <section className="bg-white pb-16 px-8 md:pb-24 md:px-24 lg:px-40 xl:px-52">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-black dark:text-black">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#065077] to-[#29C4AB]">
              Nuestros beneficios
            </span>{" "}
            Claves
          </h2>
          <p className="text-black dark:text-black text-xl mx-auto font-extralight">
            Ofrecemos soluciones marítimas que garantizan seguridad, eficiencia y
            una red de cobertura internacional. Nuestros beneficios están diseñados
            para generar confianza y respaldar el crecimiento de cada empresa con
            la que trabajamos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Beneficio 1 */}
          <ServiceCard
            title="Seguridad y Confiabilidad"
            icon={<FaShieldAlt className="text-2xl" />}
            items={[
              "Cumplimiento estricto de normas marítimas internacionales.",
              "Protocolos de seguridad certificados.",
              "Supervisión constante de procesos.",
              "Personal altamente capacitado.",
            ]}
          />

          {/* Beneficio 2 */}
          <ServiceCard
            title="Puntualidad y Eficiencia"
            icon={<FaClock className="text-2xl" />}
            items={[
              "Gestión logística optimizada.",
              "Cumplimiento en tiempos de entrega.",
              "Monitoreo y seguimiento en tiempo real.",
              "Reducción de tiempos de inactividad.",
            ]}
          />

          {/* Beneficio 3 */}
          <ServiceCard
            title="Cobertura Internacional"
            icon={<FaGlobe className="text-2xl" />}
            items={[
              "Conexión con principales puertos nacionales e internacionales.",
              "Amplia red logística para exportación e importación.",
              "Adaptación a las necesidades de cada cliente.",
              "Presencia estratégica en mercados clave.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

