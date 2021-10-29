import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { withRouter } from "react-router";

class AddUser extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {({ handleAddUser, newUser, handleInputChange }) => (
            <form onSubmit={handleAddUser(this.props.history)}>
              <div className="form__group">
                <label htmlFor="userName">Name</label>
                <input
                  type="text"
                  name="user"
                  id="userName"
                  placeholder="Enter Name"
                  value={newUser}
                  onChange={handleInputChange}
                />
              </div>
              <div className="actions">
                <button type="submit" className="btn__submit">
                  Submit
                </button>
                <Link to="/" className="btn__cancel">
                  Cancel
                </Link>
              </div>
            </form>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default withRouter(AddUser);
