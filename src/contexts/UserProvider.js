import React, { Component } from "react";
import UserContext from "./UserContext";
import axios from "axios";

const url = "https://5fa3d0d9f10026001618df85.mockapi.io/users";

export default class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: "",
      users: [],
    };
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
    this.handleResetInput = this.handleResetInput.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get(url);
    this.setState({
      users: response.data,
    });
  }

  handleInputChange(e) {
    this.setState({
      newUser: e.target.value,
    });
  }

  handleResetInput() {
    this.setState({
      newUser: "",
    });
  }

  handleAddUser(history) {
    return async (e) => {
      e.preventDefault();
      const response = await axios.post(url, { name: this.state.newUser });
      this.setState({
        newUser: "",
        users: [response.data, ...this.state.users],
      });
      history.push("/");
    };
  }

  handleDeleteUser(user) {
    return async () => {
      await axios.delete(`${url}/${user.id}`);
      const { users } = this.state;
      const value = users.indexOf(user);
      users.splice(value, 1);
      this.setState({
        users: [...users],
      });
    };
  }

  handleEditUser(user) {
    return (e) => {
      this.setState({
        newUser: user.name,
      });
    };
  }

  handleSaveEdit(value, history) {
    return async (e) => {
      e.preventDefault();
      const id = this.state.users.findIndex((user) => user.name === value);
      const a = this.state.users[id].id;
      if (id >= 0) {
        await axios.put(`${url}/${a}`, { name: this.state.newUser });
        this.state.users.splice(id, 1, {
          ...this.state.users[id],
          name: this.state.newUser,
        });
        this.setState({
          newUser: "",
          users: [...this.state.users],
        });
      }
      history.push("/");
    };
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          newUser: this.state.newUser,
          users: this.state.users,
          handleAddUser: this.handleAddUser,
          handleInputChange: this.handleInputChange,
          handleDeleteUser: this.handleDeleteUser,
          handleEditUser: this.handleEditUser,
          handleSaveEdit: this.handleSaveEdit,
          handleResetInput: this.handleResetInput,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
