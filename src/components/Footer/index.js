import React from 'react';
import PropTypes from 'prop-types';
import style from './index.css';
import NavButton from '../NavButton';
import {Link} from 'react-router-dom';

const Footer = ({ user, width, scrollY }) => {
  return (
    <div className="footer">
      <div className="footer__items">
        <div className="footer__item"><Link to="/">About</Link></div>
        <div className="footer__item"><Link to="/quiz">This Project</Link></div>
        <div className="footer__item"><Link to="/auth">Authentication</Link></div>
      </div>
    </div>
  )
};

Footer.propTypes = {
  user: PropTypes.object,
  width: PropTypes.number.isRequired,
  scrollY: PropTypes.number.isRequired,
}
export default Footer;
