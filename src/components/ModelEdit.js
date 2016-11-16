import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modelFormUpdate, modelEdit, modelDelete } from '../actions';
import { InputTextField, InputSelectionField, InputTextareaField } from './common'
import races from '../data/races.js';
import nationalities from '../data/nationalities.js';
import genders from '../data/genders.js';

class ModelEdit extends Component {
  componentWillMount() {
    _.each(this.props.models[this.props.params.modelId], (value, prop) => {
      this.props.modelFormUpdate(prop, value);
    });
  }

  onSavePress(event) {
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
      this.props.modelEdit({
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
      }, this.props.params.modelId);
    }
  }

  onDeletePress(event) {
    event.preventDefault();
    this.props.modelDelete(this.props.params.modelId);
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
      modelFormUpdate,
      agencies_mod
    } = this.props;
    return (
      <div className="model-form">
        <form>
          <InputTextField fieldName="Name" placeholder="Karlie Kloss" value={name} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Gender" options={genders} value={gender} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Race" options={races} value={race} onChange={modelFormUpdate} />
          <InputTextField type="date" fieldName="Birthdate" value={birthdate} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Nationality" options={nationalities} value={nationality} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Mother Agency" dbName="agencyMother" options={agencies_mod} value={agencyMother} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="New York Agency" dbName="agencyNewYork" options={agencies_mod} value={agencyNewYork} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="London Agency" dbName="agencyLondon" options={agencies_mod} value={agencyLondon} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Milan Agency" dbName="agencyMilan" options={agencies_mod} value={agencyMilan} onChange={modelFormUpdate} />
          <InputSelectionField fieldName="Paris Agency" dbName="agencyParis" options={agencies_mod} value={agencyParis} onChange={modelFormUpdate} />
          <InputTextareaField fieldName="Bio" value={bio} onChange={modelFormUpdate} />
          <InputTextField type="url" fieldName="Instagram" placeholder="https://www.instagram.com/username/" value={instagram} onChange={modelFormUpdate} />
        </form>
        <button className="btn btn-default" onClick={this.onSavePress.bind(this)}>Save</button>
        <button className="btn btn-danger" onClick={this.onDeletePress.bind(this)}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = ({ modelForm, models, agencies }) => {
  const agencies_mod = _.map(agencies, (val, uid) => {
    return { name: val.name, code: uid };
  }).concat({
    name: 'N/A',
    code: 'N/A'
  });
  return {
    ...modelForm,
    models,
    agencies_mod
  };
};

export default connect(mapStateToProps, {
  modelFormUpdate,
  modelEdit,
  modelDelete
})(ModelEdit);
