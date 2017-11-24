import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
} from 'react-router-dom';
import style from './index.css';
import utils from './utils';
import QuizNavigation from '../QuizNavigation';
import QuizTaker from '../QuizTaker';
import QuizMaker from '../QuizMaker';



const Quiz = ({ match }) => {
  return (
      <div className="quiz">
        <QuizNavigation match={match}/>
          <Route exact path={`${match.url}/take`} component={QuizTaker} />
          <Route exact path={`${match.url}/make`} component={QuizMaker} />
        </div>
  );
}

Quiz.propTypes = {
  match: propTypes.object,
};
export default Quiz;
