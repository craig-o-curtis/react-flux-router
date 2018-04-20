"use strict";

var React = require('react');

var TextInput = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    inputWrapperClass: React.PropTypes.string,
    inputClass: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,    
    errorClass: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    value: React.PropTypes.string
  },

  render: function() {
    /* Logic for wrapper class */
    var wrapperClass = 'form-group';

    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += ' ' + 'has-error';
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className={this.props.inputWrapperClass}>
          <input type="text"
            id={this.props.name}
            name={this.props.name}
            ref={this.props.name}
            className="form-control"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
        {this.props.error && 
          <div className={this.props.errorClass}>{this.props.error}</div>
        }
      </div>
    );
  }
  
});

module.exports = TextInput;