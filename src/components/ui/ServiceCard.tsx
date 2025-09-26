import { FaCheckCircle } from "react-icons/fa"

interface ServiceCardProps {
    title: string
    icon: React.ReactNode
    items: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, items }) => {
    return (
        <div className="p-8 rounded-xl border border-gray-200 bg-white shadow-sm transition-all transform group hover:bg-gradient-to-r hover:from-[#0E6C8D] hover:to-[#29C4AB] hover:text-white hover:scale-105 hover:shadow-lg">

            {/*Aqui ponemos el icono que se muestra en el card*/}
            <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6 bg-[#198383] text-white transition-all group-hover:bg-white group-hover:text-[#084C61]">
                {icon}
            </div>

            {/*Aqui agregamos el titulo con los estilos que va a tener*/}
            <h3 className="text-xl font-semibold text-black dark:text-black mb-3 transition-all group-hover:text-white">
                {title}
            </h3>

            {/* Aqui agregar la lista*/}
            <ul className="space-y-2 font-light leading-relaxed transition-all">
                {
                    // Recorremos el array "items" con .map()
                    // "item" es cada elemento del array y "index" es la posición en la lista
                    items.map(
                        (item, index) => (
                            // Cada elemento de la lista (<li>) necesita una "key" única.
                            // Aquí usamos "index" como clave.
                            <li key={index} className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#198383] transition-all group-hover:text-white" /> 
                                <span className="text-black dark:text-black group-hover:text-white">
                                    {item}
                                </span>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default ServiceCard
