const SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js'),
      SmallConstants = require('../constants/SmallConstants.js'),
      WebAPIUtils = require('../utils/WebAPIUtils.js'),
      RouteActionCreators = require('./RouteActionCreators.react.jsx');


let ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  signup(email, password, passwordConfirmation) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.SIGNUP_REQUEST,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
    });
    WebAPIUtils.signup(email, password, passwordConfirmation);
  },

  login(email, password) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });
    WebAPIUtils.login(email, password);
  },

  logout() {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
    RouteActionCreators.redirect('app');
  }

};
