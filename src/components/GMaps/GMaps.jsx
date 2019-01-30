import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox/SearchBox';
// {} - import submodules from the library
import './GMaps.scss';

export default class GMaps extends Component {

	// to store all the venues of results, state needs to prepare with empty array
	state = {
		venues: [],
	}

	// to render maps
	componentDidMount() {
		this.getVenues()
	}

	renderMap = () => {
		loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyANoAMIDm2KDV97I6ZZieUpzkkEBng8BRE&callback=initMap")
		// this is how can we keep it visible by converting it to the window object
		window.initMap = this.initMap
	}

	getVenues = () => {
		const endPoint = "https://api.foursquare.com/v2/venues/explore?"
		// we have to prepare everything we need here as an object
		const parameters = {
			client_id: "5W0HJQKDFGOBH03502GBD0P0LPA0N10FU5OAZX3HI3VGYJ24",
			client_secret: "D4VX4SU20WCPDYWIGOQCP4UN42QCJHFPTWLMROWP52D5TXSF",
			query: "coffee",
			near: "Vancouver",
			v: "20180323", // version of our api
		}

		// axios is pretty similar to Fetch API: https://medium.com/@sahilkkrazy/fetch-vs-axios-http-request-c9afa43f804e
		axios.get(endPoint + new URLSearchParams(parameters))
			.then(response => {
				this.setState({
					venues: response.data.response.groups[0].items
				}, this.renderMap()) // after change state in array, map will render
				console.log(response.data.response.groups[0].items)
			})
			.catch(error => {
				console.log("Error! " + error)
			})
	}

	initMap = () => {
		// ↓below: window is a global object of your HTML document
		const map = new window.google.maps.Map(document.getElementById('map'), {
			center: {lat: 49.24966, lng: -123.11934},
			zoom: 15
		});

		this.state.venues.map(myVenue => {
			// looping this
			var marker = new window.google.maps.Marker({
				position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
				map: map,
				title: myVenue.venue.name
			})
		})

		
	}

	render() {
		return (
			<React.Fragment>
				<SearchBox />
				<div id="map"></div>
			</React.Fragment>
		)
	}
}

// function called something like load the script, to access <script> in google maps
function loadScript(url) {
	// we'll have something called the reference or the index of the first script tag 
	// select the data which has script tag
	// ↓below: window is a global object of your HTML document
	let index = window.document.getElementsByTagName("script")[0]
	let script = window.document.createElement("script")
	script.src = url // if the url is equal to parameter, we have awesome source!
	script.async = true
	script.defer = true
	// select the index or the first script tag, then we'll select its parent node and then insert our script before it
	// to keep our script at the very beginning
	index.parentNode.insertBefore(script, index)
}

/*
	<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap
		async defer"></script>
*/ 
