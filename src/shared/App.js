import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home/Home.js';
import Service from '../pages/Service';
import Navigation from '../components/base/Navigation';
import GlobalStyles from '../GlobalStyles.js';
import Responsive from '../lib/styles/responsive';
import AuthModal from '../containers/auth/AuthModal.js';

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
