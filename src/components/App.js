import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../ducks/users";

class App extends Component {
  componentDidMount = () => {
    const { fetchUsers } = this.props;
    fetchUsers();
  };

  render() {
    const { users, loading } = this.props;
    if (loading) return <div>Loading...</div>;
    console.log(users);
    return <div>hello</div>;
  }
}

export default connect(
  state => ({
    users: state.users.usersList,
    loading: state.users.loading
  }),
  { fetchUsers }
)(App);
