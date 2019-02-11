import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu'
import CoffeeIcon from './../../Icons/Coffee.js';
import BubbleTeaIcon from './../../Icons/bubbletea.js';
import WifiIcon from './../../Icons/Wifi.js';
import OutletIcon from './../../Icons/Outlet.js';
import './Menus.scss';

export default class Menus extends Component {
  render() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <Menu>
        <a id="Coffee" className="menu-item" href="/coffee"><div className="menu-icon-wrap coffee"><CoffeeIcon className="menu-icon coffee" /></div>Coffee</a>
        <a id="BubbleTea" className="menu-item" href="/bubbletea"><div className="menu-icon-wrap bubbletea"><BubbleTeaIcon className="menu-icon bubbletea" /></div>Bubble tea</a>
        <a id="Wifi" className="menu-item" href="/wifi"><div className="menu-icon-wrap wifi"><WifiIcon className="menu-icon wifi" /></div>Wifi</a>
        <a id="Outlet" className="menu-item" href="/outlet"><div className="menu-icon-wrap outlet"><OutletIcon className="menu-icon outlet" /></div>Outlet</a>
        <div className="bm-footer">
          <ul>
            <a href="/privacy"><li>Terms of service</li></a>
          </ul>
          <p className="copyright"><a id="home" href="/">Grabbbb</a> by &copy; <a href="https://suzydp.net">SZDP {year}</a></p>
        </div>
      </Menu>
    )
  }
}