import React from 'react';
import PropTypes from 'prop-types';
import style from './index.css';
import NavButton from '../NavButton';
import Popover from '../Popover';
import QuizNavPanel from '../QuizNavPanel';
import {Link} from 'react-router-dom';

const Header = ({ user, width, scrollY }) => {
  //below className="nav-item" should be corrected to nav-button in all nav-buttons
  return (
    <div className={`header ${scrollY > 90 && 'header--scrolled'}`} style={{width}}>
      <Link to="/"><img src={require('../../assets/logo.png')} className="header__logo" /></Link>
      <NavButton uri="/">Home</NavButton>
      <Popover className="nav-item"> 
        <div className="nav-button">Quizzes <i className="fa fa-caret-down" aria-hidden="true" /></div>
        <QuizNavPanel /> 
      </Popover>
      <NavButton uri="/auth"><i className="fa fa-user fa-2x" aria-hidden="true" /> {/*user? user.name : 'there!'*/}</NavButton>
    </div>
  )
};

Header.propTypes = {
  user: PropTypes.object,
  width: PropTypes.number.isRequired,
  scrollY: PropTypes.number.isRequired,
}
export default Header;
