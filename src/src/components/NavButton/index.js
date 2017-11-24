import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import style from './index.css';

const NavButton = (props) => (
  <div className="nav-item">
    <div className="nav-button">
      <Link to={props.uri}>
        <div>{props.text}</div>
      </Link>
    </div>
  </div>
);

NavButton.propTypes = {
  text: propTypes.string.isRequired,
  uri: propTypes.string.isRequired,
};

export default NavButton;
