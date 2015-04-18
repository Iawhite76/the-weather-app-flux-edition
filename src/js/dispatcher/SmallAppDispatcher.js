const SmallConstants = require('../constants/SmallConstants.js'),
      Dispatcher = require('flux').Dispatcher,
      assign = require('object-assign');

let PayloadSources = SmallConstants.PayloadSources;

ley SmallAppDispatcher = assign(new Dispatcher(), {

  handleServerAction(action) {
    let payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction(action) {
    let payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = SmallAppDispatcher;
