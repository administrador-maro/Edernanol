import { Outlet } from "react-router"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

const RootLayout = () => {
    return (
        <div className=" overflow-x-hidden">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout
