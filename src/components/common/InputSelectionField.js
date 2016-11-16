import React, { Component } from 'react';

class InputSelectionField extends Component {
  displayOptions(choices) {
    return choices.map(choice => {
      return <option key={choice.code}
      value={choice.code}>{choice.name}</option>;
    });
  }

  render() {
    const { fieldName, dbName, options, value, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={fieldName.toLowerCase()}>{fieldName}</label>
        <select
          className="form-control"
          id={fieldName.toLowerCase()}
          value={value}
          onChange={(event) => onChange(dbName || fieldName.toLowerCase(), event.target.value)}
        >
          {this.displayOptions(options)};
        </select>
      </div>
    );
  }
}

InputSelectionField.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  dbName: React.PropTypes.string,
  options: React.PropTypes.array.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export { InputSelectionField };
