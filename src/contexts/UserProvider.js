import React, { Component } from "react";
import UserContext from "./UserContext";
import axios from "axios";

export default class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: "",
      users: [],
    };
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    const url = "https://5fa3d0d9f10026001618df85.mockapi.io/users";
    const data = await axios.get(url);
    this.setState({
      users: data.data,
    });
  }

  handleInputChange(e) {
    this.setState({
      newUser: e.target.value,
    });
  }

  handleAddUser(e) {
    e.preventDefault();
    console.log(this.state.newUser);
    this.setState({
      newUser: "",
      users: [{ name: this.state.newUser }, ...this.state.users],
    });
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          newUser: this.state.newUser,
          users: this.state.users,
          handleAddUser: this.handleAddUser,
          handleInputChange: this.handleInputChange,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
