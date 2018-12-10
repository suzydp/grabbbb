import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './GMaps.scss';

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
        />
      </div>
    )
  }
}