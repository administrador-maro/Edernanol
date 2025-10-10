import { createBrowserRouter } from "react-router"
import RootLayout from "../layouts/RootLayout"


//Rutas de las paginas
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ServicesPage from "../pages/ServicesPage"
import ContactPage from "../pages/ContactPage"
import NotFoundPage from "../pages/NotFoundPage"


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {index: true, element: <HomePage />},
            {path: "AboutPage", element: <AboutPage />},
            {path: "ServicesPage", element: <ServicesPage />},
            {path: "ContactPage", element: <ContactPage />},
            {path: "*", element: <NotFoundPage />},
        ]
    }
])

export default Routes
