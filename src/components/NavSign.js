import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavSign extends React.Component {
  render() {
    const mystyle = {
      fill: "#00aa50",
      padding: "10px",
      fontFamily: "Arial"
    };

    return <div><svg width="500" height="500">
      <rect width={20} height={300} style={mystyle}>
        red
      </rect>
    </svg></div>
  }
}

export default NavSign;
