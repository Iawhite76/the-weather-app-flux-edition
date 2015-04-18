const React = require('react'),
      RouteHandler = require('react-router').RouteHandler,
      Header = require('../components/Header.react.jsx'),
      SessionStore = require('../stores/SessionStore.react.jsx'),
      RouteStore = require('../stores/RouteStore.react.jsx'),
      Rbs = require('react-bootstrap'),
      Col = Rbs.Col,
      Button = Rbs.Button,
      Jumbotron = Rbs.Jumbotron;

function getStateFromStores() {
  return {
    isLoggedIn: SessionStore.isLoggedIn(),
    email: SessionStore.getEmail()
  };
}

var SmallApp = React.createClass({

  getInitialState() {
    return getStateFromStores();
  },

  componentDidMount() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    SessionStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getStateFromStores());
  },

  render() {
    return (
      <div className="app container">
        <Header
          isLoggedIn={this.state.isLoggedIn}
          email={this.state.email} />
        <Col xs={12} sm={4}>  
          <RouteHandler/>
        </Col>
        <Col xs={12} sm={8}>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><Button bsStyle='primary'>Learn more</Button></p>
          </Jumbotron>
        </Col>
      </div>
    );
  }

});

module.exports = SmallApp;
