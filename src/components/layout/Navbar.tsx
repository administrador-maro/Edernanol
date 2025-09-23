import logo from "../../assets/logo.png"
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi"
import React from "react"
import ResponsiveMenu from "./ResponsiveMenu"

export const MenuLinks = [
    {
        id: 1,
        name: "Inicio",
        link: "/"
    },
    {
        id: 1,
        name: "Quiene somos",
        link: "/"
    },
    {
        id: 1,
        name: "Servicios",
        link: "/"
    }
]

const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="mx-auto max-w-screen-2xl">
            <div className=" mx-auto px-4 sm:px-12 py-3 md:py-3">
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
                            {MenuLinks.map(({ id, name }) => {
                                return (
                                    <li key={id} className=" cursor-pointer py-4">
                                        <a href="" className=" text-lg font-medium hover:text-[#126C8D] py-2">{name}</a>
                                    </li>
                                );
                            })}
                            <button type="button" className="text-lg font-medium rounded-md text-white bg-gradient-to-r from-[#126C8D] to-[#0ba4dc] hover:from-[#0ba4dc] hover:to-[#126C8D] transition-all py-2 px-4">Contactanos</button>
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
