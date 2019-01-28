import React, { Component } from 'react';
// {} - import submodules from the library
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import SearchBox from './SearchBox/SearchBox';
import './GMaps.scss';

// const location = {
//   lat: 40.7575285,
//   lng: -73.9884469,
// }

// const markerPosition = {
//   lat: 40.7575285,
//   lng: -73.9884469,
// }

const GMapsForGrabbbb = compose(
  withProps({
    // <GMapsForGrabbbb />に書き込んでた要素をオブジェクト化している - どのような根拠でやっているのかが不明
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key={API Key}&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `96vh`, width: `100vw`, }} />,//この二重括弧の意味って何？
    containerElement: <div style={{ height: `96vh`, width: `100vw`, }} />,
    mapElement: <div style={{ height: `96vh`, width: `100vw`, }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => 
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default class GMaps extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0,
      },
      isMarkerShown: false
    }
  }

  showCurrentLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState(prevState => ({
            currentLatLng: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longtitude,
            },
            isMarkerShown: true
          }))
        }
      )
    }
  }

  componentDidMount() {
    this.showCurrentLocation()
  }

  render() {
    return(
      <div>
        <SearchBox />
        <GMapsForGrabbbb 
          isMarkerShown={this.state.isMarkerShown} 
          currentLocation={this.state.currentLatLng}
        />
      </div>
    )
  }
}