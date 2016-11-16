import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class AgenciesList extends Component {
  render() {
    const { agencies } = this.props;
    return (
      <div id="agenciesList">
        <ul>
          {agencies.map(agency => {
            return <li key={agency.uid}><Link to={`/agencies/edit/${agency.uid}`}>{agency.name}</Link></li>;
          })}
          <li><Link to="/agencies/new">Add</Link></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const agencies = _.map(state.agencies, (val, uid) => {
    return { ...val, uid };
  });
  return { agencies };
};

export default connect(mapStateToProps)(AgenciesList);
