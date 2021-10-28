import React, { Component } from "react";
import UserContext from "../contexts/UserContext";
import Heading from "./Heading";
import UserList from "./UserList";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Heading />
        <UserContext.Consumer>
          {({ users }) =>
            users.map((user, index) => <UserList user={user} key={index} />)
          }
        </UserContext.Consumer>
      </div>
    );
  }
}
