import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { modelsFetch } from '../actions';

class ModelsList extends Component {
  componentWillMount() {
    this.props.modelsFetch();
  }

  render() {
    const { models } = this.props;
    return (
      <div id="modelsList">
        <ul>
          {models.map(model => {
            return <li key={model.uid}>{model.name}</li>;
          })}
          <li><Link to="/models/new">Add</Link></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const models = _.map(state.models, (val, uid) => {
    return { ...val, uid };
  });
  return { models };
};

export default connect(mapStateToProps, { modelsFetch })(ModelsList);
