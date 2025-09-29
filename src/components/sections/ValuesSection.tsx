import React from "react";
import CustomIcon from "../ui/CustomIcon";
import { FaArrowRight } from "react-icons/fa";

type Value = {
    title: string;
    description: string;
};

const values: Value[] = [
    { title: "Integridad", description: "Somos congruentes con nuestros principios y valores." },
    { title: "Compromiso", description: "Estamos convencidos de lo que tenemos que hacer." },
    { title: "Liderazgo", description: "Ejecutando, desarrollando y generando progreso." },
    { title: "Servicio", description: "Estamos en búsqueda de soluciones a las necesidades." },
    { title: "Excelencia", description: "Hacemos todo lo necesario para hacerlo bien y hacer el bien." },
    { title: "Responsabilidad Social", description: "Todo lo que hacemos está orientado a generar un impacto positivo." },
];

const ValuesSection: React.FC = () => {
    return (
        <section className="w-full py-12 px-6 mb-10">
            <div className="max-w-7xl mx-auto">
                {/* Título con icono */}
                <h2 className="text-2xl md:text-3xl font-bold text-black flex items-center gap-2 mb-6">
                    <CustomIcon size={70} color1="#065077" color2="#2FA9C9" />
                    Valores Personales
                </h2>

                {/* Grid de valores */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Icono + título */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#065077] text-white">
                                    <FaArrowRight size={16} />
                                </span>
                                <h3 className="text-2xl md:text-2xl text-[#2FA9C9]">
                                    {value.title}
                                </h3>
                            </div>

                            {/* Descripción */}
                            <p className="text-lg md:text-lg text-black leading-relaxed mb-4 text-justify">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ValuesSection;
