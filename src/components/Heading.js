import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Heading extends Component {
  render() {
    return (
      <div className="Heading">
        <h3>Home</h3>
        <Link className="btn__add" to="/add">
          Add User
        </Link>
      </div>
    );
  }
}
