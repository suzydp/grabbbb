import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component{
  render(){
    const date = new Date();
    const year = date.getFullYear();
    return(
      <div>
        <footer className="Footer">
          <ul className="footer-content">
            <li>Terms of service</li>
            <li>Privacy Policy</li>
          </ul>
          <p className="copyright">&copy; SZDP {year}</p>
        </footer>
      </div>
    )
  }
}