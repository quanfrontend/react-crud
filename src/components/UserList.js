import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default class UserList extends Component {
  render() {
    const { user } = this.props;
    return (
      <UserContext.Consumer>
        {({ handleDeleteUser, handleEditUser }) => (
          <div className="box__users">
            <div className="UserList">
              <p>{user.name}</p>
              <div className="actions">
                <Link
                  className="btn__edit"
                  to={`/edit/${user.id}`}
                  onClick={handleEditUser(user)}
                >
                  Edit
                </Link>
                <button
                  className="btn__delete"
                  onClick={handleDeleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
