import React from 'react';
import PropTypes from 'prop-types';
import style from './index.css';
import NavButton from '../NavButton';
import {Link} from 'react-router-dom';

const Header = ({ user }) => (
  <div className="header">
    <Link to="/"><img src={require('../../assets/logo.png')} className="header__logo" /></Link>
    <NavButton uri="/">Home</NavButton>
    <NavButton uri="/quiz">Quizzes</NavButton>
    <NavButton uri="/auth"><i className="fa fa-user fa-2x" aria-hidden="true" /> {/*user? user.name : 'there!'*/}</NavButton>
  </div>
);

Header.propTypes = {
  user: PropTypes.object,
}
export default Header;
