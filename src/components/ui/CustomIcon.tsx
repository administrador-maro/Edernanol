import React from "react";

type CustomIconProps = {
  size?: number;
  color1?: string;
  color2?: string;
};

const CustomIcon: React.FC<CustomIconProps> = ({
  size = 40,
  color1 = "#052D4C", // azul oscuro
  color2 = "#00BFD8", // azul claro
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 32) / 40}
      viewBox="0 0 50 32"
      className="inline-block"
    >
      {/* Barra izquierda */}
      <g transform="translate(10,0)">
        <rect
          x="0"
          y="6"
          width="12"
          height="20"
          fill={color1}
          transform="skewX(-20)"
        />
      </g>

      {/* Barra derecha */}
      <g transform="translate(28,0)">
        <rect
          x="0"
          y="6"
          width="12"
          height="20"
          fill={color2}
          transform="skewX(-20)"
        />
      </g>
    </svg>
  );
};

export default CustomIcon;
