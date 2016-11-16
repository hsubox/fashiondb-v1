import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { agencyFormUpdate, agencyEdit, agencyDelete } from '../actions';
import { InputTextField, InputSelectionField } from './common'
import cities from '../data/cities.js';
import agency_types from '../data/agency_types.js';

class AgencyAdd extends Component {
  componentWillMount() {
    _.each(this.props.agencies[this.props.params.agencyId], (value, prop) => {
      this.props.agencyFormUpdate(prop, value);
    });
  }

  onSavePress(event) {
    event.preventDefault();
    const {
      name,
      website,
      logo,
      city,
      type
    } = this.props;
    if (name !== '') {
      this.props.agencyEdit({
        name,
        website,
        logo,
        city,
        type
      }, this.props.params.agencyId);
    }
  }

  onDeletePress(event) {
    event.preventDefault();
    this.props.agencyDelete(this.props.params.agencyId);
  }

  render() {
    const {
      name,
      website,
      logo,
      city,
      type,
      agencyFormUpdate
    } = this.props;
    return (
      <div className="agency-form">
        <form>
          <InputTextField fieldName="Name" placeholder="Agency Name" value={name} onChange={agencyFormUpdate} />
          <InputTextField type="url" fieldName="Website" placeholder="URL to website" value={website} onChange={agencyFormUpdate} />
          <InputTextField type="url" fieldName="Logo" placeholder="URL to logo" value={logo} onChange={agencyFormUpdate} />
          <InputSelectionField fieldName="City" options={cities} value={city} onChange={agencyFormUpdate} />
          <InputSelectionField fieldName="Type" options={agency_types} value={type} onChange={agencyFormUpdate} />
        </form>
        <button className="btn btn-default" onClick={this.onSavePress.bind(this)}>Save</button>
        <button className="btn btn-danger" onClick={this.onDeletePress.bind(this)}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = ({ agencyForm, agencies }) => {
  const {
    name,
    website,
    logo,
    city,
    type
  } = agencyForm;
  return {
    name,
    website,
    logo,
    city,
    type,
    agencies
  };
};

export default connect(mapStateToProps, {
  agencyFormUpdate,
  agencyEdit,
  agencyDelete
})(AgencyAdd);
