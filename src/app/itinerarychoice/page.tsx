"use client";

import ItineraryCard from "@/components/itinerary-card";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const MapItinerary = dynamic(() => import("@/components/map-itinerary"), {
  ssr: false,
});

const itineraries = [
  {
    title: "Itinéraire classique",
    duration: "10min",
    distance: "500m",
    isList: false,
    alt: "Itinéraire classique",
    icon: "classic-itinerary.svg",
  },
  {
    title: "Itinéraire culture",
    details: "Découvrez un monument sur votre chemin",
    isList: true,
    alt: "Itinéraire culture",
    icon: "cultural-itinerary.svg",
  },
  {
    title: "Itinéraire gourmand",
    details: "Faites une pause et reprenez des forces sur votre chemin",
    isList: true,
    alt: "Itinéraire gourmand",
    icon: "gourmet-itinerary.svg",
  },
];

const culturalItineraries: {
  title: string;
  duration: string;
  distance: string;
  isList: boolean;
  alt: string;
  icon: string;
  waypoints: [number, number][];
}[] = [
  {
    title: "Via bibliothèque Victor Hugo",
    duration: "10min",
    distance: "550m",
    isList: false,
    alt: "Via bibliothèque Victor Hugo",
    icon: "book.svg",
    waypoints: [
      [48.86159747205117, 2.36039718352266], // Point de départ (identique pour tous)
      [48.86350123456789, 2.36223456789012], // Point intermédiaire (bibliothèque)
      [48.86722964698431, 2.3635289813164597], // Point d'arrivée (identique pour tous)
    ],
  },
  {
    title: "Via théâtre Molière",
    duration: "10min",
    distance: "620m",
    isList: false,
    alt: "Via théâtre Molière",
    icon: "theater.svg",
    waypoints: [
      [48.86159747205117, 2.36039718352266], // Point de départ (identique pour tous)
      [48.86420123456789, 2.36153456789012], // Point intermédiaire (théâtre)
      [48.86722964698431, 2.3635289813164597], // Point d'arrivée (identique pour tous)
    ],
  },
  {
    title: "Via musée de la médecine",
    duration: "10min",
    distance: "640m",
    isList: false,
    alt: "Via musée de la médecine",
    icon: "museum.svg",
    waypoints: [
      [48.86159747205117, 2.36039718352266], // Point de départ (identique pour tous)
      [48.86390123456789, 2.35923456789012], // Point intermédiaire (musée)
      [48.86722964698431, 2.3635289813164597], // Point d'arrivée (identique pour tous)
    ],
  },
];

const ItineraryChoice = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentView, setCurrentView] = useState("main"); // "main" or "cultural"
  const [selectedCulturalRoute, setSelectedCulturalRoute] = useState(0); // Index of selected cultural route

  const handleItinerarySelect = (title: string) => {
    if (title === "Itinéraire culture") {
      setCurrentView("cultural");
    }
    // Handle other itineraries as needed
  };

  const handleCulturalRouteSelect = (index: number) => {
    // This replaces the previously selected route instead of adding to it
    setSelectedCulturalRoute(index);
  };

  const defaultWaypoints: [number, number][] = [
    [48.86159747205117, 2.36039718352266],
    [48.86722964698431, 2.3635289813164597],
  ];

  // Get current waypoints based on view
  const currentWaypoints =
    currentView === "main"
      ? defaultWaypoints
      : culturalItineraries[selectedCulturalRoute].waypoints;

  return (
    <div className="max-w-sm mx-auto">
      <div className="relative h-screen w-full">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-300">
          {/* The key prop ensures the component fully remounts when waypoints change */}
          <MapItinerary
            key={`map-${currentView}-${selectedCulturalRoute}`}
            waypoints={currentWaypoints}
          />
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
            {currentView === "main" ? (
              <>
                <div className="flex justify-between items-center w-full">
                  <h2 className="font-bold text-2xl">Itinéraires</h2>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <button className="text-blue-600">
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
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
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
                    onClick={() => handleItinerarySelect(itinerary.title)}
                  />
                ))}
              </>
            ) : (
              currentView === "cultural" && (
                <>
                  <div className="flex justify-between items-center w-full">
                    <button
                      className="text-gray-600"
                      onClick={() => setCurrentView("main")}
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
                    <h2 className="font-bold text-2xl">Itinéraire culture</h2>
                    <div className="w-6"></div> {/* Spacer for alignment */}
                  </div>
                  {culturalItineraries.map((itinerary, index) => (
                    <div key={index} className="w-full">
                      <ItineraryCard
                        title={itinerary.title}
                        duration={itinerary.duration}
                        distance={itinerary.distance}
                        isList={false}
                        icon={itinerary.icon}
                        alt={itinerary.alt}
                        onClick={() => handleCulturalRouteSelect(index)}
                      />
                    </div>
                  ))}
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryChoice;
