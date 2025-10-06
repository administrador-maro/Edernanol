import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import diagonalImg from "../../assets/servicio_dos.png";
import Button from "../ui/Button";
import { NavLink } from "react-router";

const ServiceSection2 = () => {
    return (
        <section className="relative bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen md:min-h-[600px] lg:min-h-[700px]">

                {/* Texto izquierdo */}
                <div className="flex flex-col justify-center px-6 pb-8 md:py-8 lg:px-12 order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-black">
                        <span className="bg-clip-text font-extralight text-transparent bg-gradient-to-r from-[#065077] to-[#29C4AB]">
                            Reparación y mantenimiento de maquinaria industrial
                        </span>
                    </h2>

                    <p className="text-black text-lg md:text-xl font-extralight mb-6 text-justify">
                        En Edernanol ofrecemos un servicio integral de reparación y mantenimiento diseñado para garantizar 
                        que tus equipos industriales se mantengan en condiciones óptimas de funcionamiento. Nuestro objetivo es maximizar la vida útil 
                        de tu maquinaria, prevenir fallas inesperadas y asegurar la continuidad de tus operaciones con la más alta eficiencia.
                    </p>

                    {/* Lista del workflow */}
                    <ul className="space-y-3 mb-6 text-black text-base md:text-xl font-extralight">
                        <li className="flex items-center gap-3">
                            <IoMdCheckmarkCircleOutline className="text-[#065077] text-2xl" />
                            Inspección inicial y diagnóstico detallado de cada equipo
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
                <div className="w-full h-64 md:h-full order-1 md:order-2">
                    <img
                        src={diagonalImg}
                        alt="Ilustración servicio marítimo"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default ServiceSection2
