import type { IconType } from "react-icons";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"


const ContactCards = () => {
    return (
        <div className="p-4 bg-gray-50 mt-6 sm:mt-10 lg:mt-16 ">

            <div className="flex justify-center space-x-4 mb-6 ">
                <a
                    href="#"
                    className="w-15 h-15 flex items-center justify-center rounded-full 
               bg-gradient-to-r from-[#065077] to-[#29C4AB] 
               text-white transition-transform transform hover:scale-110 duration-300"
                >
                    <FaWhatsapp className="text-3xl" />
                </a>
                <a
                    href="#"
                    className="w-15 h-15 flex items-center justify-center rounded-full 
               bg-gradient-to-r from-[#065077] to-[#29C4AB] 
               text-white transition-transform transform hover:scale-110 duration-300"
                >
                    <FaFacebook className="text-3xl" />
                </a>
                <a
                    href="#"
                    className="w-15 h-15 flex items-center justify-center rounded-full 
               bg-gradient-to-r from-[#065077] to-[#29C4AB] 
               text-white transition-transform transform hover:scale-110 duration-300"
                >
                    <FaInstagram className="text-3xl" />
                </a>
            </div>



            {/* Grid ajustada para 2 arriba y 1 abajo */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <Card
                    title="Telefono"
                    subtitle="+52 442 285 4563"
                    href="#"
                    Icon={FiPhone}
                />
                <Card
                    title="Correo Electronico"
                    subtitle="edernanol@gmail.com"
                    href="#"
                    Icon={FiMail}
                />
                <Card
                    title="Dirección"
                    subtitle="Av. Paseo del Atlántico Núm Ext 4400 Int. 5-A Col. Real del Valle, Mazatlán Sinaloa"
                    href="#"
                    Icon={FiMapPin}
                    className="sm:col-span-2" // 👈 Esta línea hace que la tarjeta ocupe todo el ancho en la segunda fila
                />
            </div>
        </div>
    );
};

interface CardType {
    title: string;
    subtitle: string;
    Icon: IconType;
    href: string;
    className?: string;
}

const Card = ({ title, subtitle, Icon, href, className }: CardType) => {
    return (
        <a
            href={href}
            className={`w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#065077] to-[#29C4AB] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#198383] group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-[#065077] group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300 ">
                {title}
            </h3>
            <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                {subtitle}
            </p>
        </a>
    );
};

export default ContactCards;
