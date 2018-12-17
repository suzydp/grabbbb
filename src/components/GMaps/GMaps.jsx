import React, { Component } from 'react';
// {} - import submodules from the library
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './GMaps.scss';

const GMapsForGrabbbb = withScriptjs(withGoogleMap((props) => 
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 40.7575285, lng: -73.9884469 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 40.7575285, lng: -73.9884469 }} />}
  </GoogleMap>
))

export default class GMaps extends Component{
  render() {
    return(
      <div>
        <GMapsForGrabbbb 
          isMarkerShown 
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100vh`, width: `100vw`, }} />}//この二重括弧の意味って何？
          containerElement={<div style={{ height: `100vh`, width: `100vw`, }} />}
          mapElement={<div style={{ height: `100vh`, width: `100vw` }} />}
        />
      </div>
    )
  }
}