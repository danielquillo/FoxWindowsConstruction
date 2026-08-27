"use client";

import {
  Circle,
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";

const CENTER: [number, number] = [42.1275, -87.829];

const redPinIcon = L.icon({
  iconUrl:
    "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});


// Change this number whenever you want a larger/smaller radius
const SERVICE_RADIUS_MILES = 40;

const radiusInMeters = SERVICE_RADIUS_MILES * 1609.344;

export default function ServiceAreaMapInner() {
  return (
    <MapContainer
      center={CENTER}
      zoom={8.2}
      scrollWheelZoom={false}
      className="h-[400px] w-full md:h-[500px] lg:h-full lg:min-h-[520px]"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Approximate service area */}
      <Circle
        center={CENTER}
        radius={radiusInMeters}
        pathOptions={{
          color: "#0b3b63",
          weight: 2,
          fillColor: "#0b3b63",
          fillOpacity: 0.16,
        }}
      >
        <Tooltip sticky>
          Approximate Fox Windows Construction service area
        </Tooltip>
      </Circle>

      {/* Northbrook location */}
      <Marker
        position={CENTER}
        icon={redPinIcon}
      >
        <Tooltip>
          Fox Windows Construction
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
