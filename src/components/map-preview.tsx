"use client";

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapPreviewProps {
  latitude: number;
  longitude: number;
  itinerary?: [number, number][];
  className?: string;
}

const MapPreview: React.FC<MapPreviewProps> = ({
  latitude,
  longitude,
  itinerary,
  className,
}) => {
  useEffect(() => {
    const map = L.map("map").setView([latitude, longitude], 13);

    const markerIcon = L.icon({
      iconUrl: "/icons/marker.png",
      shadowUrl: "/icons/marker-shadow.png",
      iconSize: [25, 41],
      shadowSize: [41, 41],
      iconAnchor: [12, 41],
      shadowAnchor: [12, 41],
      popupAnchor: [0, -41],
    });

    // Add the tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // If itinerary is provided, add a polyline
    if (itinerary && itinerary.length > 0) {
      const itineraryPath = L.polyline(itinerary, { color: "blue" }).addTo(map);

      map.fitBounds(itineraryPath.getBounds());

      itinerary.forEach((coord, index) => {
        if (index== 0) {
          L.marker(coord, { icon: markerIcon })
            .addTo(map)
            .bindPopup("Point de départ")
            .openPopup();
        }
        else if (index == itinerary.length - 1) {
          L.marker(coord, { icon: markerIcon })
            .addTo(map)
            .bindPopup("Point d'arrivée")
            .openPopup();
        } else {
          L.marker(coord, { icon: markerIcon })
            .addTo(map)
            .bindPopup("Point d'intérêt")
            .openPopup();
        }
      });
    } else {
      // Add a single marker for the location
      L.marker([latitude, longitude], { icon: markerIcon })
        .addTo(map)
        .bindPopup("Événement ici")
        .openPopup();
    }

    return () => {
      map.remove();
    };
  }, [latitude, longitude, itinerary]);

  return (
    <div
      id="map"
      className={`w-full !min-h-[300px] h-full rounded-lg shadow-md ${className}`}
    />
  );
};

export default MapPreview;
