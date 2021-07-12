import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";

function App() {
  return (

      <div>
        <Nav />
            <Homepage />
      </div>

  );
}

export default App;
