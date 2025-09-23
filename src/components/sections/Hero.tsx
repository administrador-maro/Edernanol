import sampleVideo from "../../assets/video.mp4"

const Hero = () => {
  return (

    <div className="relative min-h-screen flex items-center bg-black text-white px-4 sm:px-8 md:px-12">
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
          <span className="bg-gradient-to-r from-[#126C8D] via-[#046487] to-[#D0E1E8]  text-transparent bg-clip-text">
            Edernanol S.A de C.V
          </span>{" "}
          <span className="text-white">Soluciones confiables para la industria y el transporte marítimo</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-300">
          Somos una empresa mexicana dedicada a ofrecer
          servicios especializados que respaldan la operación, mantenimiento y logística
          de su negocio.
        </p>
        <button className="mt-6 px-5 py-3 text-sm sm:text-base rounded-md text-white font-semibold bg-gradient-to-r from-[#126C8D] to-[#0ba4dc] hover:from-[#0ba4dc] hover:to-[#126C8D] transition-all">
          Solicitar Información
        </button>
      </div>
    </div>
  )
}

export default Hero
