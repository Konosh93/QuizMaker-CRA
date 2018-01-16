import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../components/Header';
import * as actions from '../actions';


const mapStateToProps = state => {
  return {
    user: state.get('auth').user,
  }
}


const NavContainer = props => <Header { ...props } />

NavContainer.propTypes = {
  user: propTypes.object,
};
export default connect(mapStateToProps)(NavContainer);