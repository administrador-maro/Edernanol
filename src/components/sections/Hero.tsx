import sampleVideo from "../../assets/video.mp4"
import Button from "../ui/Button"
import { NavLink } from "react-router"

const Hero = () => {
  return (

    <div className="relative h-[840px] flex items-center bg-black text-white px-4 sm:px-8 md:px-12">
      {/* Background image */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src={sampleVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full text-center md:text-left md:ml-0 lg:ml-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-[#0E6C8D] via-[#29C4AB] to-[#F7F7F8]  text-transparent bg-clip-text">
            Edernanol S.A de C.V
          </span>{" "}
          <span className="text-[#F7F7F8]">Soluciones confiables para la industria y el transporte marítimo</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#F7F7F8]">
          Somos una empresa mexicana dedicada a ofrecer
          servicios especializados que respaldan la operación, mantenimiento y logística
          de su negocio.
        </p>

        <NavLink to="/ServicesPage">
          <Button
            label="Explorar servicios"
            className="mt-6"
            onClick={() => console.log("Click en botón")}
          />
        </NavLink>

      </div>
    </div>
  )
}

export default Hero
