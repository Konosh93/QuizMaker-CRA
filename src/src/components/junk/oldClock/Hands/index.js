import React from 'react';
import propTypes from 'prop-types';
import style from './index.less';

const Hand = (props) => {
  const { time, hand } = props;
  const css = {
    transform: `rotate(${(6 * time) - 90}deg)`,
  };
  return (<span
    className={style[hand]} style={css}
  />);
};

const Hands = (props) => {
  const { time } = props;
  const timeInM = time / 60;
  const timeInH = (9 + (time / 60 / 60)) * 5;
  return (
    <div className={style.hands}>
      <Hand hand={'second'} time={time % 60} />
      <Hand hand={'minute'} time={timeInM % 60} />
      <Hand hand={'hour'} time={timeInH % 60} />
    </div>
  );
};

Hands.propTypes = {
  time: propTypes.number.isRequired,
};

Hand.propTypes = {
  time: propTypes.number.isRequired,
  hand: propTypes.string.isRequired,
};
export default Hands;
