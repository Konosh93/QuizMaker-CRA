import React from 'react';
import style from './index.less';

const digits = () => {
  const d = [];
  for (let i = 1; i <= 12; i++) {
    const top = 220 * (1 - Math.cos((i % 12) * 30 * (Math.PI / 180)));
    const left = 220 * (1 + Math.sin((i % 12) * 30 * (Math.PI / 180)));
    d.push(
      <span className={style.digit} key={i} style={{ top, left, float: 'left' }}> {i} </span>
    );
  }
  return d;
};

const Decoration = () => (
  <div className={style.decoration}>
    <span className={style.rect1} />
    <span className={style.rect2} />
    <span className={style.rect3} />
    <span className={style.rect4} />
  </div>
);

const Frame = () => (
  <div
    className={style.disc}
  >
    <Decoration />
    <div className={style.digits}>
      {digits()}
    </div>
  </div>
);


export default Frame;
