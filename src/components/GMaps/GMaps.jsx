import React, { Component } from 'react';
// {} - import submodules from the library
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { getUserLocation, searchPlaces } from './../../utils/index';
import './GMaps.scss';

const location = {
  lat: 40.7575285,
  lng: -73.9884469,
}

// const location = { getUserLocation };

const markerPosition = {
  lat: 40.7575285,
  lng: -73.9884469,
}


const GMapsForGrabbbb = withGoogleMap(props => {
  console.log(props)
  return (
    <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
    {props.isMarkerShown && <Marker position={markerPosition} />}
    </GoogleMap>
  )
}
);


export default class GMaps extends Component{

  componentWillMount() {
    getUserLocation()
  }

  render() {
    return(
      <div>
        <GMapsForGrabbbb
          isMarkerShown 
          zoom={13}
          center={location}
          loadingElement={<div style={{ height: `100vh`, width: `100vw`, }} />}
          containerElement={<div style={{ height: `100vh`, width: `100vw`, }} />}
          mapElement={<div style={{ height: `100vh`, width: `100vw`, }} />}
        />
      </div>
    )
  }
}