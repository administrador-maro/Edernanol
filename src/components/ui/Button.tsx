import { useState } from "react"

interface ButtonProps {
    label: string
    onClick?: () => void
    type?: "button" | "submit" | "reset"
    fromColor?: string
    toColor?: string
    className?: string
    size?: "sm" | "md" | "lg"
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = "button",
    fromColor = "#065077",
    toColor = "#29C4AB",
    className = "",
    size = "md",
}) => {

    const [isHovered, setIsHovered] = useState(false)

    const sizeClasses = {
        sm: "px-4 py-2 text-lg",
        md: "px-6 py-3 text-lg",
        lg: "px-8 py-4 text-lg"
    }

    return (

        <button
            type={type}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundImage: `linear-gradient(to right, 
          ${isHovered ? toColor : fromColor}, 
          ${isHovered ? fromColor : toColor})`
            }}
            className={`rounded-md text-white font-medium 
                  transition-all duration-500 ease-in-out shadow-md ${sizeClasses[size]} ${className}`}
        >
            {label}
        </button>

    )
}

export default Button
