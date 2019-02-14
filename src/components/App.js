import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchUsers } from "../ducks/users";
import UserCart from "./UserCart";
import Error from "./Error";
import Loader from "./Loader";

class App extends Component {
  componentDidMount = () => {
    const { fetchUsers } = this.props;
    fetchUsers();
  };

  render() {
    const { users, loading, error } = this.props;

    if (error) return <Error />;
    return (
      <Wrapper>
        <Header>Top 10 popular Github Users by Odessa</Header>

        {loading ? (
          <Loader />
        ) : (
          <UserList>
            {users.length &&
              users.map(user => (
                <UserListItem key={user.id}>
                  <UserCart user={user} />
                </UserListItem>
              ))}
          </UserList>
        )}
      </Wrapper>
    );
  }
}

export default connect(
  state => ({
    users: state.users.usersList,
    loading: state.users.loading,
    error: state.users.error
  }),
  { fetchUsers }
)(App);

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.h1`
  font-size: 24px;
`;

const UserList = styled.ul`
  padding: 0;
  list-style: none;
`;
const UserListItem = styled.li`
  margin: 0;
  padding: 0;
  border-top: 1px solid #e1e4e8;
`;
