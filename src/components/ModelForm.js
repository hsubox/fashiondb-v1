import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modelFormUpdate, modelCreate } from '../actions';
import { InputTextField, InputSelectionField, InputTextareaField } from './common'
import races from '../data/races.js';
import nationalities from '../data/nationalities.js';
import genders from '../data/genders.js';
const agencies = [{
  "name": "N/A",
  "code": "N/A"
}];

class ModelForm extends Component {
  onButtonPress(event) {
    event.preventDefault();
    const {
      name,
      gender,
      race,
      birthdate,
      nationality,
      agencyMother,
      agencyNewYork,
      agencyLondon,
      agencyMilan,
      agencyParis,
      bio,
      instagram
    } = this.props;
    if (name !== '') {
      this.props.modelCreate({
        name,
        gender,
        race,
        birthdate,
        nationality,
        agencyMother,
        agencyNewYork,
        agencyLondon,
        agencyMilan,
        agencyParis,
        bio,
        instagram
      });
    }
  }

  render() {
    const {
      name,
      gender,
      race,
      birthdate,
      nationality,
      agencyMother,
      agencyNewYork,
      agencyLondon,
      agencyMilan,
      agencyParis,
      bio,
      instagram,
      modelFormUpdate
    } = this.props;
    return (
      <div className="model-form">
        <form>
          <InputTextField fieldName="Name" placeholder="Karlie Kloss" value={name} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Gender" options={genders} value={gender} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Race" options={races} value={race} onChange={modelFormUpdate} />
          <InputTextField type="date" fieldName="Birthdate" value={birthdate} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Nationality" options={nationalities} value={nationality} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Mother Agency" dbName="agencyMother" options={agencies} value={agencyMother} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="New York Agency" dbName="agencyNewYork" options={agencies} value={agencyNewYork} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="London Agency" dbName="agencyLondon" options={agencies} value={agencyLondon} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Milan Agency" dbName="agencyMilan" options={agencies} value={agencyMilan} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Paris Agency" dbName="agencyParis" options={agencies} value={agencyParis} onChange={modelFormUpdate} />
          <InputTextareaField fieldName="Bio" value={bio} onChange={modelFormUpdate} />
          <InputTextField type="url" fieldName="Instagram" placeholder="https://www.instagram.com/username/" value={instagram} onChange={modelFormUpdate} />
          <button className="btn btn-default" onClick={this.onButtonPress.bind(this)}>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ modelForm }) => {
  return modelForm;
};

export default connect(mapStateToProps, {
  modelFormUpdate,
  modelCreate
})(ModelForm);
