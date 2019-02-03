import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu'

export default class Menus extends Component {
  render() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="Coffee" className="menu-item" href="/coffee">Coffee</a>
        <a id="BubbleTea" className="menu-item" href="/bubbletea">Bubble tea</a>
        <a id="Wifi" className="menu-item" href="/wifi">Wifi</a>
        <a id="Outlet" className="menu-item" href="/outlet">Outlet</a>
        <div className="bm-footer">
          <ul>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
          </ul>
          <p className="copyright">Grabbbb by &copy; SZDP {year}</p>
        </div>
      </Menu>
    )
  }
}