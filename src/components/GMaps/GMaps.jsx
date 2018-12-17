import React, { Component } from 'react';
// {} - import submodules from the library
import { GoogleMap, Marker } from 'react-google-maps';
import './GMaps.scss';

const MyMapComponent = (props) => 
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 40.7575285, lng: -73.9884469 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 40.7575285, lng: -73.9884469 }} />}
  </GoogleMap>


export default class GMaps extends Component{
  render() {
    return(
      <div>
        Google Maps Component
        <MyMapComponent isMarkerShown />
      </div>
    )
  }
}