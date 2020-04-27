import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Service from "../pages/Service";
import Login from "../pages/Login";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/login" component={Login} />
    </>
  );
}

export default App;
