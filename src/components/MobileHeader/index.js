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
    <div className={`mobile-header ${scrollY > 90 && 'mobile-header--scrolled'}`} style={{width}}>
      <Popover className="mobile-header__popover  mobile-header__item"> 
        <div className="mobile-header__button"><i className="fa fa-bars" aria-hidden="true" /></div>
        <QuizNavPanel width={width}/> 
      </Popover>
      <div className="mobile-header__logo mobile-header__item">
        <Link to="/"><img src={require('../../assets/logo.png')} /></Link>
      </div>
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
