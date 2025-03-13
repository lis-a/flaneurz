import React from "react";
import Button from "./ui/button";
import Image from "next/image";

interface ItineraryCardProps {
  title: string;
  duration?: string;
  distance?: string;
  details?: string;
  isList: boolean;
  onClick?: () => void;
  alt: string;
  icon?: string;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({
  title,
  duration,
  distance,
  details,
  isList,
  onClick,
  alt,
  icon,
}) => {
  return (
    <div className="w-full p-4 border rounded-md bg-white shadow-sm flex gap-2 justify-between items-center">
      <div className="flex gap-4">
        <Image
          src={`/itinerary-card/${icon ?? "classic-itinerary.svg"}`}
          alt={alt}
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">{title}</h3>
          {!isList && duration && distance && (
            <p className="text-sm text-gray-600">
              {duration} • {distance}
            </p>
          )}
          <p className="text-sm text-gray-500">{details}</p>
        </div>
      </div>
      {isList ? (
        <button onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      ) : (
        <Button label="Go !" onClick={onClick} />
      )}
    </div>
  );
};

export default ItineraryCard;
