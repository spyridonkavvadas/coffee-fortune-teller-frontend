import React from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Oracle from "./components/Oracle";

function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route exact path="/">
          <Main />
          </Route>
          <Route path="/oracle">
            <Oracle />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
