import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import style from './index.css';

const NavButton = ({
  children,
  uri,
}) => (
  <div className="nav-item">
  <Link to={uri}>
    <div className="nav-button">
      {children}
    </div>
    </Link>
  </div>
);

NavButton.propTypes = {
  children: propTypes.node.isRequired,
  uri: propTypes.string.isRequired,
};

export default NavButton;
