import type { IconType } from "react-icons";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa"
import boatImg from "../../assets/barcocard.png"


const ContactCards = () => {
    return (
        <div className="p-4 bg-gray-50 mt-6 sm:mt-10 lg:mt-16 ">

            <div className="flex justify-center space-x-4 mb-6 ">
                <img
                    src={boatImg}
                    alt="Barco navegando"
                    className="h-56 object-cover mx-auto"
                />
            </div>



            {/* Grid ajustada para 2 arriba y 1 abajo */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <Card
                    title="Facebook"
                    subtitle="Contactanos en Facebook, como Grupo Edernanol S.A. de C.V."
                    href="#"
                    Icon={FaFacebook}
                />
                <Card
                    title="Instagram"
                    subtitle="Contactanos por Instagram, como GrupO Edernanol S.A. de C.V."
                    href="#"
                    Icon={FaInstagram}
                />
                <Card
                    title="Email"
                    subtitle="edernanol@gmail.com"
                    href="#"
                    Icon={FiMapPin}
                    className="sm:col-span-2"
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
