import React from 'react'
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const CurrentEvents = () => {
    const [showMap, setShowMap] = useState(false);
    const [pointerCoords, setPointerCoords] = useState(null);
  
    const handleButtonClick = () => {
      setShowMap(true);
    };
  
    const handleMapClick = (event) => {
      setPointerCoords([event.latlng.lat, event.latlng.lng]);
    };

  return (
    <div>
        <button onClick={handleButtonClick}>Show Map</button>
      {showMap && (
        <div id="map-container">
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '400px', margin: "auto auto"}} onClick={handleMapClick}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {pointerCoords && (
              <Marker position={pointerCoords}>
                <Popup>You clicked here!</Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      )} 
    </div>
  )
}

export default CurrentEvents