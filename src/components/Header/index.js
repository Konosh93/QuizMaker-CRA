import React from 'react';
import PropTypes from 'prop-types';
import style from './index.css';
import NavButton from '../NavButton';
import {Link} from 'react-router-dom';

const Header = ({ user, width, scrollY }) => {
  return (
    <div className={`header ${scrollY > 90 && 'header--scrolled'}`} style={{width}}>
      <Link to="/"><img src={require('../../assets/logo.png')} className="header__logo" /></Link>
      <NavButton uri="/">Home</NavButton>
      <NavButton uri="/quiz">Quizzes</NavButton>
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
