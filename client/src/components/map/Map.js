import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

import LocationPin from "./LocationPin";

export default function Map({ location, zoomLevel }) {
  return (
    <GoogleMap>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAP_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </GoogleMap>
  );
}

const GoogleMap = styled.div`
  width: 70%;
  height: 60vh;
  padding: 0;
  margin: 0;
`;
