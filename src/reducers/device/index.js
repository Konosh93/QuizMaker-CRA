import * as types from '../../constants';
const initState = { scrollY: 0 };

const deviceReducer = (state=initState, action) => {
  switch (action.type) {
    case types.RESIZE:
      return {...state, width:action.payload.width, height: action.payload.height};
    case types.SET_SCROLL_VALUE:
      return {...state, scrollY: action.payload.scrollY};
    default:
      return state;
  }
};

export default deviceReducer;
