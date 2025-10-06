import { NavLink } from "react-router";
import diagonalImg from "../../assets/servicios_hero.png";

const ServicesHero = () => {
    return (
        <section className="relative bg-gradient-to-l from-[#065077] to-[#2F9DB8] overflow-hidden py-16 md:h-[700px]">
            {/* Fondo diagonal con imagen - solo en desktop */}
            <div
                className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${diagonalImg})`,
                    clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
                }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Columna izquierda vacía (solo para layout en desktop) */}
                <div className="hidden md:block"></div>

                {/* Contenido derecho */}
                <div className="flex flex-col justify-center text-white">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-left">
                        Soluciones que impulsan tu empresa
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto md:mx-0 font-extralight text-center md:text-left">
                        Con la experiencia y tecnología de Edernanol,
                        tu empresa navega con confianza hacia el éxito.
                        Ofrecemos servicios especializados en transporte
                        marítimo y mantenimiento industrial, garantizando
                        seguridad, puntualidad y eficiencia en cada operación.
                    </p>

                    <NavLink to="/ContactPage">
                        <a
                            href="#"
                            className="text-base sm:text-lg lg:text-xl inline-block w-auto md:w-fit mx-auto md:mx-0 border-2 border-white text-white font-semibold px-6 py-3 lg:px-8 rounded-lg transition duration-300 hover:bg-white hover:text-[#065077]"
                        >
                            Más información
                        </a>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
