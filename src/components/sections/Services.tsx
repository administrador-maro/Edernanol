import { FaCheckCircle, FaShip } from "react-icons/fa";



const Services = () => {
    return (
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#F8FAFC] transition-colors duration-300">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-[#3B3838] dark:text-[#3B3838]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#065077] to-[#2F9DB8]">
                            Lo que Ofrecemos a
                        </span>{" "}
                        Nuestros Clientes
                    </h2>
                    <p className="text-[#3B3838] dark:text-[#3B3838] text-xl max-w-2xl mx-auto font-extralight">
                        Nuestro compromiso es brindar seguridad, eficiencia y calidad en cada proyecto, ofreciendo
                        soluciones que optimicen recursos y garanticen resultados confiables para tu empresa.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div
                        className="p-8 rounded-xl border border-gray-200 bg-white shadow-sm transition-all group hover:border-[#2FA9C9]/50 hover:shadow-md">
                        <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6 bg-[#084C61] text-white transition-all group-hover:bg-[#2FA9C9]">
                            <FaShip className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-semibold text-[#3B3838] dark:text-[#3B3838] mb-3">
                            Transporte Marítimo de Altura
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#2FA9C9]" /> Operaciones seguras y confiables.
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#2FA9C9]" /> Cumplimiento en tiempos de entrega.
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#2FA9C9]" /> Manejo eficiente de mercancías.
                            </li>
                        </ul>
                    </div>


                    {/* Feature 2 */}
                    <div
                        className="p-8 rounded-xl border border-gray-200 bg-white shadow-sm transition-all group hover:border-[#2FA9C9]/50 hover:shadow-md">
                        <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6 bg-[#084C61] text-white transition-all group-hover:bg-[#2FA9C9]">
                            <FaShip className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-semibold text-[#3B3838] dark:text-[#3B3838] mb-3">
                            Reparación y Mantenimiento de Maquinaria y Equipo Industrial
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#2FA9C9]" /> Diagnósticos técnicos especializados.
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#2FA9C9]" /> Planes de mantenimiento preventivo y correctivo.
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#2FA9C9]" /> Prolongación de la vida útil de los equipos.
                            </li>
                        </ul>
                    </div>

                    {/* Feature 3 */}
                    <div
                        className="p-8 rounded-xl border border-gray-200 bg-white shadow-sm transition-all group hover:border-[#2FA9C9]/50 hover:shadow-md">
                        <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6 bg-[#084C61] text-white transition-all group-hover:bg-[#2FA9C9]">
                            <FaShip className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-semibold text-[#3B3838] dark:text-[#3B3838] mb-3">
                           Reparación y Mantenimiento de Maquinaria y Equipo para Mover, Acomodar y Levantar Materiales
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#2FA9C9]" /> Operaciones seguras y confiables.
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#2FA9C9]" /> Cumplimiento en tiempos de entrega.
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#2FA9C9]" /> Manejo eficiente de mercancías.
                            </li>
                        </ul>
                    </div>


                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <button className="bg-gradient-to-r  from-[#065077] to-[#2F9DB8] text-white font-light rounded-md px-8 py-3 hover:opacity-90 transition-all">
                        Explore all features
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Services
