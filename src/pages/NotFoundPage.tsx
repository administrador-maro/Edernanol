import notfund from "../../src/assets/notfund.png"
import Button from "../components/ui/Button"
import { NavLink } from "react-router"

const NotFoundPage = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* Imagen del pulpo explorador */}
          <img
            src={notfund} // 🔹 Cambia esta ruta según donde tengas tu imagen
            alt="Pulpo explorador"
            className="mx-auto mb-8 w-71 sm:w-86 drop-shadow-[0_0_25px_rgba(6,80,119,0.25)] animate-float"
          />

          <p className="text-5xl font-extrabold text-[#126C8D]">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl">
            Página no encontrada
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-black sm:text-xl/8">
            ¡Navegamos fuera del mapa! pero no te preocupes, la corriente nos llevará de vuelta.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink to="/">
              <Button
                label="Regresar al inicio"
                onClick={() => console.log("Click en botón")}
              />
            </NavLink>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFoundPage
