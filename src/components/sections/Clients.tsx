import "../../styles/Clients.css"

const Clients = () => {
    return (
        <section className="py-12 bg-gradient-to-r from-[#0F3E65] via-[#2F9DB8] to-[#0F3E65] sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Título */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-bold bg-gradient-to-br from-[#E9EAEA] to-white bg-clip-text text-transparent">
                        Nuestros Socios de Confianza
                    </h2>
                    {/* Subtítulo */}
                    <p className="text-[#E9EAEA] text-xl mx-auto font-extralight">
                        Socios estratégicos que aseguran calidad, puntualidad y respaldo en cada operación marítima. <br />Comprometidos con la excelencia para garantizar seguridad y confianza en cada proyecto
                    </p>
                </div>

                {/* Logos */}
                <div className="relative overflow-hidden  py-6 sm:py-8">
                    {/* Primera fila */}
                    <div className=" animate-marquee space-x-8 sm:space-x-12">
                        <img className="object-contain w-auto h-6 sm:h-10" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/2/logo-waverio.svg" alt="Waverio" />
                        <img className="object-contain w-auto h-6 sm:h-10" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/2/logo-squarestone.svg" alt="Squarestone" />
                        <img className="object-contain w-auto h-6 sm:h-10" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/2/logo-martino.svg" alt="Martino" />
                        <img className="object-contain w-auto h-6 sm:h-10" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/2/logo-virogan.svg" alt="Virogan" />
                    </div>

                    
                </div>
            </div>
        </section>
    )

    
}

export default Clients


