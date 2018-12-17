import React from 'react';

const SVG = ({
  style = {},
  fill = "#fff",
  width = "100%",
  className = "wifi",
  viewBox = "0 3 50 50",
}) => ( 
  <svg 
    width = {width}
    height = {width}
    style = {style}
    viewBox = {viewBox}
    xmlns = "http://www.w3.org/2000/svg"
    className = {`svg-icon ${className || ""}`}
    xmlnsXlink = "http://www.w3.org/1999/xlink" >
    <path 
      xmlns = "http://www.w3.org/2000/svg"
      fill-rule = "evenodd"
      clip-rule = "evenodd"
      d = "M45.7929 22.7071C34.5854 11.4997 16.4146 11.4997 5.20711 22.7071C4.81658 23.0976 4.18342 23.0976 3.79289 22.7071C3.40237 22.3166 3.40237 21.6834 3.79289 21.2929C15.7814 9.30439 35.2186 9.30439 47.2071 21.2929C47.5976 21.6834 47.5976 22.3166 47.2071 22.7071C46.8166 23.0976 46.1834 23.0976 45.7929 22.7071Z"
      fill={fill}>
    </path>
    <path 
      xmlns = "http://www.w3.org/2000/svg"
      fill-rule = "evenodd"
      clip-rule = "evenodd"
      d = "M39.7929 28.7071C31.8991 20.8134 19.1009 20.8134 11.2071 28.7071C10.8166 29.0976 10.1834 29.0976 9.79289 28.7071C9.40237 28.3166 9.40237 27.6834 9.79289 27.2929C18.4677 18.6181 32.5323 18.6181 41.2071 27.2929C41.5976 27.6834 41.5976 28.3166 41.2071 28.7071C40.8166 29.0976 40.1834 29.0976 39.7929 28.7071Z"
      fill = {fill}>
    </path>
    <path 
      xmlns = "http://www.w3.org/2000/svg"
      fill-rule = "evenodd"
      clip-rule = "evenodd"
      d = "M33.7929 34.7071C29.2129 30.1271 21.7871 30.1271 17.2071 34.7071C16.8166 35.0976 16.1834 35.0976 15.7929 34.7071C15.4024 34.3166 15.4024 33.6834 15.7929 33.2929C21.154 27.9318 29.846 27.9318 35.2071 33.2929C35.5976 33.6834 35.5976 34.3166 35.2071 34.7071C34.8166 35.0976 34.1834 35.0976 33.7929 34.7071Z"
      fill = {fill}>
    </path>
    <path 
      xmlns = "http://www.w3.org/2000/svg"
      d = "M29.5 41.6569C29.5 43.8661 27.7091 45.6569 25.5 45.6569C23.2909 45.6569 21.5 43.8661 21.5 41.6569C21.5 39.4478 23.2909 37.6569 25.5 37.6569C27.7091 37.6569 29.5 39.4478 29.5 41.6569Z"
      fill = {fill}>
    </path>
  </svg>
);

export default SVG;