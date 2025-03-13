"use client"; // Ensure this component runs only on the client side

import { useEffect } from "react";
import dynamic from "next/dynamic";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

const markerIcon = L.icon({
  iconUrl: "/icons/marker.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

interface MapItineraryProps {
  center?: [number, number];
  zoom?: number;
  waypoints?: [number, number][];
}

const MapItinerary: React.FC<MapItineraryProps> = ({
  center = [48.8566, 2.3522],
  zoom = 13,
  waypoints = [],
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "100%", position: "fixed" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {waypoints.length < 2 ? (
        <Marker position={center} icon={markerIcon} alt="Point d'intérêt sur la carte"/>
      ) : (
        <RoutingLayer waypoints={waypoints} />
      )}
    </MapContainer>
  );
};

const RoutingLayer: React.FC<{ waypoints: [number, number][] }> = ({
  waypoints,
}) => {
  const map = useMap();

  useEffect(() => {
    import("leaflet-routing-machine").then(() => {
      if (waypoints.length >= 2) {
        const routingControl = L.Routing.control({
          autoRoute: true,
          waypoints: waypoints.map(([lat, lng]) => L.latLng(lat, lng)),
          routeWhileDragging: true,
          lineOptions: {
            styles: [{ color: "#3643BA", weight: 5 }],
            extendToWaypoints: false,
            missingRouteTolerance: 0,
          },
          router: new L.Routing.OSRMv1({
            serviceUrl: "https://router.project-osrm.org/route/v1",
          }),
        }).addTo(map);

        return () => {
          map.removeControl(routingControl);
        };
      }
    });
  }, [map, waypoints]);

  return null;
};

export default dynamic(() => Promise.resolve(MapItinerary), { ssr: false });
