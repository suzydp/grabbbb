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
      defaultCenter={location}
      center={props.center}
    >
      {props.isMarkerShown && <Marker position={props.center} />}
    </GoogleMap>
  )
}
);


export default class GMaps extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // initailize with state to be a change-able value
      location: {},
    }
    // instead of componentWillMount() to be more secure
    getUserLocation()
      // this function is basically invoked with Promise, 
      // so better to use Promise here as well to get response properly
      .then(res => {
        console.log('what is res?', res)
        this.setState({
          // set current location (res form Promise) as a state 
          location: res,
        })
      });
  }

  render() {
    // check current location which has fetched by res
    console.log('location is', this.state.location)
    return(
      <div>
        <GMapsForGrabbbb
          isMarkerShown 
          zoom={13}
          center={this.state.location}
          loadingElement={<div style={{ height: `100vh`, width: `100vw`, }} />}
          containerElement={<div style={{ height: `100vh`, width: `100vw`, }} />}
          mapElement={<div style={{ height: `100vh`, width: `100vw`, }} />}
        />
      </div>
    )
  }
}