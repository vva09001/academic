import React, { Component } from "react";
import "./style/index.scss";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";

import createStore from "./store";
import history from "./store/services/history";

import LoginPage from "./view/LoginPage";
import LoggedPage from "./view/LoggedPage";

const store = createStore();

// store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/academic" component={LoggedPage} />
        </Switch>
      </Router>
    );
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
