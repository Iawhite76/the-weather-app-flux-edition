var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  addItem: function(task) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.ADD_TASK,
      // title: itemObject.title,
      // id: itemObject.id
      task: task
    });
  },

  clearList: function() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask: function(task) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.COMPLETE_TASK,
      task: task
    });
  }

};
