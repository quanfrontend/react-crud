import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserList extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="box__users">
        <div className="UserList">
          <p>{user.name}</p>
          <div className="actions">
            <Link className="btn__edit" to="/edit/1">
              Edit
            </Link>
            <button className="btn__delete">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
