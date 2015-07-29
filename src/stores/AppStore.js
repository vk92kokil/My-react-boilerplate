/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import Reflux from 'reflux';
import Actions from '../actions/AppActions';

var AppStore = Reflux.createStore({
listenables: [Actions],

  testAction: function(name){
    this.trigger(name);
  }
});

export default AppStore;
