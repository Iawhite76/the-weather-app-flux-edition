const React = require('react');
const Task = require('./Task.jsx');
const ListGroup = require('react-bootstrap/lib/ListGroup');
const Alert = require('react-bootstrap/lib/Alert');

let TaskList = React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    };
  },

  render() {
    let {tasks} = this.props;

    if (tasks.length === 0) {
      return (
        <Alert bsStyle="warning">
          <strong>You have no tasks</strong> Create some using the Add New button below.
        </Alert>
      );
    }

    let tasksArray = [];
    for (let aTask in tasks) {
      tasksArray.push(tasks[aTask]);
    }

    return (
      <form>
        <ListGroup>
          {tasksArray.map(task =>
            <Task task={task} />
          )}
        </ListGroup>
      </form>
    );
  }
});

module.exports = TaskList;
