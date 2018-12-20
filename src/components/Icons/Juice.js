import React from 'react';

const SVG = ({
  style = {},
  fill = "#fff",
  width = "70%",
  className = "Juice",
  viewBox = "1 0 50 50",
}) => ( 
  <svg 
    width = {width}
    height = {width}
    style = {style}
    viewBox = {viewBox}
    xmlns = "http://www.w3.org/2000/svg"
    className = {`svg-icon ${className || ""}`}
    xmlnsXlink = "http://www.w3.org/1999/xlink" >
    <path d="M31.4784 33.4511C31.1995 33.9342 30.5817 34.0997 30.0986 33.8208C29.6155 33.5419 29.45 32.9241 29.7289 32.441C30.0079 31.9579 30.6256 31.7924 31.1087 32.0713C31.5918 32.3502 31.7573 32.968 31.4784 33.4511Z" fill={fill}/>
    <path d="M27.037 32.0532C27.5201 32.3321 28.1379 32.1666 28.4168 31.6834C28.6957 31.2003 28.5302 30.5826 28.0471 30.3037C27.564 30.0247 26.9462 30.1903 26.6673 30.6734C26.3884 31.1565 26.5539 31.7742 27.037 32.0532Z" fill={fill}/>
    <path d="M29.7108 36.5126C29.4319 36.9957 28.8141 37.1612 28.331 36.8823C27.8479 36.6034 27.6824 35.9856 27.9613 35.5026C28.2402 35.0194 28.858 34.8539 29.3411 35.1328C29.8242 35.4118 29.9897 36.0295 29.7108 36.5126Z" fill={fill}/>
    <path d="M25.2694 35.1147C25.7525 35.3937 26.3703 35.2281 26.6492 34.745C26.9281 34.2619 26.7626 33.6442 26.2795 33.3653C25.7964 33.0863 25.1786 33.2519 24.8997 33.735C24.6208 34.2181 24.7863 34.8358 25.2694 35.1147Z" fill={fill}/>
    <path d="M24.8816 37.8067C24.6026 38.2898 23.9849 38.4553 23.5018 38.1764C23.0187 37.8975 22.8532 37.2797 23.1321 36.7966C23.411 36.3135 24.0287 36.148 24.5119 36.4269C24.995 36.7058 25.1605 37.3236 24.8816 37.8067Z" fill={fill}/>
    <path d="M20.4402 36.4087C20.9233 36.6877 21.541 36.5221 21.82 36.039C22.0989 35.5559 21.9333 34.9382 21.4502 34.6593C20.9671 34.3803 20.3494 34.5459 20.0705 35.029C19.7915 35.5121 19.9571 36.1298 20.4402 36.4087Z" fill={fill}/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1342 0.35415C28.035 0.160333 26.987 0.894616 26.7937 1.99389L24.4975 15.0585H15.5252C14.1306 15.0585 13 16.1891 13 17.5837V18.2927C13 19.5327 13.8939 20.5641 15.0726 20.7774L17.0038 50H34.2479L36.1825 20.7259C37.2482 20.4299 38.0303 19.4526 38.0303 18.2927V17.5837C38.0303 16.1891 36.8997 15.0585 35.5051 15.0585H30.6511L32.7625 3.04403C32.9555 1.94564 32.2219 0.898614 31.1236 0.70495L29.1342 0.35415ZM26.5764 14.9001L28.7834 2.34359L30.7729 2.69439L28.6279 14.9001H26.5764ZM17.4133 25.5614L17.1092 20.9606H34.1425L33.7356 27.1163C32.9812 27.8961 31.6965 27.8245 31.0368 26.945L30.8356 26.6767C29.299 24.6279 26.2259 24.6279 24.6894 26.6767L24.6146 26.7763C23.9235 27.6978 22.5412 27.6978 21.8501 26.7763C20.768 25.3335 18.9193 24.9401 17.4133 25.5614ZM17.5659 27.8701L18.8949 47.9799H32.3568L33.5775 29.5097C32.1096 29.9591 30.4257 29.4969 29.4207 28.157L29.2195 27.8887C28.491 26.9174 27.034 26.9174 26.3055 27.8887L26.2307 27.9884C24.7316 29.9873 21.7332 29.9873 20.234 27.9884C19.5688 27.1015 18.2755 27.0747 17.5659 27.8701ZM15.5252 17.0787C15.2462 17.0787 15.0201 17.3048 15.0201 17.5837V18.2927C15.0201 18.5716 15.2462 18.7977 15.5252 18.7977H35.5051C35.7841 18.7977 36.0102 18.5716 36.0102 18.2927V17.5837C36.0102 17.3048 35.7841 17.0787 35.5051 17.0787H15.5252Z" fill={fill}/>
  </svg>
);

export default SVG;