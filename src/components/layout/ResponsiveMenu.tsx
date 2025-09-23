import { MenuLinks } from "./Navbar";
import logo from "../../assets/logo.png"


// Declaramos el tipo de prop en este caso De tipo Boolean
type ResponsiveMenuProps = {
    showMenu: boolean;
};

const ResponsiveMenu = ({ showMenu }: ResponsiveMenuProps) => {
    return (
        <div
            className={`${showMenu ? "left-0" : " left-[-100%]"} 
                fixed 
                bottom-0 
                top-0 w-[85%] 
                transition-all 
                duration-300
                shadow-md
                pt-16 px-8
                bg-white
                z-50
                flex flex-col justify-between pb-4`
            }>

            <div className="card">
                {/* logo section */}
                <div className="flex items-center justify-start gap-3">
                    <img src={logo} alt="logo" className="w-40 object-contain" />
                </div>
                {/* seccion del menu cards  */}
                <nav className="mt-12">
                    <ul className=" space-y-4 text-xl">
                        {
                            MenuLinks.map(({ id, name, link }) => {
                                return (
                                    <li key={id}>
                                        <a href={link}
                                            className="mb-5 inline-block">{name}</a>
                                    </li>
                                )
                            }

                            )
                        }
                    </ul>
                </nav>
            </div>

            <div className="w-full text-gray-1000 text-center py-4 text-sm">
                © 2025 Edernanol S.A de C.V. Todos los derechos reservados.
            </div>
        </div>
    )
}

export default ResponsiveMenu
