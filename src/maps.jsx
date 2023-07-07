import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const AnyReactComponent = ({ text }) => (
  <div>
    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'red' , fontSize:"40px" }} />
    <span className="mapname" >{text}</span>
  </div>
);

export default function SimpleMap() {
  const [markerPosition, setMarkerPosition] = useState({ lat: 48.866667, lng: 2.333333 });

  function handleMapChange({ center }) {
    setMarkerPosition(center);
  }

  return (
    <div className="maps">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD4RaDc071sadY0BUdI0DiskKIX1T2pAaI" }}
        defaultCenter={markerPosition}
        defaultZoom={11}
        onChange={handleMapChange}
      >
        <AnyReactComponent
          lat={markerPosition.lat}
          lng={markerPosition.lng}
          text="1 Rue de Stockholm, 75008 Paris"
        />
      </GoogleMapReact>
    </div>
  );
}
