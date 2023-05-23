import React from 'react'
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
import {MapContainer,TileLayer,FeatureGroup,Popup,ImageOverlay,Rectangle} from 'react-leaflet'
import MapImage from './Image/MAJOR UPDATED MAP.png'
// import { Class } from '@mui/icons-material';
// import './Map.css'
const rectangle = [
  [26.778906593099343, 75.87766970581089],
  [26.779098156676984, 75.87785611933467]
]
const purpleOptions = { color: 'purple' }

const bounds = [
  [26.778474446915908, 75.87473714161602], // Southwest coordinates
  [26.781845928458388, 75.87986551859902], // Northeast coordinates
];
const center = [26.78031606138502, 75.87752125670083];
const minZoom = 16; 
const initialZoom = 17;



const Map = () => {
  
  return (
    <div>
      {/* //Map Location */}
      <MapContainer className="my-map-container" center={center} zoom={initialZoom} minZoom={minZoom} maxBounds={bounds} maxBoundsViscosity={1.0} scrollWheelZoom={false} style={{ height: '400px', width: '400px', margin: "auto auto"}}>

      {/* //Map load */}
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />

      {/* Image overlay */}
      
      <ImageOverlay url={MapImage} bounds={bounds}/>;
    
      {/* //Class Image */}
      {/* <ImageOverlay bounds={Classbounds} url={ClassUrl} /> */}

      {/* //Layer */}
      <FeatureGroup pathOptions={purpleOptions}>
      <Popup>Your Class is here at Admin 2(Basement)</Popup>
      <Rectangle bounds={rectangle}  />
      </FeatureGroup>


      </MapContainer>
      
    </div>
  )
}

export default Map