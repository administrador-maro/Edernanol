import { NavLink } from "react-router";
import logo from "../../assets/logo2.png";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
   return (
        <footer className="bg-gradient-to-r from-[#022D3D] to-[#065077] text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Footer Left: Logo and Description */}
                    <div>
                        {/* Footer Left: Logo and Description */}
                        <div>
                            <a href="#" className="inline-block">
                                <img src={logo} alt="Logo" className="h-12 w-auto" />
                            </a>
                            <p className="mt-2 text-gray-400 text-base">
                                Nuestro compromiso es brindar seguridad, eficiencia y calidad<br />en cada proyecto
                            </p>
                        </div>
                    </div>

                    {/* Footer Center: Useful Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white">Enlaces Rapidos</h3>
                        <ul className="mt-4 space-y-2 text-base">
                            <li><NavLink to="/"><a href="#" className="text-gray-400 hover:text-gray-300 transition">Inicio</a></NavLink></li>
                            <li><NavLink to="/AboutPage"><a href="#" className="text-gray-400 hover:text-gray-300 transition">Quiénes Somos</a></NavLink></li>
                            <li><NavLink to="/ServicesPage"><a href="#" className="text-gray-400 hover:text-gray-300 transition">Servicios</a></NavLink></li>
                        </ul>
                    </div>

                    {/* Footer New Links Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-white">Soporte & Legal</h3>
                        <ul className="mt-4 space-y-2 text-base">
                            <li><a href="#" className="text-gray-400 hover:text-gray-300 transition">Términos & Condiciones</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-300 transition">Políticas de privacidad</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-300 transition">Políticas de Cookies</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-300 transition">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Footer Right: Social Media & Contact */}
                    <div>
                        <h3 className="text-xl font-semibold text-white">Dirección & Contacto</h3>

                        <div className="mt-4 space-y-3 text-gray-400 text-base">
                            {/* Email */}
                            <p className="flex items-center">
                                <FaEnvelope className="text-gray-400 flex-shrink-0 text-base mt-1 mr-2" />
                                <p>edernanol@gmail.com</p>
                            </p>

                            {/* Facebook */}
                            <p className="flex items-center">
                                <FaFacebook className="text-gray-400 flex-shrink-0 text-base mt-1 mr-2" />
                                <p>Grupo Edernanol S.A. de C.V.</p>
                            </p>

                            {/* Instagram */}
                            <p className="flex items-center">
                                <FaInstagram className="text-gray-400 flex-shrink-0 text-base mt-1 mr-2" />
                                <p>Grupo Edernanol S.A. de C.V.</p>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom: Copyright */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-base">
                    <p> © 2025 Edernanol S.A de C.V. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
