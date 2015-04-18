const React = require('react'),
      SmallAppDispatcher = require('../../dispatcher/SmallAppDispatcher.js'),
      SmallConstants = require('../../constants/SmallConstants.js'),
      WebAPIUtils = require('../../utils/WebAPIUtils.js'),
      SessionStore = require('../../stores/SessionStore.react.jsx'),
      StoryActionCreators = require('../../actions/StoryActionCreators.react.jsx'),
      RouteActionCreators = require('../../actions/RouteActionCreators.react.jsx'),
      Rbs = require('react-bootstrap'),
      Row = Rbs.Row,
      Col = Rbs.Col,
      Input = Rbs.Input,
      Button = Rbs.Button;

let StoryNew = React.createClass({

  componentDidMount: function() {
    if (!SessionStore.isLoggedIn()) {
      RouteActionCreators.redirect('app');
    }
  },

  _onSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.title.getInputDOMNode().value;
    var body = this.refs.body.getInputDOMNode().value;
    StoryActionCreators.createStory(title, body);
  },

  render: function() {
    return (
      <Col xs={12}>
       <form className='form-horizontal' onSubmit={this._onSubmit}>
         <Input type='text' placeholder="Title" name="title" ref="title" />
         <Input type='textarea' rows="10" placeholder="Your story..." name="body" ref="body" />
         <Button type='submit'>Create</Button>
       </form>
      </Col>
     );
  }

});

module.exports = StoryNew;
