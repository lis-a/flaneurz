import React from "react";
import Button from "./ui/button";

interface ItineraryCardProps {
  title: string;
  duration?: string;
  distance?: string;
  details: string;
  isList: boolean;
  onClick?: () => void;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({
  title,
  duration,
  distance,
  details,
  isList,
  onClick,
}) => {
  return (
    <div className=" p-4 border rounded-md bg-white shadow-sm flex gap-2 justify-between items-center">
      <div>
        <h3 className="font-semibold">{title}</h3>
        {isList && duration && distance && (
          <p className="text-sm text-gray-600">
            {duration} • {distance}
          </p>
        )}
        <p className="text-sm text-gray-500">{details}</p>
      </div>
      {isList ? (
        <Button label="Voir" onClick={onClick} />
      ) : (
        <Button label="Go !" onClick={onClick} />
      )}
    </div>
  );
};

export default ItineraryCard;
