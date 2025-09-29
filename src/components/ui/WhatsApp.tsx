import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  phone: string;                     // e.g. "+524422854563"
  message?: string;                  // mensaje precargado
  className?: string;                // para ajustar posición si quieres
};

const WhatsApp: React.FC<Props> = ({ phone, message = "Hola, me interesa su servicio.", className }) => {
  // URL oficial de WhatsApp
  const url = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      title="Chatear por WhatsApp"
      className={[
        // posición fija en esquina inferior derecha
        "fixed bottom-6 right-6 z-50",
        // círculo con color, sombra y hover
        "h-18 w-18 rounded-full bg-gradient-to-r from-[#065077] to-[#29C4AB] text-white shadow-lg",
        "flex items-center justify-center",
        "transition-transform hover:scale-110 focus:scale-110",
        "outline-none focus:ring-4 focus:ring-[#065077]/40",
        className || ""
      ].join(" ")}
    >
      {/* anillo suave detrás */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#065077] to-[#29C4AB] opacity-20 animate-ping pointer-events-none" />
      <FaWhatsapp className="relative text-4xl" />
    </a>
  );
};

export default WhatsApp;
