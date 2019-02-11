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
          <p className="copyright"><Link to="/">Grabbbb</Link> by &copy; SZDP {year}</p>
        </footer>
      </div>
    )
  }
} 