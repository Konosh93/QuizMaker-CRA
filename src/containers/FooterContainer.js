import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import * as actions from '../actions';


const mapStateToProps = state => {
  return {
    user: state.get('auth').user,
    width: state.get('device').width,
    scrollY: state.get('device').scrollY,
  }
}


const NavContainer = props => <Footer { ...props } />

NavContainer.propTypes = {
  user: propTypes.object,
  width: propTypes.number.isRequired,
  scrollY: propTypes.number.isRequired,
};
export default connect(mapStateToProps)(NavContainer);