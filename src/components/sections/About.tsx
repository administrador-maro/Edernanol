import logogris from "../../assets/logogris2.png"
import elegirnos from "../../assets/elegirnos.png"
import Button from "../ui/Button"
import { NavLink } from "react-router"

const About = () => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center pt-4">
      <div className="relative z-0 h-[350px] md:h-[450px] lg:h-[550px] flex flex-col  md:p-12 lg:px-16 lg:py-24 bg-cover bg-center">

        <img
          src={logogris}
          alt="Fondo decorativo"
          className="absolute inset-0 w-full h-full object-cover -z-10 hidden md:block"
        />

        <div className="mx-auto max-w-xl text-center ">
          <h2 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#065077] via-[#29C4AB] to-black pb-4  ">
            ¿Por qué elegirnos?
          </h2>

          <p className=" text-black text-xl max-w-2xl font-extralight md:mt-4 dark:text-black py-10 sm:py-0">
            Contamos con experiencia comprobada en el sector industrial y
            marítimo, con personal altamente capacitado y especializado
            que brinda atención personalizada y soluciones a la medida,
            siempre con un enfoque en seguridad, cumplimiento y eficiencia.
          </p>

          <div className="text-center pb-10 sm:py-12">


            <NavLink to="/AboutPage">
              <Button
                label="Obtener informes"
                onClick={() => console.log("Click en botón")}
              />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Imagen derecha */}
      <div className="h-[350px] md:h-[450px] lg:h-[550px]">
        <img
          alt="Sección ilustrativa"
          src={elegirnos}
          className="w-full h-full object-cover mt-12 sm:mt-0"
        />
      </div>
    </section>

  )
}

export default About
