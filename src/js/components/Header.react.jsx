const React = require('react'),
      Router = require('react-router'),
      Link = Router.Link,
      ReactPropTypes = React.PropTypes,
      Nav = require('react-bootstrap').Nav,
      Navbar = require('react-bootstrap').Navbar,
      NavItem = require('react-bootstrap').NavItem,
      MenuItem = require('react-bootstrap').MenuItem,
      DropdownButton = require('react-bootstrap').DropdownButton,
      SessionActionCreators = require('../actions/SessionActionCreators.react.jsx');

let Header = React.createClass({

  propTypes: {
    isLoggedIn: ReactPropTypes.bool,
    email: ReactPropTypes.string
  },

  logout: function(e) {
    e.preventDefault();
    SessionActionCreators.logout();
  },

  render: function() {

    let rightNav = this.props.isLoggedIn ? (
      <Nav>

        <DropdownButton eventKey={1} title={this.props.email}>
          <MenuItem eventKey='1' href='#' onClick={this.logout}>Logout</MenuItem>
        </DropdownButton>

        <NavItem eventKey='2' href='#/story/new'>New Story</NavItem>

      </Nav>
    ) : (
      <Nav>

        <NavItem eventKey={1} href='#/login'>Login</NavItem>
        <NavItem eventKey={2} href='#/signup'>Sign up</NavItem>

      </Nav>
      );

    return (
      
      <Navbar brand='The Weather App'>
        {rightNav}
      </Navbar>
     
    );
  }
});

module.exports = Header;
