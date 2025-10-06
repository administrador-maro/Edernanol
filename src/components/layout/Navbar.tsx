import logo from "../../assets/logo.png"
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi"
import React from "react"
import ResponsiveMenu from "./ResponsiveMenu"
import Button from "../ui/Button"
import { NavLink } from "react-router"

export const MenuLinks = [
    {
        id: 1,
        name: "Inicio",
        link: "/"
    },
    {
        id: 1,
        name: "Quiénes somos",
        link: "/AboutPage"
    },
    {
        id: 1,
        name: "Servicios",
        link: "/ServicesPage"
    }
]

const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-12 py-3 md:py-3">
                <div className="flex justify-between items-center">
                    {/* Seccion de logo */}
                    <div>
                        <a href="" className="flex items-center gap-4">
                            <img src={logo} alt="logo" className="w-48" />
                        </a>
                    </div>
                    {/* Seccion de la barra de navegación */}
                    <div className=" hidden md:block">
                        <ul className=" flex items-center gap-8">
                            {MenuLinks.map(({ id, name, link }) => {
                                return (
                                    <li key={id} className=" cursor-pointer py-4">
                                        <NavLink
                                            to={link}
                                            className={({ isActive }) =>
                                                `text-lg font-medium py-2 transition-colors ${isActive ? "text-[#126C8D]" : "hover:text-[#126C8D]"
                                                }`
                                            }
                                        >
                                            {name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                            <NavLink to="/ContactPage">
                                <Button
                                    label="Contáctanos"
                                    onClick={() => console.log("Click en botón")}
                                />
                            </NavLink>
                        </ul>
                    </div>

                    {/* Sección Barra para moviles */}
                    <div className="flex items-center gap-4 md:hidden">
                        {showMenu ? (
                            <HiMenuAlt1
                                onClick={toggleMenu}
                                className=" cursor-pointer text-2xl" />

                        ) : (
                            <HiMenuAlt3
                                onClick={toggleMenu}
                                className="cursor-pointer text-2xl" />
                        )}
                    </div>
                </div>
            </div>

            {/* Menu links Moviles */}
            <ResponsiveMenu showMenu={showMenu} />
        </nav>
    )
}

export default Navbar
