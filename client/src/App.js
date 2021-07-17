import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
