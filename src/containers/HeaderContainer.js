import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../components/Header';
import * as actions from '../actions';


const mapStateToProps = state => {
  return {
    user: state.get('auth').user,
    width: state.get('device').width,
  }
}


const NavContainer = props => <Header { ...props } />

NavContainer.propTypes = {
  user: propTypes.object,
  width: propTypes.number.isRequired,
};
export default connect(mapStateToProps)(NavContainer);