import React, { Component } from 'react';
import Footer from './../Footer/Footer.jsx';
import './Privacy.scss';

export default class Privacy extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="Container">
          <h1>Privacy Policy</h1>
          <ul>
            <li>This is the website of "Grabbbb" created by <a href="https://suzydp.net">Kaai Suzuki/SZDP</a> in Vancouver, Canada, and welcome to the privacy policy.</li>
            <li>Every information is coming from <a href="maps.google.com">Google Maps</a> and <a href="https://foursquare.com/">Foursquare</a> via API. 
              The responsibility for all the information which is able to see on this website belongs to Google and Foursquare, 
              the provider of the API. Grabbbb does not assume the responsibility for the loss and temporary unavailable of information.</li>
            <li>All the icons and Markers appeared on this app are created by Kaai Suzuki/SZDP. licence along to <a href="https://creativecommons.org/licenses/by/4.0/">CC 4.0 BY.</a></li>
            <li>This declaration is updated on 10 Feb 2019.</li>
          </ul>
        </div>
        <a href="/">Back to Top</a>
        <Footer />
      </React.Fragment>
    )
  }
}