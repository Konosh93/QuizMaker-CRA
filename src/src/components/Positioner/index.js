import React from 'react';
import propTypes from 'prop-types';


const Positioner = ({ width, height, children}) => {
  const navigatorHeight = 60;

  let inlineStyle= {
    width: width,
    height: (height - navigatorHeight)*0.9,
    margin: '0 auto',
    fontSize: '16px',
    lineHeight: '60px',
    position: 'absolute',
    top: navigatorHeight + 10,
    left: 0,
  }
  let childStyle ={
    width: width > 640 ? 320 : '90%',
    height: '90%',
    position: 'absolute',
    top:'50%',
    left: '50%',
    transform: `translate(-50%,-50%)`,
  }
  if (width > 640 ) {
    inlineStyle= {
      width:width,
      height: (height - navigatorHeight) * 0.9,
      margin:'0 auto',
      fontSize: '16px',
      lineHeight: '40px',
      position: 'absolute',
      top: navigatorHeight + 10,
    }
  }
  console.log(inlineStyle, height)
 return (<div style={inlineStyle}>
           <div style={childStyle}>{children}</div>
         </div>);
}

Positioner.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  children: propTypes.node.isRequired,
};

export default Positioner;
