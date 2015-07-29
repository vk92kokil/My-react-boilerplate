/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
/* eslint-disable */
import 'babel/polyfill';
import React from 'react';
import Router from 'react-router';
var Redirect = Router.Redirect;
import FastClick from 'fastclick';

import App from './components/App';
import HomePage from './components/HomePage';
import NotFoundHandler from './components/NotFoundPage';

/* react tap event plugin !important for material ui*/
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route handler={App} path="/">
    {/*<DefaultRoute name="home" handler={CrmApp} />*/}
    <Route path='/crm' handler={HomePage}/>
    <Redirect from='/' to='/crm'/>
    <NotFoundRoute handler={NotFoundHandler}/>
  </Route>
);

function run () {
  Router.run(routes, Router.HistoryLocation , function(Handler,state) {
      React.render(<Handler/>, document.getElementById('app'));
  });
};

Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }).then(() => FastClick.attach(document.body))
]).then(run);
