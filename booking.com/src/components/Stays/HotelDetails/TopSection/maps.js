import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MdRemoveCircleOutline, MdLocationOn, MdAddCircleOutline } from 'react-icons/md';

mapboxgl.accessToken = "pk.eyJ1IjoieW9zcmNoYXJlayIsImEiOiJjbGhtbm4wdmYwMGp4M2VwZWo1Mmd4aGUzIn0.MnRTZw6VNhrxhqX7pjJ7sQ";

function Maps({ pointx, pointy }) {
  const [mapx, setMapx] = useState({
    latitude: pointx,
    longitude: pointy,
    width: '100%',
    height: '700px',
    zoom: 11,  // Réduit le zoom initial
  });

  const markerPosition = {
    latitude: pointx,
    longitude: pointy,
  };

  const handleZoomIn = () => {
    setMapx(prevState => ({
      ...prevState,
      zoom: Math.min(prevState.zoom + 1, 20)  // Limite maximale du zoom
    }));
  };

  const handleZoomOut = () => {
    setMapx(prevState => ({
      ...prevState,
      zoom: Math.max(prevState.zoom - 1, 1)  // Limite minimale du zoom
    }));
  };

  return (
    <ReactMapGL
      {...mapx}
      mapboxApiAccessToken={mapboxgl.accessToken}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      onViewportChange={mapx => {
        setMapx(mapx);
      }}
    >
      {/* Icônes de zoom */}
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button onClick={handleZoomIn} style={buttonStyle}>
          <MdAddCircleOutline style={buttonIconStyle} />
        </button>
        <button onClick={handleZoomOut} style={buttonStyle}>
          <MdRemoveCircleOutline style={buttonIconStyle} />
        </button>
      </div>

      {/* Marqueur */}
      <Marker {...markerPosition} offsetTop={-20} offsetLeft={-10}>
        <div style={{ fontSize: "70px", color: '#075673' }}>
          {/* Icône que vous souhaitez afficher */}
          <MdLocationOn />
        </div>
      </Marker>
    </ReactMapGL>
  );
}

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  color: '#075673',  // Change la couleur de fond en bleu
  border: '1px solid #ccc',
  cursor: 'pointer',
  margin: '5px',
};

const buttonIconStyle = {
  fontSize: '20px',
  color: '#075673',  // Change la couleur des icônes en bleu
};

export default Maps;
