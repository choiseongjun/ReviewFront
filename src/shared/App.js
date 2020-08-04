import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../pages/Service";
import ServiceDetail from "../pages/ServiceDetail";
import Share from "../pages/Share";
import Navigation from "../containers/base/NaviContainer";
import Footer from "../components/base/Footer";
import GlobalStyles from "../lib/styles/GlobalStyles.js";
import Responsive from "../lib/styles/responsive";
import Register from "../pages/Service/Register";
import "../lib/styles/fontawesome";
import ShareFinish from "../pages/ShareFinish";
import GrantService from "../pages/Admin/GrantService";

function App() {
  return (
    <>
      <Navigation />
      <GlobalStyles />
      <Responsive />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Service} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/serviceDetail/:id" component={ServiceDetail} />
        <Route exact path="/share" component={Share} />
        <Route exact path="/shareFinish" component={ShareFinish} />
        <Route exact path="/grantservice" component={GrantService} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
