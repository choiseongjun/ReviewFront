import React from "react";
import { Route, Switch} from "react-router-dom";
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
import Community from "../pages/Community/Main";
import GrantService from "../pages/Admin/GrantService";
import Forbidden from './Forbidden';

const RouteIf = ({ role, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
          
        // 권한 체크 
        if (role ==='"[ROLE_ADMIN]"') { 
          
          return <Component {...props} role={role} />;
        }else{
          if (Component) {
            console.log('this site')
            // role을 컴포넌트에 전달 
            return <Forbidden />;
          }
        }
        return null;
      }}
    />
  );
};

function App() {
  
  const myRole = {
    ROLE_USER: sessionStorage.getItem("role"), //일반유저
    ROLE_ADMIN: sessionStorage.getItem("role") // 관리자
  };
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
        <Route exact path="/community" component={Community} />
        <RouteIf exact path="/grantservice" role={myRole.ROLE_ADMIN} component={GrantService} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
