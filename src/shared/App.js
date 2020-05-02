import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Navigation from "../containers/base/NaviContainer";
import GlobalStyles from "../lib/styles/GlobalStyles.js";
import Responsive from "../lib/styles/responsive";

function App() {
  return (
    <>
      <Navigation />
      <GlobalStyles />
      <Responsive />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
      </Switch>
    </>
  );
}

export default App;
