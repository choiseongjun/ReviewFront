import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Service from "../pages/Service";
import "../css/style.scss";
import "../css/reset.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/service" component={Service} />
    </div>
  );
}

export default App;
