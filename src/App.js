import React from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Oracle from "./components/Oracle";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Oracle />
          <Route path="/oracle">
            <Oracle />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
