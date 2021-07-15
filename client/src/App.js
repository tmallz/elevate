import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
