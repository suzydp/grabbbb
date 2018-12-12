import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
          <p className="copyright"><Link to="/">Grabbbb</Link> by &copy; SZDP {year}</p>
        </footer>
      </div>
    )
  }
} 