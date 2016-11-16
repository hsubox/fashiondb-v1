import React, { Component } from 'react';
import { connect } from 'react-redux';
import { agencyFormUpdate, agencyCreate } from '../actions';
import { InputTextField, InputSelectionField } from './common'
import cities from '../data/cities.js';
import agency_types from '../data/agency_types.js';

class AgencyAdd extends Component {
  onButtonPress(event) {
    event.preventDefault();
    const {
      name,
      website,
      logo,
      city,
      type
    } = this.props;
    if (name !== '') {
      this.props.agencyCreate({
        name,
        website,
        logo,
        city,
        type
      });
    }
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
        <button className="btn btn-default" onClick={this.onButtonPress.bind(this)}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = ({ agencyForm }) => {
  return agencyForm;
};

export default connect(mapStateToProps, {
  agencyFormUpdate,
  agencyCreate
})(AgencyAdd);
