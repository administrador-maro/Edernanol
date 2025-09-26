import AboutSection from "../ui/AboutSection";

const AboutHeroSection = () => {
  return (
    <section className="bg-white">
      <AboutSection
        title="Conoce"
        highlight="Edernanol"
        description="Edernanol es una empresa especializada en servicios marítimos, enfocada en brindar soluciones confiables y seguras para el transporte, la logística y el mantenimiento industrial. Con experiencia comprobada en el sector, acompañamos a nuestros clientes en cada proyecto con profesionalismo y compromiso."
      />

      <AboutSection
        title="Misión"
        highlight="Edernanol"
        description="Nuestra misión es ser líderes en soluciones marítimas integrales, ofreciendo innovación, seguridad y eficiencia en cada servicio. En Edernanol buscamos impulsar el crecimiento de nuestros clientes a través de la tecnología, la experiencia y la excelencia operativa."
      />

      <AboutSection
        title="Visión"
        highlight="Edernanol"
        description="Nuestra visión es ser líderes en soluciones marítimas integrales, ofreciendo innovación, seguridad y eficiencia en cada servicio. En Edernanol buscamos impulsar el crecimiento de nuestros clientes a través de la tecnología, la experiencia y la excelencia operativa."
      />


      <AboutSection
        title="Expertos en"
        highlight="Servicios Marítimos"
        description="En Edernanol ponemos a disposición de las empresas experiencia en transporte marítimo de carga y altura, mantenimiento de maquinaria y equipo industrial, así como soluciones para operaciones portuarias. Nuestro compromiso es garantizar resultados seguros, eficientes y de calidad en cada operación."
      />
    </section>
  );
};

export default AboutHeroSection;
