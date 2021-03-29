// src/Flower.js

import React, { Component } from "react";

class Flower extends Component {
  render() {
    const {color} = this.props;
    return (<h2>This is a {this.props.color} Flower!</h2>);
  }
}

export default Flower;
