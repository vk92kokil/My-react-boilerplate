/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

/* eslint-disable */
import React, { PropTypes } from 'react';
import Router from 'react-router';
import styles from './App.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
var RouteHandler = Router.RouteHandler;
@withStyles(styles)
class App {
  render() {
    return (
      <div>
          <RouteHandler/>
      </div>
    );
  }
}
export default App;
