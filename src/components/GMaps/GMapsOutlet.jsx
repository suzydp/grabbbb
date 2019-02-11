import React, { Component } from 'react';
import Menus from './Menus/Menus';
// {} - import submodules from the library
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { getUserLocation, searchPlaces } from '../../utils/index';
import OutletMarker from "./../../assets/svg/pin-outlet-mob.svg";
import './GMaps.scss';


// default location (NYC)
const location = {
  lat: 40.7575285,
  lng: -73.9884469,
}

class GMapsForGrabbbb extends Component {
  // console.log('props in GmapsForGrabbbb' + props);
  state = {
    isOpen: false,
    activeMarkerIndex: null,
  }

  openInfoWindow = index => {
    console.log(index);

    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
      activeMarkerIndex: index,
    });
  }

  onToggleOpen = () => {
    console.log('Hey, Toggle is now open');
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    console.log(this.state.isOpen, this.state.activeMarkerIndex);

    return (
      <GoogleMap
        defaultZoom={this.props.zoom}
        defaultCenter={location}
        center={this.props.center}
        options={{streetViewControl: false, mapTypeControl: false, fullscreenControl: false}}
      >
        {/* {props.isMarkerShown && <Marker position={props.center} />} */}
        {this.props.results.map((result, index) => {
          console.log(result);
          let position = {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
          };
          let link = `https://www.google.com/maps/search/?api=1&query=${result.name}&query_place_id=${result.place_id}`;
          
          return (
            <Marker
              key={index}
              position={position}
              icon={OutletMarker}
              onClick={() => this.openInfoWindow(index)}
            >
              {this.state.isOpen && (this.state.activeMarkerIndex === index) && (<InfoWindow onCloseClick={this.onToggleOpen}>
                <div className="info-window">
                  <h2 className="info-window__shopname">{result.name}</h2>
                  <ul>
                    <li className="info-window__hours">{`NOW : ${result.opening_hours ? (result.opening_hours.open_now ? 'OPEN' : 'CLOSED') : 'NO INFOMATION'}`}</li>
                    <li className="info-window__address">{result.vicinity}</li>
                    <li className="info-window__link"><a href={link}>Open in Google Maps</a></li>
                  </ul>
                </div>
              </InfoWindow>)}
            </Marker>
          )
        })}
      </GoogleMap>
    )
  }
}

const InnerToGMaps = withGoogleMap(props => (
  <GMapsForGrabbbb {...props} />
));

export default class GMaps extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // initailize with state to be a change-able value
      location: {},
      results: [], // it'll be stored data as an array of object
    }

    let map = document.getElementsByClassName('map');

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
      })
      .then(() => {
        // console.log('This is invoked as 2nd then :', this.state.location)
        // callbackはparameterとしてresultsをもらう
        const updateState = (results) => {
          this.setState({
            results: results, 
          })
        };
        // invoke searchPlaces with parameters here to show results 'based on current locations'
        searchPlaces(map, this.state.location, 'outlet', updateState);
      })
      .then(() => console.log('results is', this.state.results))
  }

  render() {
    // check current location which has fetched by res
    console.log('location is', this.state.location)
    return(
      <div>
        <Menus className={"BurgerMenu"} />
        <InnerToGMaps
          isMarkerShown 
          zoom={13}
          center={this.state.location}
          loadingElement={<div style={{ height: `70vh`, width: `100vw`, }} />}
          containerElement={<div style={{ height: `100vh`, width: `100vw`, }} />}
          mapElement={<div className="map" style={{ height: `100vh`, width: `100vw`, }} />}
          results={this.state.results}
        />
      </div>
    )
  }
}