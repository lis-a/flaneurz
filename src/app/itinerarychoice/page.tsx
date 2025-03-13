"use client";

import ItineraryCard from "@/components/itinerary-card";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const itineraries = [
  {
    title: "Itinéraire classique",
    duration: "16min",
    distance: "1,1 km",
    isList: false,
    alt: "Itinéraire classique",
    icon: "classic-itinerary.svg",
  },
  {
    title: "Itinéraires culturels",
    details:
      "Découvrez des lieux historiques, des statues et des places emblématiques.",
    isList: true,
    alt: "Itinéraires culturels",
    icon: "cultural-itinerary.svg",
  },
  {
    title: "Itinéraires gourmands",
    details:
      "Un parcours passant par des cafés, boulangeries et restaurants pour une pause gourmande.",
    isList: true,
    alt: "Itinéraires gourmands",
    icon: "gourmet-itinerary.svg",
  },
  {
    title: "Itinéraires sportifs",
    details:
      "Un trajet plus long pour faire de l'exercice tout en explorant la ville.",
    isList: true,
    alt: "Itinéraires sportifs",
  },
  {
    title: "Itinéraires familiaux",
    details:
      "Un parcours adapté aux familles avec des arrêts dans des parcs et aires de jeux.",
    isList: true,
    alt: "Itinéraires familiaux",
  },
];

const MapPreview = dynamic(() => import("@/components/map-preview"), {
  ssr: false,
});

const ItineraryChoice = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-sm mx-auto">
      <div className="relative h-screen w-full">
        {/* <button
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
        </button> */}

        <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-300">
          <MapPreview
            latitude={48.8}
            longitude={2.3}
            itinerary={[
              [48.83159747205117, 2.31639718352266],
              [48.83330254416944, 2.3269748306813978],
            ]}
            className="fixed top-0 left-0"
          />
          ,
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

          <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-32px)] flex flex-col items-center">
            <h2 className="font-medium text-2xl">Itinéraires</h2>
            {itineraries.map((itinerary, index) => (
              <ItineraryCard
                key={index}
                title={itinerary.title}
                duration={itinerary.duration}
                distance={itinerary.distance}
                details={itinerary.details}
                isList={itinerary.isList}
                icon={itinerary.icon}
                alt={itinerary.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryChoice;
