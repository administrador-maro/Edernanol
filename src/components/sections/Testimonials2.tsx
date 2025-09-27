import { TestimonialsData } from "../../components/mockData/data"
import Slider from "react-slick"
import { FaStar, FaQuoteLeft } from "react-icons/fa";


const Testimonials2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024, // pantallas medianas (lg y abajo)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 640, // pantallas móviles (sm y abajo)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="py-14 mb-14 bg-gray-50">
            <div className="slider-container">
                {/* header section */}
                <div className="w-full text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-black dark:text-black">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#065077] to-[#29C4AB]">
                            Lo que Opinan
                        </span>{" "}
                        Nuestros Clientes
                    </h1>
                    {/* Subtítulo */}
                    <p className="text-black text-xl max-w-4xl mx-auto font-extralight">
                        Queremos ser su socio estratégico en la operación mantenimiento de sus proyectos, ayudándole a optimizar recursos
                        y garantizar resultados confiables.
                    </p>
                </div>

                {/* Testimonials Cards */}
                {/* Testimonials Cards */}
                <Slider {...settings}>
                    {TestimonialsData.map((data) => (
                        <div key={data.id} className="px-4">
                            <figure className="flex flex-col justify-between h-full p-8 bg-gradient-to-br from-[#E9EAEA] to-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
                                {/* Icono de comillas */}
                                <FaQuoteLeft className="w-8 h-8 mb-4 text-[#198383]" />

                                {/* Texto del testimonio */}
                                <blockquote className="mb-4">
                                    <p className="text-base text-black">"{data.text}"</p>
                                </blockquote>

                                {/* Autor */}
                                <figcaption className="flex items-center gap-3 mt-4">
                                    <div className="flex flex-col text-left">
                                        <cite className="font-medium text-black">{data.name}</cite>
                                    </div>
                                </figcaption>

                                {/* estrellas */}
                                <div className="flex mt-3 text-[#198383] text-lg space-x-1">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </figure>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials2
