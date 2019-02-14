import React from "react";
import ReactDOM from "react-dom";
import AppWithData from "./components/App";
import "./index.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const token = "1f10c6a17b6d7107b17984820c692187dc0c1ce6";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${token}`
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppWithData />
  </ApolloProvider>,
  document.getElementById("root")
);
