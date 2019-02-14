import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './../Footer/Footer.jsx';
import CoffeeIcon from './../Icons/Coffee.js';
import BubbleTeaIcon from './../Icons/bubbletea.js';
import WifiIcon from './../Icons/Wifi.js';
import OutletIcon from './../Icons/Outlet.js';
import './TopPage.scss';

export default class TopPage extends Component{
  render(){
    return(
      <div>
        <div className="top-container">
          <div className="title">
            <h1 className="maintitle">Grabbbb</h1>
            <p className="subtitle">Grab your wants fast</p>
          </div>
          <div className="menus">
            <ul className="options">
              <li><Link to="/coffee" className="option-circle coffee" keyword={`Coffee`}><CoffeeIcon /></Link><span className="option-title">Coffee</span></li>
              <li><Link to="/bubbletea" className="option-circle bubbletea" keyword={`bubbletea`}><BubbleTeaIcon /></Link><span className="option-title">Bubble Tea</span></li>
              <li><Link to="/wifi" className="option-circle wifi" keyword={`Wifi`}><WifiIcon /></Link><span className="option-title">Wi-fi</span></li>
              <li><Link to="/outlet" className="option-circle outlet" keyword={`Outlet`}><OutletIcon /></Link><span className="option-title">Outlet</span></li>
            </ul>
          </div>
          <div className="footer-content">
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}