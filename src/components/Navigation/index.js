import React from 'react';
import PropTypes from 'prop-types';
import style from './index.css';
import NavButton from '../NavButton';

const Navigation = ({ user }) => (
  <div className="navigation">
    <NavButton uri="/"><i className="fa fa-home fa-2x" aria-hidden="true" /></NavButton>
    <NavButton uri="/quiz"><i className="fa fa-university fa-2x" aria-hidden="true"/></NavButton>
    <NavButton uri="/auth"><i className="fa fa-user fa-2x" aria-hidden="true" /> {/*user? user.name : 'there!'*/}</NavButton>
  </div>
);

Navigation.propTypes = {
  user: PropTypes.object,
}
export default Navigation;
