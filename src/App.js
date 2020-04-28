import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Service from './pages/Service';
import Navigation from './components/base/Navigation';
import GlobalStyles from './GlobalStyles';
import Responsive from './lib/styles/responsive';
import AuthModal from './containers/auth/AuthModal';

function App() {
  return (
    <>
      <GlobalStyles />
      <Responsive />
      <Navigation>
        <AuthModal />
      </Navigation>
      <Route exact path="/" component={Home} />
      <Route exact path="/service" component={Service} />
    </>
  );
}

export default App;
