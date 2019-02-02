import React, { Component } from 'react';
// {} - import submodules from the library
import GMaps from './GMaps/GMaps';
import './MapPage.scss';
import Axios from 'axios';


export default class MapPage extends Component{

  state = {
    venues: [],
  }

  componentDidMount() {
    this.getVenues()
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "5W0HJQKDFGOBH03502GBD0P0LPA0N10FU5OAZX3HI3VGYJ24",
      client_secret: "D4VX4SU20WCPDYWIGOQCP4UN42QCJHFPTWLMROWP52D5TXSF",
      query: "coffee",
      near: "New York",
      v: "20180323", // version of our api
    }

    // axios is pretty similar to Fetch API: https://medium.com/@sahilkkrazy/fetch-vs-axios-http-request-c9afa43f804e
    Axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          venues: response.data.response.groups[0].items
        }) // after change state in array, map will render
        console.log(response.data.response.groups[0].items)
      })
      .catch(error => {
        console.log("Error! " + error)
      })
  }

  render() {
    return(
      <div>
        <GMaps 
          containerElement={<div style={{ height: `100vh`, width: `100vw`, }} />}
          mapElement={<div style={{ height: `100vh`, width: `100vw`, }} />}
          isMarkerShown
        />
      </div>
    )
  }
}