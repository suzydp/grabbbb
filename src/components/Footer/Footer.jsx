import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component{
  render(){
    return(
      <div>
        <footer className="Footer">
          <ul className="footer-content">
            <li>Terms of service</li>
            <li>Privacy Policy</li>
          </ul>
        </footer>
      </div>
    )
  }
}