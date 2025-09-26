type ValueCardProps = {
  number?: number;
  text: string;
  color: string; // borde y texto del círculo
  line: string; // color de la raya
  icon?: React.ReactNode; // opcional: icono en vez de número
};

const ValueCard: React.FC<ValueCardProps> = ({
  number,
  text,
  color,
  line,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center text-center px-6">
      {/* Círculo */}
      <div
        className={`w-50 h-50 flex items-center justify-center rounded-full border-4 ${color} text-5xl font-bold`}
      >
        {icon ? icon : number}
      </div>

      {/* Texto */}
      <p className="mt-4 text-black text-lg font-extralight leading-relaxed">{text}</p>

      {/* Línea decorativa */}
      <div className={`w-16 h-[4px] mt-4 ${line}`}></div>
    </div>
  );
};

export default ValueCard;
