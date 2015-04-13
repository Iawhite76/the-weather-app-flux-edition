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
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.CLEAR_TASK_LIST
    });
  },

  toggleComplete: function(task) {
    if (task.completed) {
      AppDispatcher.handleViewAction({
        type: Constants.ActionTypes.TASK_UNDO_COMPLETE,
        task: task
      });
    } else {
      AppDispatcher.handleViewAction({
        type: Constants.ActionTypes.TASK_COMPLETE,
        task: task
      });
    }
  },

  removeTask: function(task) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.REMOVE_TASK,
      task: task
    })
  }

};
