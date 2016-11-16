import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modelUpdate, modelCreate } from '../actions';
import races from '../data/races.js';
import nationalities from '../data/nationalities.js';
import genders from '../data/genders.js'

class ModelForm extends Component {

  displayOptions(choices) {
    return choices.map(choice => {
      return <option key={choice.code}
      value={choice.code}>{choice.name}</option>;
    });
  }

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
      modelUpdate
    } = this.props;
    return (
      <div className="model-form">
        <form>
          <div className="form-group">
            <label htmlFor="model-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="model-name"
              placeholder="Karlie Kloss"
              value={name}
              onChange={(event) => modelUpdate('name', event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="model-gender">Gender</label>
            <select
              className="form-control"
              id="model-gender"
              value={gender}
              onChange={(event) => modelUpdate('gender', event.target.value)}
            >
              {this.displayOptions(genders)};
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model-race">Race</label>
            <select
              className="form-control"
              id="model-race"
              value={race}
              onChange={(event) => modelUpdate('race', event.target.value)}
            >
              {this.displayOptions(races)};
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model-birthdate">Birthdate</label>
            <input
              type="date"
              className="form-control"
              id="model-name"
              value={birthdate}
              onChange={(event) => modelUpdate('birthdate', event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="model-nationality">Nationality</label>
            <select
              className="form-control"
              id="model-nationality"
              value={nationality}
              onChange={(event) => modelUpdate('nationality', event.target.value)}
            >
              {this.displayOptions(nationalities)};
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model-agency-mother">Mother Agency</label>
            <select
              className="form-control"
              id="model-agency-mother"
              value={agencyMother}
              onChange={(event) => modelUpdate('agencyMother', event.target.value)}
            >
              {this.displayOptions([{
                "name": "N/A",
                "code": "N/A"
              }])};
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model-agency-new-york">New York Agency</label>
            <select
              className="form-control"
              id="model-agency-new-york"
              value={agencyNewYork}
              onChange={(event) => modelUpdate('agencyNewYork', event.target.value)}
            >
              {this.displayOptions([{
                "name": "N/A",
                "code": "N/A"
              }])};
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model-agency-london">London Agency</label>
            <select
              className="form-control"
              id="model-agency-london"
              value={agencyLondon}
              onChange={(event) => modelUpdate('agencyLondon', event.target.value)}
            >
              {this.displayOptions([{
                "name": "N/A",
                "code": "N/A"
              }])};
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model-agency-milan">Milan Agency</label>
            <select
              className="form-control"
              id="model-agency-milan"
              value={agencyMilan}
              onChange={(event) => modelUpdate('agencyMilan', event.target.value)}
            >
              {this.displayOptions([{
                "name": "N/A",
                "code": "N/A"
              }])};
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model-agency-paris">Paris Agency</label>
            <select
              className="form-control"
              id="model-agency-paris"
              value={agencyParis}
              onChange={(event) => modelUpdate('agencyParis', event.target.value)}
            >
              {this.displayOptions([{
                "name": "N/A",
                "code": "N/A"
              }])};
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model-bio">Bio</label>
            <textarea
              type="textfield"
              className="form-control"
              id="model-bio"
              value={bio}
              onChange={(event) => modelUpdate('bio', event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="model-instagram">Instagram</label>
            <input
              type="url"
              className="form-control"
              id="model-instagram"
              value={instagram}
              onChange={(event) => modelUpdate('instagram', event.target.value)}
            />
          </div>
          <button className="btn btn-default" onClick={this.onButtonPress.bind(this)}>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ modelForm }) => {
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
  } = modelForm;
  return {
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
  };
};

export default connect(mapStateToProps, {
  modelUpdate,
  modelCreate
})(ModelForm);
