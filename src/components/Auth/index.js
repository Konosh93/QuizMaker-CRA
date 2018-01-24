import React from 'react';
import propTypes from 'prop-types';
import LoginForm from '../LoginForm';
import Button from '../Button';
import AuthView from '../AuthView';
import SideView from '../SideView';
import style from './index.css';
import utils from './utils';


const Auth = props => {
  const sideView = props.width > 480 ? (
    <div className="auth__item">
      <SideView />
    </div> 
  ) : null;
  return (
    <div className="auth">
      <div className="auth__items">
        <div className="auth__item">
          <AuthView {...props} />
            <div className="auth__social">
              <a href={`https://www.linkedin.com/oauth/v2/authorization?`+
                       `response_type=code` +
                       `&client_id=81kdcib3urq1qj` +
                       `&redirect_uri=https%3A%2F%2Fquiz-survey.herokuapp.com%2Fapi%2Faccounts%2Fauth%2Flinkedin` +
                       `&state=987654321` +
                       `&scope=r_basicprofile`}>
              Linkedin</a>
            </div>
        </div>
        {sideView}
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
