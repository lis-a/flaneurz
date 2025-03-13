import React from "react";

interface TagProps {
  label: string;
  color?: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ label, color = "blue", className }) => {
  const colorClasses: { [key: string]: string } = {
    blue: "bg-blue-100 text-blue-800",
    red: "bg-red-100 text-red-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    gray: "bg-gray-100 text-gray-800",
  };

  return (
    <div className={`px-2 py-1 rounded-sm ${colorClasses[color]} ${className}`}>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default Tag;
