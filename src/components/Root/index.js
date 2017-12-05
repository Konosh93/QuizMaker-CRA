import React from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
} from 'react-router-dom';
import propTypes from 'prop-types';
import style from './index.css';
import NavContainer from '../../containers/NavContainer';
import QuizContainer from '../../containers/QuizContainer';
import Profile from '../../components/Profile';
import AuthContainer from '../../containers/AuthContainer';

const Root = ({
  user,
  dispatch,
}) => {
  return (
    <Router>
      <div>
        <Route path="/" component={withRouter(NavContainer)} />
        <Route path="/quiz" component={withRouter(QuizContainer)} />
        <Route path="/profile" component={withRouter(Profile)} />
        <Route path="/auth" component={withRouter(AuthContainer)} />
      </div>
    </Router>
  );
};


Root.propTypes = {
  user: propTypes.object,
  dispatch: propTypes.func.isRequired,
};

export default Root;
