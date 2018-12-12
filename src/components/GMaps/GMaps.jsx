import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './GMaps.scss';

const AnyReactComponent = ({ imageUrl }) => <div>{imageUrl}</div>;

export default class GMaps extends Component{
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 12,
  }

  render(){
    return(
      <div style={{ height:'100vh', width:'100%' }}>
        Google map component
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* your key here */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            imageUrl={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}