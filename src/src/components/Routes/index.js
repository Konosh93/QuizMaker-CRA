import React from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
} from 'react-router-dom';
import propTypes from 'prop-types';
import style from './index.css';
import Home from '../../components/Home';
import Navigation from '../../components/Navigation';
import Quiz from '../../components/Quiz';
import Profile from '../../components/Profile';
import Auth from '../../components/Auth';

const Routes = ({
  user,
  dispatch,
}) => {
  return (
    <Router>
      <div className="routes">
        <Navigation user={user} className="routes__navigation"/>
        <div className="routes__items">
          <Route exact path="/" component={withRouter(Home)} />
          <Route path="/quiz" component={withRouter(Quiz)} />
          <Route exact path="/profile" component={withRouter(Profile)} />
          <Route exact path="/auth" component={withRouter(Auth)} />
        </div>
      </div>
    </Router>
  );
};


Routes.propTypes = {
  user: propTypes.object,
  dispatch: propTypes.func.isRequired,
};

export default Routes;
