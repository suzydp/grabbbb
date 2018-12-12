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
            <li>This is the website of "Grabbbb" created by Kaai Suzuki, also running self-employment 
              as szdp, currently based on Vancouver, Canada, and welcome to our privacy policy.</li>
          </ul>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}