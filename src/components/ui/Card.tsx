import { FaSquareCheck } from "react-icons/fa6";

interface CardProps {
    title: string
    image: string
    items: string[]
}

const Card: React.FC<CardProps> = ({ title, items, image }) => {
    return (
        <div className="max-w-sm bg-white border  border-gray-200 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2x1">
            <img
                src={image}
                alt={title}
            />
            <div className="p-5">
                {/*Aqui agregamos el titulo con los estilos que va a tener*/}
                <h3 className="text-xl font-semibold text-black dark:text-black mb-3 transition-all group-hover:text-white">
                    {title}
                </h3>

                <ul className="space-y-2 font-light leading-relaxed transition-all">
                    {
                        // Recorremos el array "items" con .map()
                        // "item" es cada elemento del array y "index" es la posición en la lista
                        items.map(
                            (item, index) => (
                                // Cada elemento de la lista (<li>) necesita una "key" única.
                                // Aquí usamos "index" como clave.
                                <li key={index} className="flex items-center gap-4">
                                    <FaSquareCheck className="text-[#198383] transition-all group-hover:text-white" />
                                    <span className="text-black dark:text-black group-hover:text-white">
                                        {item}
                                    </span>
                                </li>
                            )
                        )
                    }
                </ul>

            </div>
        </div>
    )
}

export default Card
