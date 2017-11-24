import { LOGIN, SIGNUP, BEGIN_AUTH } from '../../constants';

const initState = { isAuthenticating: false };

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
    case SIGNUP:
      if (action.payload.errors) {
        return { errors: action.payload.errors, isAuthenticating: false };
      }
      return { ...action.payload, isAuthenticating: false};
    case BEGIN_AUTH:
      return { isAuthenticating: true }
    default:
      return state;
  }
};

export default userReducer;
