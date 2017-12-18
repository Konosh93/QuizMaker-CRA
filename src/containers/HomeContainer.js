import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as actions from '../actions';


const mapStateToProps = state => ({
  user: state.get('auth').user,
  errors: state.get('auth').errors || {},
  isFetching: state.get('auth').isFetching || false,
  width: state.get('device').width,
  height: state.get('device').height,
});

const AuthContainer = props => <Home { ...props } />

AuthContainer.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  user: propTypes.object,
  history: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(AuthContainer);
