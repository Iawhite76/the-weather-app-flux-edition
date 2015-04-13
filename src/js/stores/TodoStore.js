const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _data = {};

// add private functions to modify data
function addItem(task) {
  _data[task.id] = {id: task.id, title: task.title, completed: task.completed};
}

function update(id, updates) {
  _data[id] = assign({}, _data[id], updates);
  console.log(_data);
}

function updateAll(updates) {
  for (var key in _data) {
    if (_data[key].completed === true) delete _data[key];
  }
}

function destroy(id) {
  delete _data[id];
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
    let task = payload.action.task;

    switch(payload.action.type) {
      case Constants.ActionTypes.ADD_TASK:
        let title = task.title.trim();
        // NOTE: if this action needs to wait on another store:
        // AppDispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (task.title !== '') {
          addItem(task);
          TodoStore.emitChange();
        }
        break;

      case Constants.ActionTypes.TASK_UNDO_COMPLETE:
        update(task.id, {completed: false});
        TodoStore.emitChange();
        break;

      case Constants.ActionTypes.TASK_COMPLETE:
        update(task.id, {completed: true});
        TodoStore.emitChange();
        break;

      case Constants.ActionTypes.REMOVE_TASK:
        destroy(task.id);
        TodoStore.emitChange();
        break;

      case Constants.ActionTypes.CLEAR_TASK_LIST:
        updateAll({completed: true});
        TodoStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })

});

module.exports = TodoStore;
