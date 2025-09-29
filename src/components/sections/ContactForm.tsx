const ContactForm = () => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-4xl font-light tracking-tight text-center mb-12">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#065077] to-[#29C4AB]">
                    ¡Envianos un mensaje!
                </span>
            </h2>
            <form className="space-y-6">
                {/* Email */}
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-lg font-medium text-black">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="ejemplo@correo.com"
                        className="w-full border border-slate-300 px-4 py-2 rounded-md outline-none"
                    />
                </div>
                                
                {/* Asunto */}
                <div className="flex flex-col space-y-2">
                    <label htmlFor="subject" className="text-lg font-medium text-black">
                        Asunto
                    </label>
                    <input
                        id="subject"
                        type="text"
                        placeholder="Motivo del mensaje"
                        className="w-full border border-slate-300 px-4 py-2 rounded-md outline-none  "
                    />
                </div>

                {/* Mensaje */}
                <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-lg font-medium text-black">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        placeholder="Escribe tu mensaje aquí..."
                        rows={4}
                        className="w-full border border-slate-300 px-4 py-2 rounded-md  outline-none"
                    ></textarea>
                </div>

                {/* Botón */}
                <button className="w-full rounded-md border-2 border-black bg-white px-6 py-3 text-lg font-medium text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default ContactForm
