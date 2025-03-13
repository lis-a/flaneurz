import React from "react";

interface TagProps {
  label: string;
  color?: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ label, color = "blue", className }) => {
  const colorClasses: { [key: string]: string } = {
    blue: "bg-[#BECBE9]",
    red: "bg-[#FFF3F4]",
    green: "bg-green-100 ",
    yellow: "bg-[#FFF5D9]",
    gray: "bg-gray-100",
  };

  return (
    <div className={`px-2 py-1 rounded-xl ${colorClasses[color]} ${className}`}>
      <span className="text-sm font-bold">{label}</span>
    </div>
  );
};

export default Tag;
