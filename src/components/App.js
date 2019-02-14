import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import Error from "./Error";
import Loader from "./Loader";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const usersQuery = gql`
  query {
    search(query: "location:odessa", first: 10, type: USER) {
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

const App = () => (
  <Query query={usersQuery}>
    {({ loading, error, data }) => {
      if (error) return <Error />;

      return (
        <Wrapper>
          <Header>Top 10 popular Github Users by Odessa</Header>

          {loading || !data ? (
            <Loader />
          ) : (
            <UserList>
              {data.search.edges.map(({ node: user }) => (
                <UserListItem key={user.id}>
                  <UserCard user={user} />
                </UserListItem>
              ))}
            </UserList>
          )}
        </Wrapper>
      );
    }}
  </Query>
);

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

export default App;
