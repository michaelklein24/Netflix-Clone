import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import "./App.css";

import UserContextProvider from "./store/user-context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const token = localStorage.getItem("id_token");

function App() {
  return (
    <Fragment>
      {!token ? (
        <ApolloProvider client={client}>
          <UserContextProvider>
            <Switch>
              <Route path="/" exact>
                <LandingPage />
              </Route>
              <Route path="/login" exact>
                <LogIn />
              </Route>
              <Route path="/signup" exact>
                <SignUp />
              </Route>
            </Switch>
          </UserContextProvider>
        </ApolloProvider>
      ) : (
        <ApolloProvider client={client}>
          <HomePage />
        </ApolloProvider>
      )}
    </Fragment>
  );
}

export default App;
