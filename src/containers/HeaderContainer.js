import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../components/Header';
import * as actions from '../actions';


const mapStateToProps = state => {
  return {
    user: state.get('auth').user,
    width: state.get('device').width,
    scrollY: state.get('device').scrollY,
  }
}


const HeaderContainer = props => <Header { ...props } />

HeaderContainer.propTypes = {
  user: propTypes.object,
  width: propTypes.number.isRequired,
  scrollY: propTypes.number.isRequired,
};
export default connect(mapStateToProps)(HeaderContainer);