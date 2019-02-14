import React, { Component } from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import Error from "./Error";
import Loader from "./Loader";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {
  render() {
    const { error, loading, search: users } = this.props.data;

    if (error) return <Error />;
    return (
      <Wrapper>
        <Header>Top 10 popular Github Users by Odessa</Header>

        {loading ? (
          <Loader />
        ) : (
          <UserList>
            {users.edges.length &&
              users.edges.map(({ node: user }) => (
                <UserListItem key={user.id}>
                  <UserCard user={user} />
                </UserListItem>
              ))}
          </UserList>
        )}
      </Wrapper>
    );
  }
}

const repoQuery = gql`
  query($name: String!) {
    search(query: $name, first: 10, type: USER) {
      edges {
        node {
          ... on User {
            id
            name
            login
            email
            location
            avatarUrl
            bio
            url
          }
        }
      }
    }
  }
`;

const AppWithData = graphql(repoQuery, {
  options: {
    variables: {
      name: "location:odessa"
    }
  }
})(App);

export default AppWithData;

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
