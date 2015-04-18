const React = require('react'),
      Rbs = require('react-bootstrap'),
      Alert = Rbs.Alert;


let ErrorNotice = React.createClass({
  render() {
    return (
      <Alert bsStyle='danger'>
        <ul>
          {this.props.errors.map(function(error, index){
            return <li className="error-notice__error" key={"error-"+index}>{error}</li>;
          })}
        </ul>
      </Alert>
      );
  }
});

module.exports = ErrorNotice;
