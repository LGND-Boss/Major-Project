import React from 'react'
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
import {MapContainer,TileLayer,FeatureGroup,Popup,ImageOverlay} from 'react-leaflet'
// import MapImage from './Image/MAJOR UPDATED MAP.png'
// import { Class } from '@mui/icons-material';
// import './Map.css'
// const rectangle = [
//   [26.781845928458388, 75.87986551859902],
//   [26.778474446915908, 75.87473714161602]
// ]
// const purpleOptions = { color: 'purple' }

const bounds = [
  [26.778474446915908, 75.87473714161602], // Southwest coordinates
  [26.781845928458388, 75.87986551859902], // Northeast coordinates
];
const center = [26.78031606138502, 75.87752125670083];
const minZoom = 16; 
const initialZoom = 17;



const MapLoco = () => {
  
  return (
    <div>
      {/* //Map Location */}
      <MapContainer className="my-map-container" center={center} zoom={initialZoom} minZoom={minZoom} maxBounds={bounds} maxBoundsViscosity={1.0} scrollWheelZoom={false}
       style={{ height: '400px', width: '400px', margin: "auto auto"}}>

      {/* //Map load */}
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />

      {/* Image overlay */}
      
    
      {/* //Class Image */}
      {/* <ImageOverlay bounds={Classbounds} url={ClassUrl} /> */}

      {/* //Layer */}
      {/* <FeatureGroup pathOptions={purpleOptions}> */}
      {/* <Popup>Popup in FeatureGroup</Popup> */}
      {/* <Rectangle bounds={rectangle}  /> */}
      {/* </FeatureGroup> */}


      </MapContainer>
      
    </div>
  )
}

export default MapLoco