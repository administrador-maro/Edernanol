import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expedita sequi cupiditate harum repellendus.",
    author: "Johnathan Rodriguez",
    role: "UX Research, Atlassian",
  },
  {
    id: 2,
    text: "El servicio fue excelente, cumplieron con todo lo prometido y más. Muy recomendados.",
    author: "María González",
    role: "Gerente de Proyectos",
  },
  {
    id: 3,
    text: "Gran profesionalismo y rapidez en la atención. Sin duda volveremos a trabajar con ellos.",
    author: "Carlos Méndez",
    role: "Export Manager",
  },
];

const Testimonials3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const duration = 5000; // 5 segundos por slide

  // Avanzar automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, duration);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center py-16 px-6">
      {/* Texto + barra */}
      <div>
        <h2 className="text-4xl font-bold mb-4">What our customers think</h2>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus commodi
          sint, similique cupiditate possimus.
        </p>

        {/* Barra de progreso */}
        <div className="h-1 bg-gray-200 w-full rounded overflow-hidden">
          <motion.div
            key={currentIndex} // reinicia animación cada cambio
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            className="h-full bg-black"
          />
        </div>
      </div>

      {/* Card testimonial */}
      <div className="relative h-60 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-black text-white p-8 rounded-lg shadow-xl w-full"
          >
            <p className="italic mb-6">
              "{testimonials[currentIndex].text}"
            </p>
            <h4 className="font-bold">
              {testimonials[currentIndex].author}
            </h4>
            <p className="text-sm text-gray-300">
              {testimonials[currentIndex].role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonials3;
