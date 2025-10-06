import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import diagonalImg from "../../assets/servicio_uno.png";
import Button from "../ui/Button";
import { NavLink } from "react-router";

const ServiceSection = () => {
    return (
        <section className="relative bg-gray-50 py-16 px-8 md:py-24 md:px-24 lg:px-40 xl:px-52">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch md:items-stretch">

                {/* Imagen izquierda */}
                <div className="relative w-full h-[400px] md:h-auto">
                    <img
                        src={diagonalImg}
                        alt="Ilustración servicio marítimo"
                        className="w-full h-full object-cover md:h-full md:absolute md:inset-0"
                    />
                </div>

                {/* Texto derecho */}
                <div className="flex flex-col justify-center space-y-6 bg-white/0">
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black">
                        <span className="bg-clip-text font-extralight text-transparent bg-gradient-to-r from-[#065077] to-[#29C4AB]">
                            Transporte Marítimo de Altura
                        </span>
                    </h2>

                    <p className="text-black text-lg md:text-xl font-extralight text-justify">
                        En Edernanol ofrecemos un servicio especializado en transporte
                        marítimo de altura, diseñado para atender las necesidades logísticas
                        de empresas que buscan seguridad, eficiencia y cumplimiento en sus
                        operaciones internacionales. Contamos con experiencia y el respaldo
                        necesario para garantizar que cada envío llegue a su destino en
                        óptimas condiciones y en el tiempo establecido.
                    </p>

                    {/* Lista de pasos */}
                    <ul className="space-y-3 text-black text-base md:text-xl font-extralight">
                        <li className="flex items-center gap-3">
                            <IoMdCheckmarkCircleOutline className="text-[#065077] text-2xl" />
                            Recepción y verificación de mercancías.
                        </li>
                        <li className="flex items-center gap-3">
                            <IoMdCheckmarkCircleOutline className="text-[#065077] text-2xl" />
                            Embarque y coordinación logística.
                        </li>
                        <li className="flex items-center gap-3">
                            <IoMdCheckmarkCircleOutline className="text-[#065077] text-2xl" />
                            Transporte y seguimiento en tiempo real.
                        </li>
                        <li className="flex items-center gap-3">
                            <IoMdCheckmarkCircleOutline className="text-[#065077] text-2xl" />
                            Descarga en puerto de destino.
                        </li>
                        <li className="flex items-center gap-3">
                            <IoMdCheckmarkCircleOutline className="text-[#065077] text-2xl" />
                            Reportes y gestión documental.
                        </li>
                    </ul>

                    <NavLink to="/ContactPage">
                        <Button
                            label="Contáctanos"
                            onClick={() => console.log("Click en botón")}
                        />
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
