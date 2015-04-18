const  React = require('react'),
       SessionActionCreators = require('../../actions/SessionActionCreators.react.jsx'),
       SessionStore = require('../../stores/SessionStore.react.jsx'),
       ErrorNotice = require('../../components/common/ErrorNotice.react.jsx'),
       Rbs = require('react-bootstrap'),
       Row = Rbs.Row,
       Col = Rbs.Col,
       Input = Rbs.Input,
       Button = Rbs.Button;

let SignupPage = React.createClass({

  getInitialState() {
    return { errors: [] };
  },

  componentDidMount() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    SessionStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({ errors: SessionStore.getErrors() });
  },

  _onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: [] });
    let email = this.refs.email.getInputDOMNode().value,
        username = this.refs.username.getInputDOMNode().value,
        password = this.refs.password.getInputDOMNode().value,
        passwordConfirmation = this.refs.passwordConfirmation.getInputDOMNode().value;
    if (password !== passwordConfirmation) {
      this.setState({ errors: ['Password and password confirmation should match']});
    } else {
      SessionActionCreators.signup(email, username, password, passwordConfirmation);
    }
  },

  render() {
    let errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <div>
        {errors}

        <Row>
          <Col xs={10} xsOffset={1} sm={6} smOffset={3}>
            <form className='form-horizontal' onSubmit={this._onSubmit}>
              <Input type='email' placeholder="Email" name="email" ref="email" required />
              <Input type='text' placeholder="Username" name="username" ref="username" required />
              <Input type='password' placeholder="Password" name="password" ref="password" required />
              <Input type='password' placeholder="Re-type Password" name="password-confirmation" ref="passwordConfirmation" required />
              <Button bsStyle='success' type='submit'>Signup</Button>
            </form>
          </Col>
        </Row>

      </div>
    );
  }
});

module.exports = SignupPage;
