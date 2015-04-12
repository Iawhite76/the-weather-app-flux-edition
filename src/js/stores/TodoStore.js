const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _data = {};

// add private functions to modify data
function addItem(task) {
  // _data.push({title, completed});
  // console.log(`${title} and ${id}`);
  _data[task.id] = {id: task.id, title: task.title, completed: task.completed};
  // console.log(_data);
}

function toggleCompleted(taskId) {
  _data[taskId]['completed'] !== true ? _data[taskId]['completed'] = true : _data[taskId]['completed'] = false;
}

// Facebook style store creation.
let TodoStore = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      tasks: _data
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;
    let task = action.task;

    switch(action.type) {
      case Constants.ActionTypes.ADD_TASK:
        // let title = action.title.trim();
        // let id = action.id;
        // NOTE: if this action needs to wait on another store:
        // AppDispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (task.title !== '') {
          addItem(task);
          TodoStore.emitChange();
        }
        break;

      case Constants.ActionTypes.COMPLETE_TASK:
        toggleCompleted(task.id)
        TodoStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })

});

module.exports = TodoStore;
