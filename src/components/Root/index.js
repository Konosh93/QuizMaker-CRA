import React from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
} from 'react-router-dom';
import propTypes from 'prop-types';
import style from './index.css';
import HeaderContainer from '../../containers/HeaderContainer';
import QuizContainer from '../../containers/QuizContainer';
import Profile from '../../components/Profile';
import AuthContainer from '../../containers/AuthContainer';
import HomeContainer from '../../containers/HomeContainer';

const Root = ({
  user,
  dispatch,
}) => {
  return (
    <Router>
      <div>
        <Route path="/" component={withRouter(HeaderContainer)} />
        <Route exact path="/" component={withRouter(HomeContainer)} />
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
