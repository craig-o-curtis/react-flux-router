"use strict";

var React = require('react');
var TextInput = require('../../../common/textInput');

var AuthorForm = React.createClass({
  propTypes: {
    author: React.PropTypes.object.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object,
    handleSave: React.PropTypes.func.isRequired
  },

  render: function() {

    return (
      <div>
        <form>
          <h1>Manage Author</h1>

          <TextInput 
            name="firstName"
            label="First Name"
            inputWrapperClass="field"
            placeholder="Enter First Name"
            onChange={this.props.handleChange}
            errorClass="alert alert-danger"
            error={this.props.errors.firstName}
            value={this.props.author.firstName}
          />

          <br />
          <TextInput 
            name="lastName"
            label="Last Name"
            inputWrapperClass="field"
            placeholder="Enter Last Name"
            onChange={this.props.handleChange}
            errorClass="alert alert-warning"
            error={this.props.errors.lastName}
            value={this.props.author.lastName}
          />
          <br />



          <input type="submit" 
            value="Save" 
            className="btn btn-default" 
            onClick={this.props.handleSave} />
        </form>
      </div>
    );
  }
});

module.exports = AuthorForm;