import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`bg-[#3643BA] text-white py-2 px-4 rounded-md hover:bg-[#5962aa] transition ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
