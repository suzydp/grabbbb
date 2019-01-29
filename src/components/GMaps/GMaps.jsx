import React, { Component } from 'react';
import SearchBox from './SearchBox/SearchBox';
// {} - import submodules from the library
import './GMaps.scss';

export default class GMaps extends Component {

	// to render maps
	componentDidMount(){
		this.renderMap()
	}

	renderMap = () => {
		loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyANoAMIDm2KDV97I6ZZieUpzkkEBng8BRE&callback=initMap")
		// this is how can we keep it visible by converting it to the window object
		window.initMap = this.initMap
	}

	initMap = () => {
		// ↓below: window is a global object of your HTML document
		const map = new window.google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 8
		});
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
