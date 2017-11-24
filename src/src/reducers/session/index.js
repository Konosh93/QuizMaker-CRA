
const initState = { loggedIn: false, token: null };

const sessionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'SIGNUP':
      if (action.payload.errors) {
        return { errors: action.payload.errors };
      }
      return { token: action.payload.token, loggedIn: true };
    default:
      return state;
  }
};

export default sessionReducer;
