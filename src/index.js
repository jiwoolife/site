import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Result } from "./Result";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
ReactDOM.render(
  <Router basename="/cherish">
    <Route path="/" exact>
      <App />
      {/* <Redirect to="/result" /> */}
    </Route>
    <Route path="/result">
      <Result />
    </Route>
  </Router>,
  document.getElementById("root")
);
