const SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js'),
      SmallConstants = require('../constants/SmallConstants.js'),
      SessionStore = require('../stores/SessionStore.react.jsx'),
      StoryStore = require('../stores/StoryStore.react.jsx'),
      EventEmitter = require('events').EventEmitter,
      assign = require('object-assign');

const Router = require('react-router'),
      routes = require('../router.jsx');

let router = Router.create({
  routes: routes,
  location: null // Router.HistoryLocation
});

let ActionTypes = SmallConstants.ActionTypes,
    CHANGE_EVENT = 'change';

let RouteStore = assign({}, EventEmitter.prototype, {

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener() {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getRouter() {
    return router;
  },

  redirectHome() {
    router.transitionTo('app');
  }
});

RouteStore.dispatchToken = SmallAppDispatcher.register(function(payload) {
  SmallAppDispatcher.waitFor([
    SessionStore.dispatchToken,
    StoryStore.dispatchToken
  ]);

  let action = payload.action;

  switch(action.type) {

    case ActionTypes.REDIRECT:
      router.transitionTo(action.route);
      break;

    case ActionTypes.LOGIN_RESPONSE:
      if (SessionStore.isLoggedIn()) {
        router.transitionTo('app');
      }
      break;

    case ActionTypes.RECEIVE_CREATED_STORY:
      router.transitionTo('app');
      break;

    default:
  }

  return true;
});

module.exports = RouteStore;
