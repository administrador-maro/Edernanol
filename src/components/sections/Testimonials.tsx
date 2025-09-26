import { TestimonialsData } from "../../components/mockData/data"
import Slider from "react-slick"
import { FaStar } from "react-icons/fa";


const Testimonials = () => {
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
                    <p className="text-black text-xl max-w-2xl mx-auto font-extralight">
                        Queremos ser su socio estratégico en la operación mantenimiento de sus proyectos, ayudándole a optimizar recursos
                        y garantizar resultados confiables.
                    </p>
                </div>

                {/* Testimonials Cards */}
                <div  >
                    <Slider {...settings}>
                        {TestimonialsData.map((data) => (
                            <div key={data.id} className="px-2">
                                <div className="flex flex-col gap-4 p-8 shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 mx-4 rounded-xl bg-gradient-to-br from-[#E9EAEA] to-white">
                                    {/* upper section */}
                                    <div className="flex justify-start items-center gap-5">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="rounded-full w-16 h-16"
                                        />
                                        <div>
                                            <p className="text-xl font-bold text-black">{data.name}</p>
                                        </div>
                                    </div>
                                    {/* bottom section */}
                                    <div className=" py-6 space-y-4">
                                        <p className="text-base text-black">{data.text}</p>
                                        {/* estrellas */}
                                        <div className="flex text-[#198383] text-lg space-x-2">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

