import Button from "../ui/Button"
import service1 from "../../assets/service1.png"
import service2 from "../../assets/service2.png"
import service3 from "../../assets/service3.png"
import Card from "../ui/Card";
import { NavLink } from "react-router";

const Services = () => {
    return (
        <section className="py-12 bg-[#F8FAFC] dark:bg-[#F8FAFC] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-black dark:text-black">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#065077] to-[#29C4AB]">
                            Lo que Ofrecemos a
                        </span>{" "}
                        Nuestros Clientes
                    </h2>
                    <p className="text-black dark:text-black text-xl max-w-2xl mx-auto font-extralight">
                        Nuestro compromiso es brindar seguridad, eficiencia y calidad en cada proyecto, ofreciendo
                        soluciones que optimicen recursos y garanticen resultados confiables para tu empresa.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">

                    {/*Contenido de los servicios */}
                    <Card
                        image={service1}
                        title="Transporte marítimo internacional de carga y altura"
                        items={[
                            "Operaciones seguras y confiables.",
                            "Cumplimiento en tiempos acordados.",
                            "Manejo eficiente de mercancías."
                        ]}
                    />

                    <Card
                        image={service2}
                        title="Mantenimiento especializado de maquinaria y equipo industrial"
                        items={[
                            "Diagnósticos técnicos especializados.",
                            "Planes de mantenimiento preventivo.",
                            "Prolongación de vida útil de equipos."
                        ]}
                    />

                    <Card
                        image={service3}
                        title="Mantenimiento de maquinaria y equipo para levantar materiales"
                        items={[
                            "Servicios para montacargas y grúas.",
                            "Ajustes y calibraciones seguras.",
                            "Reducción de paros en operaciones."
                        ]}
                    />
                </div>

                <div className="mt-16 text-center">
                    <NavLink to="/ServicesPage">
                        <Button
                        label="Explorar servicios"
                        onClick={() => console.log("Click en botón")}
                    />
                    </NavLink>
                </div>
            </div>
        </section>

    )
}

export default Services