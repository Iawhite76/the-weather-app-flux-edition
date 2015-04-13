const keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    ADD_TASK: null,
    COMPLETE_TASK: null,
    TASK_COMPLETE: null,
    TASK_UNDO_COMPLETE: null,
    REMOVE_TASK: null,
    CLEAR_TASK_LIST: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
