import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { withRouter } from "react-router";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.inputEdit = React.createRef();
    this.state = {
      value: "",
    };
  }
  componentDidMount() {
    const value = this.inputEdit.current.value;
    this.setState({
      value: value,
    });
  }
  render() {
    return (
      <UserContext.Consumer>
        {({ handleSaveEdit, handleInputChange, newUser }) => (
          <div>
            <form
              onSubmit={handleSaveEdit(this.state.value, this.props.history)}
            >
              <div className="form__group">
                <label htmlFor="userName">Name</label>
                <input
                  type="text"
                  name="user"
                  id="userName"
                  placeholder="Enter Name"
                  value={newUser}
                  onChange={handleInputChange}
                  ref={this.inputEdit}
                />
              </div>
              <div className="actions">
                <button type="submit" className="btn__submit">
                  Save
                </button>
                <Link to="/" className="btn__cancel">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(EditUser);
