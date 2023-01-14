import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
  Polygon,
  Polyline,
} from "react-google-maps";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCdXpLSJ3Ibdu-Phs9QOvpqb9d1DtPf7wQ");
Geocode.enableDebug();

const GMaps = (props) => {
  const [location, setlocation] = useState({
    address: false,
    mapPosition: {
      lat: 18.5204,
      lng: 73.8567,
    },
    markerPosition: {
      lat: 18.5204,
      lng: 73.8567,
    },
  });

  const showinfowindow = () => {
    setlocation({ ...location, address: true });
  };
  const BasicMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        google={props.google}
        defaultZoom={15}
        defaultCenter={{
          lat: location.mapPosition.lat,
          lng: location.mapPosition.lng,
        }}
      ></GoogleMap>
    ))
  );

  return (
    
          <BasicMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdXpLSJ3Ibdu-Phs9QOvpqb9d1DtPf7wQ&libraries=places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: "600px" }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
           
  );
};

export default GMaps;
