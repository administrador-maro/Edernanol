import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import diagonalImg from "../../assets/servicio_tres.png";
import Button from "../ui/Button";
import { NavLink } from "react-router";

const ServiceSection3 = () => {
  return (
    <section className="relative bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen md:min-h-[600px] lg:min-h-[700px]">
                {/* Imagen izquierda (arriba en mobile, izquierda en desktop) */}
                <div className="w-full h-64 md:h-full">
                    <img
                        src={diagonalImg}
                        alt="Ilustración servicio marítimo"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Texto derecho */}
                <div className="flex flex-col justify-center px-6 pb-8 md:py-8 lg:px-12">
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-black">
                        <span className="bg-clip-text font-extralight text-transparent bg-gradient-to-r from-[#065077] to-[#29C4AB]">
                            Reparación y mantenimiento de equipo para mover y acomodar manteriales
                        </span>
                    </h2>

                    <p className="text-black text-lg md:text-xl font-extralight mb-6 text-justify">
                        En Edernanol ofrecemos un servicio especializado en transporte
                        marítimo de altura, diseñado para atender las necesidades logísticas
                        de empresas que buscan seguridad, eficiencia y cumplimiento en sus
                        operaciones internacionales. Contamos con experiencia y el respaldo
                        necesario para garantizar que cada envío llegue a su destino en
                        óptimas condiciones y en el tiempo establecido.
                    </p>

                    {/* Lista del workflow */}
                    <ul className="space-y-3 mb-6 text-black text-base md:text-xl font-extralight">
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
  )
}

export default ServiceSection3
