type AboutSectionProps = {
  title: string;
  highlight: string;
  description: string;
};

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  highlight,
  description,
}) => {
  return (
    <div className="max-w-6xl mx-auto my-20 px-4">
      {/* Title arriba */}
      <h3 className="text-3xl font-extralight text-gray-800 mb-2">{title}</h3>

      {/* Highlight + línea */}
      <div className="flex items-center space-x-3">
        <span className="text-4xl font-bold text-[#0C6D8D]">{highlight}</span>
        <div className="flex-1 h-[10px] bg-[#0C6D8D]"></div>
      </div>

      {/* Descripción */}
      <p className="mt-4 text-black text-lg font-extralight leading-relaxed text-justify">
        {description}
      </p>
    </div>
  );
};

export default AboutSection;
