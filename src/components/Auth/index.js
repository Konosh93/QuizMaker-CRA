import React from 'react';
import propTypes from 'prop-types';
import LoginForm from '../LoginForm';
import Button from '../Button';
import AuthView from '../AuthView';
import SideView from '../SideView';
import style from './index.css';
import utils from './utils';


const Auth = props => {
  return (
    <div className="auth">
      <div className="auth__items">
        <div className="auth__item">
          <AuthView {...props} />
        </div>
        <div className="auth__item">
          <SideView />
        </div> 
      </div>
    </div>
  );
}





Auth.propTypes = {
  user: propTypes.object,
  errors: propTypes.object,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  history: propTypes.object.isRequired,
  login: propTypes.func.isRequired,
  signup: propTypes.func.isRequired,
  beginAuth: propTypes.func.isRequired,
};

export default Auth;
