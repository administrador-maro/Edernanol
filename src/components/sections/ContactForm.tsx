import { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = {
      email: (form.email as HTMLInputElement).value,
      phone: (form.phone as HTMLInputElement).value, 
      subject: (form.subject as HTMLInputElement).value,
      message: (form.message as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Enviado!",
          text: "Tu mensaje se envió correctamente 🎉",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#065077",
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje.",
          confirmButtonText: "Reintentar",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo conectar con el servidor.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-4xl font-light tracking-tight text-center mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#065077] to-[#29C4AB]">
          ¡Envíanos un mensaje!
        </span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-lg font-medium text-black">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ejemplo@correo.com"
            className="w-full border border-slate-300 px-4 py-2 rounded-md outline-none"
          />
        </div>

        {/* Teléfono */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className="text-lg font-medium text-black">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={10}            
            inputMode="numeric"          
            placeholder="5512345678"
            className="w-full border border-slate-300 px-4 py-2 rounded-md outline-none"
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              target.value = target.value.replace(/[^0-9]/g, "");
            }}
          />
          <small className="text-gray-500 text-sm">
            Ingresa solo 10 números sin espacios ni símbolos.
          </small>
        </div>


        {/* Asunto */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="subject" className="text-lg font-medium text-black">
            Asunto
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Motivo del mensaje"
            className="w-full border border-slate-300 px-4 py-2 rounded-md outline-none"
          />
        </div>

        {/* Mensaje */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-lg font-medium text-black">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Escribe tu mensaje aquí..."
            rows={4}
            className="w-full border border-slate-300 px-4 py-2 rounded-md outline-none"
          ></textarea>
        </div>

        {/* Botón */}
        <button
          disabled={loading}
          className="w-full rounded-md border-2 border-black bg-white px-6 py-3 text-lg font-medium text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
