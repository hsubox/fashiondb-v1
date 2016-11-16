import React, { Component } from 'react';

class InputTextField extends Component {
  render() {
    const { type, fieldName, placeholder, value, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={fieldName.toLowerCase()}>{fieldName}</label>
        <input
          type={type || "text"}
          className="form-control"
          id={fieldName.toLowerCase()}
          placeholder={placeholder || ""}
          value={value}
          onChange={(event) => onChange(fieldName.toLowerCase(), event.target.value)}
        />
      </div>
    );
  }
}

InputTextField.propTypes = {
  type: React.PropTypes.string,
  fieldName: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export { InputTextField };
