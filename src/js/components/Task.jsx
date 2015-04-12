const React = require('react');
const ActionCreator = require('../actions/TodoActionCreators');
const ListGroupItem = require('react-bootstrap/lib/ListGroupItem');
const Button = require('react-bootstrap/lib/Button');
const Input = require('react-bootstrap/lib/Input');

let Task = React.createClass({
  getDefaultProps() {
    return {
      task: {
        title: '',
        completed: false
      }
    };
  },

  onToggleComplete(task) {
    ActionCreator.toggleComplete(task);
  },

  removetask(task) {
    ActionCreator.removeTask(task);
  },

  render() {
    let {task} = this.props;
    return (
      <ListGroupItem className="task">
        <Input type="checkbox" ref="checkbox" checked={task.completed}
          onChange={this.onToggleComplete.bind(this, task)} label={task.title} />
          <Button bsStyle='danger' className='remove_task' onClick={this.removetask.bind(this, task)}>Remove Task</Button>
      </ListGroupItem>
    );
  }
});

module.exports = Task;
