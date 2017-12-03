import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Navigation from '../components/Navigation';
import * as actions from '../actions';


const mapStateToProps = state => {
  return {
    user: state.get('auth').user,
  }
}


const NavContainer = props => <Navigation { ...props } />

NavContainer.propTypes = {
  user: propTypes.object,
};
export default connect(mapStateToProps)(NavContainer);