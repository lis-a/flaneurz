"use client";

import ItineraryCard from "@/components/itinerary-card";
import MapPreview from "@/components/map-preview";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const itineraries = [
  {
    title: "Itinéraires classiques",
    details: "Un itinéraire direct sans détour, idéal pour aller d'un point A à un point B rapidement.",
    isList: true,
  },
  {
    title: "Itinéraires culturels",
    details: "Découvrez des lieux historiques, des statues et des places emblématiques.",
    isList: true,
  },
  {
    title: "Itinéraires gourmands",
    details: "Un parcours passant par des cafés, boulangeries et restaurants pour une pause gourmande.",
    isList: true,
  },
  {
    title: "Itinéraires sportifs",
    details: "Un trajet plus long pour faire de l'exercice tout en explorant la ville.",
    isList: true,
  },
  {
    title: "Itinéraires familiaux",
    details: "Un parcours adapté aux familles avec des arrêts dans des parcs et aires de jeux.",
    isList: true,
  },
];

const ItineraryChoice = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative h-screen w-full">
      <button
        className="absolute top-4 left-4 z-20 bg-gray-200 p-2 rounded-full"
        onClick={() => router.back()}
      >
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
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>

      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-300">
        <MapPreview />
      </div>

      <div
        className={`absolute bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-lg transition-all duration-300 ${
          isExpanded ? "h-full" : "h-1/2"
        }`}
      >
        
        <div
          className="w-full flex justify-center py-2 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="w-12 h-1.5 bg-gray-400 rounded-full"></div>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-32px)]">
          {itineraries.map((itinerary, index) => (
            <ItineraryCard
              key={index}
              title={itinerary.title}
              details={itinerary.details}
              isList={itinerary.isList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryChoice;
