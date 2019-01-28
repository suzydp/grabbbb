import React, { Component } from 'react';
// {} - import submodules from the library
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './GMaps.scss';

const location = {
  lat: 40.7575285,
  lng: -73.9884469,
}

const markerPosition = {
  lat: 40.7575285,
  lng: -73.9884469,
}

const GMapsForGrabbbb = compose(
  withProps({
    // <GMapsForGrabbbb />に書き込んでた要素をオブジェクト化している - どのような根拠でやっているのかが不明
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100vh`, width: `100vw`, }} />,//この二重括弧の意味って何？
    containerElement: <div style={{ height: `100vh`, width: `100vw`, }} />,
    mapElement: <div style={{ height: `100vh`, width: `100vw`, }} />,
  }),withScriptjs,withGoogleMap)((props) => 
  <GoogleMap
    defaultZoom={15}
    defaultCenter={location}
  >
    {props.isMarkerShown && <Marker position={markerPosition} onClick={props.onMarkerClick} />}
  </GoogleMap>
)



export default class GMaps extends Component{
  render() {
    return(
      <div>
        <GMapsForGrabbbb 
          isMarkerShown
        />
      </div>
    )
  }
}