import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import diagonalImg from "../../assets/servicio_dos.jpg";
import Button from "../ui/Button";
import { NavLink } from "react-router";

const ServiceSection2 = () => {
  return (
    <section className="relative bg-gray-50 pb-16 px-8 md:pb-24 md:px-24 lg:px-40 xl:px-52">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch md:items-stretch">
        
        {/* Texto izquierdo */}
        <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black">
            <span className="bg-clip-text font-extralight text-transparent bg-gradient-to-r from-[#065077] to-[#29C4AB]">
              Reparación y mantenimiento de maquinaria industrial
            </span>
          </h2>

          <p className="text-black text-lg md:text-xl font-extralight text-justify">
            En Edernanol ofrecemos un servicio integral de reparación y mantenimiento diseñado 
            para garantizar que tus equipos industriales se mantengan en condiciones óptimas 
            de funcionamiento. Nuestro objetivo es maximizar la vida útil de tu maquinaria, 
            prevenir fallas inesperadas y asegurar la continuidad de tus operaciones con la 
            más alta eficiencia.
          </p>

          {/* Lista de pasos */}
          <ul className="space-y-3 text-black text-base md:text-xl font-extralight">
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#065077] text-2xl" />
              Inspección inicial y diagnóstico detallado de cada equipo.
            </li>
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#065077] text-2xl" />
              Mantenimiento preventivo para anticipar posibles fallas.
            </li>
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#065077] text-2xl" />
              Reparaciones correctivas especializadas, minimizando tiempos de inactividad.
            </li>
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#065077] text-2xl" />
              Pruebas de funcionamiento y calibración, garantizando el rendimiento óptimo.
            </li>
            <li className="flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#065077] text-2xl" />
              Entrega de reportes y recomendaciones para mejorar la eficiencia operativa.
            </li>
          </ul>

          <NavLink to="/ContactPage">
            <Button
              label="Contáctanos"
              onClick={() => console.log("Click en botón")}
            />
          </NavLink>
        </div>

        {/* Imagen derecha */}
        <div className="relative w-full h-[400px] md:h-auto order-1 md:order-2">
          <img
            src={diagonalImg}
            alt="Servicio de mantenimiento industrial"
            className="w-full h-full object-cover md:absolute md:inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection2;
