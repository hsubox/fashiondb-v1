import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ModelsList extends Component {
  render() {
    const { models } = this.props;
    return (
      <div id="modelsList">
        <ul>
          {models.map(model => {
            return <li key={model.uid}><Link to={`/models/edit/${model.uid}`}>{model.name}</Link></li>;
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

export default connect(mapStateToProps)(ModelsList);
