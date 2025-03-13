import React from "react";

interface RatingProps {
  value: number;
  outOf?: number;
}

const Rating: React.FC<RatingProps> = ({ value, outOf = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(outOf)].map((_, i) => (
        <span key={i} className={i < value ? "text-[#F8C12F]" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
