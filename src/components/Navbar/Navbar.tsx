import logo from "../../assets/edernanol (2).png"
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi"
import React from "react"
import ResponsiveMenu from "../../components/Navbar/ResponsiveMenu"

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
        <nav>
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
                                        <a href="" className=" text-lg font-medium hover:text-[#1D6E86] py-2">{name}</a>
                                    </li>
                                );
                            })}
                            <button type="button" className="text-lg font-medium bg-[#1D6E86] text-white hover:bg-[#104658] duration-300 rounded-lg py-2 px-4">Contactanos</button>
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
