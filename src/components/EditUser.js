import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EditUser extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form__group">
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              name="user"
              id="userName"
              placeholder="Enter Name"
            />
          </div>
          <div className="actions">
            <button className="btn__submit">Save</button>
            <Link to="/" className="btn__cancel">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
