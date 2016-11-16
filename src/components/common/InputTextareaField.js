import React, { Component } from 'react';

class InputTextareaField extends Component {
  render() {
    const { fieldName, placeholder, value, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={fieldName}>{fieldName}</label>
        <textarea
          type="textfield"
          className="form-control"
          id={fieldName}
          placeholder={placeholder || ""}
          value={value}
          onChange={(event) => onChange(fieldName.toLowerCase(), event.target.value)}
        />
      </div>
    );
  }
}

InputTextareaField.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export { InputTextareaField };
