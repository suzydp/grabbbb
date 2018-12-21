import { resolve } from "url";
import { rejects } from "assert";

// you can export function like functional component from here

// create google objects to invoke maps on React
// (not necessary if you're using react-google-maps or some other npm)
export function loadGoogleMaps() {
    return new Promise(function(resolve, reject) {
        //define 'resolveGoogleMapsPromise' as the global callback that will run when google maps is loaded
        window.resolveGoogleMapsPromise = function() {
            //resolve the google object
            resolve(window.google);
            //delete the global callback to tidy up since it's no longer needed
            delete window.resolveGoogleMapsPromise;
        }
        //load the google maps API
        const script = document.createElement("script");
        const API_KEY = 'AIzaSyANoAMIDm2KDV97I6ZZieUpzkkEBng8BRE';
        script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`;
        script.acync = true;
        document.body.appendChild(script);
    })
}

export function loadPlaces() {
    let city = 'Silver Spring, MD';
    let query = 'Shopping';
    var apiURL = 'https://api.foursquare.com/v2/venues/search?client_id=N1IAMKZUIK1AUHKRFGFBKPQ2YKDSBAKS4NTER5SYZN5CROR1&client_secret=4MKLXVLU2FGZQVRMAEDC15P0TFJGSCY3ZUYUZ0KHQQQLQ5R3&v=20130815%20&limit=50&near=' + city + '&query=' + query + '';
    return fetch(apiURL).then(response => response.json())
}