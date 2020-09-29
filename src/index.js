import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Result } from "./Result";
import {
  HashRouter as Router,
  Route,
  Link,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
ReactDOM.render(
  <Router basename="/">
    <Route exact path="/">
      <App />
      {/* <Redirect to="/result" /> */}
    </Route>
    <Route path="/result">
      <Result />
    </Route>
  </Router>,
  document.getElementById("root")
);
