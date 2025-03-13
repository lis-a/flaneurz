import React from "react";

interface RatingProps {
  value: number;
  outOf?: number;
}

const Rating: React.FC<RatingProps> = ({ value, outOf = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(outOf)].map((_, i) => (
        <span key={i} className={i < value ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      ))}
      {/* <span className="text-sm text-gray-600">{value}/{outOf}</span> */}
    </div>
  );
};

export default Rating;
