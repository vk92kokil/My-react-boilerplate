/**
 * Created by vikramaditya on 7/29/15.
 */
import React from 'react';
import Router from 'react-router';
import mui from 'material-ui';
import Reflux from 'reflux';
import AppStore from '../../stores/AppStore';
import Actions from '../../actions/AppActions';
var ThemeManager = new mui.Styles.ThemeManager();
import customTheme from '../../lib/MUI_Theme/custom-theme'
var {AppBar} = mui;
class HomePage extends React.Component{

  constructor(){
    super();
  }
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
  changePage(){
    this.context.router.transitionTo('/anypage');
  }
  handleChange(){

  }
  render(){
    ThemeManager.setTheme(customTheme); //comment this and see.
    return(
      <div>
        <AppBar title='Home'/>
        <h3>HOMEPAGE</h3>
        <input type = 'text' value = '' onChange = {this.handleChange}/>
        <button onClick={this.changePage.bind(this)}>Click HERE</button>
      </div>
    )
  }
}
HomePage.childContextTypes = {
  muiTheme: React.PropTypes.object,
  router: React.PropTypes.func
};
HomePage.contextTypes = {
  router: React.PropTypes.func
};
export default HomePage;
