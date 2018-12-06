import React, { Component } from 'react';
import Footer from './../Footer/Footer.jsx';
import './TopPage.scss';

export default class TopPage extends Component{
  render(){
    return(
      <div className="container">
        <div className="title">
          <h1 className="maintitle">Grabbbb</h1>
          <p className="subtitle">Grab your wants fast</p>
        </div>
        <div className="menus">
          <ul className="options">
            <li><a className="option-circle coffee"></a><span className="option-title">Coffee</span></li>
            <li><a className="option-circle juice"></a><span className="option-title">Softdrinks</span></li>
            <li><a className="option-circle wifi"></a><span className="option-title">Wi-fi</span></li>
            <li><a className="option-circle outlet"></a><span className="option-title">Outlet</span></li>
          </ul>
        </div>
        <Footer/>
      </div>
    )
  }
}