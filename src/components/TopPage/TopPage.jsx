import React, { Component } from 'react';
import Footer from './../Footer/Footer.jsx';
import './TopPage.scss';

export default class TopPage extends Component{
  render(){
    return(
      <div classname="container">
        <div className="title">
          <h1 className="maintitle">Grabbbb</h1>
          <p className="subtitle">Grab your wants fast</p>
        </div>
        <div className="menus">
          <ul className="options">
            <li>Coffee</li>
            <li>Juice / Bubble tea</li>
            <li>Wi-fi</li>
            <li>Outlet</li>
          </ul>
        </div>
        <Footer/>
      </div>
    )
  }
}