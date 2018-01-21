import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import utils from './utils';

const SideView = props => {
  return (
    <div className="side-view">
      <p>Welcome to the login/registeration page</p>
      <p>Registeration is required in order to make quizes and save them to your account.</p>
      <p>Use this form to login or or sign up if you don't have an account</p>
    </div>
  );
}
SideView.propTypes = {
  user: propTypes.object,
  errors: propTypes.object,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  history: propTypes.object.isRequired,
  login: propTypes.func.isRequired,
  signup: propTypes.func.isRequired,
  beginAuth: propTypes.func.isRequired,
};

export default SideView;
